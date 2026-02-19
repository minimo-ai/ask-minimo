// lib/feedback/archetypeAccuracy.ts
import type { OutcomeRecord } from "./outcomeTracker";

export interface AccuracyMetrics {
  archetype: string;
  totalPredictions: number;
  correctPredictions: number;
  accuracyRate: number;
  avgTimeToOutcome: number;
  avgSatisfaction: number | null;
}

export interface ReadinessAccuracy {
  predictedReadiness: string;
  actualAvgDays: number;
  withinRange: number; // percentage within predicted range
  sampleSize: number;
}

/**
 * Readiness prediction ranges in days.
 * Used to evaluate if predictions were accurate.
 */
const READINESS_RANGES: Record<string, { min: number; max: number }> = {
  ready_now: { min: 0, max: 60 },
  "3_months": { min: 61, max: 120 },
  "6_months": { min: 121, max: 210 },
  "12_plus_months": { min: 211, max: 730 },
};

/**
 * Calculates archetype assignment accuracy based on outcomes.
 * Measures how well the 9-archetype framework predicts behavior.
 */
export function calculateArchetypeAccuracy(
  outcomes: OutcomeRecord[]
): AccuracyMetrics[] {
  const archetypeGroups = new Map<string, OutcomeRecord[]>();

  for (const outcome of outcomes) {
    const existing = archetypeGroups.get(outcome.clientArchetype) || [];
    existing.push(outcome);
    archetypeGroups.set(outcome.clientArchetype, existing);
  }

  const metrics: AccuracyMetrics[] = [];

  for (const [archetype, records] of archetypeGroups) {
    const correctPredictions = records.filter((r) =>
      isPredictionCorrect(r.predictedReadiness, r.timeToOutcome)
    ).length;

    const satisfactionScores = records
      .filter((r) => r.satisfaction !== null)
      .map((r) => r.satisfaction as number);

    const avgSatisfaction =
      satisfactionScores.length > 0
        ? satisfactionScores.reduce((a, b) => a + b, 0) /
          satisfactionScores.length
        : null;

    metrics.push({
      archetype,
      totalPredictions: records.length,
      correctPredictions,
      accuracyRate:
        records.length > 0
          ? Math.round((correctPredictions / records.length) * 100)
          : 0,
      avgTimeToOutcome:
        records.length > 0
          ? Math.round(
              records.reduce((sum, r) => sum + r.timeToOutcome, 0) /
                records.length
            )
          : 0,
      avgSatisfaction: avgSatisfaction
        ? Math.round(avgSatisfaction * 10) / 10
        : null,
    });
  }

  return metrics.sort((a, b) => b.accuracyRate - a.accuracyRate);
}

/**
 * Evaluates readiness prediction accuracy across all archetypes.
 */
export function calculateReadinessAccuracy(
  outcomes: OutcomeRecord[]
): ReadinessAccuracy[] {
  const readinessGroups = new Map<string, OutcomeRecord[]>();

  for (const outcome of outcomes) {
    const existing = readinessGroups.get(outcome.predictedReadiness) || [];
    existing.push(outcome);
    readinessGroups.set(outcome.predictedReadiness, existing);
  }

  const accuracy: ReadinessAccuracy[] = [];

  for (const [readiness, records] of readinessGroups) {
    const range = READINESS_RANGES[readiness];
    if (!range) continue;

    const withinRangeCount = records.filter(
      (r) => r.timeToOutcome >= range.min && r.timeToOutcome <= range.max
    ).length;

    accuracy.push({
      predictedReadiness: readiness,
      actualAvgDays:
        records.length > 0
          ? Math.round(
              records.reduce((sum, r) => sum + r.timeToOutcome, 0) /
                records.length
            )
          : 0,
      withinRange:
        records.length > 0
          ? Math.round((withinRangeCount / records.length) * 100)
          : 0,
      sampleSize: records.length,
    });
  }

  return accuracy;
}

/**
 * Checks if a readiness prediction was accurate.
 */
function isPredictionCorrect(
  predicted: string,
  actualDays: number
): boolean {
  const range = READINESS_RANGES[predicted];
  if (!range) return false;
  return actualDays >= range.min && actualDays <= range.max;
}

/**
 * Generates a summary report for Mo's review.
 */
export function generateAccuracyReport(outcomes: OutcomeRecord[]): string {
  const archetypeMetrics = calculateArchetypeAccuracy(outcomes);
  const readinessMetrics = calculateReadinessAccuracy(outcomes);

  const overallAccuracy =
    archetypeMetrics.length > 0
      ? Math.round(
          archetypeMetrics.reduce((sum, m) => sum + m.accuracyRate, 0) /
            archetypeMetrics.length
        )
      : 0;

  return JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      totalOutcomes: outcomes.length,
      overallAccuracyRate: overallAccuracy,
      byArchetype: archetypeMetrics,
      byReadiness: readinessMetrics,
    },
    null,
    2
  );
}
