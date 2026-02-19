// lib/feedback/archetypeAccuracy.ts
import type { OutcomeRecord } from "./outcomeTracker";

export interface ArchetypeMetrics {
  archetype: string;
  totalFeedback: number;
  avgAccuracyRating: number;
  avgSatisfaction: number | null;
  avgShowingsBeforeOffer: number;
  avgDaysToOffer: number;
  closeRate: number;
  unspokenSignalUsageRate: number;
  unspokenSignalEffectiveRate: number | null;
  correctionRate: number;
  suggestedAlternatives: string[];
}

/**
 * The 5 Mo.ai buyer/seller archetypes.
 * Core IP — assignment must NEVER be influenced by protected class characteristics.
 */
export const ARCHETYPES = [
  "Analyst",
  "Dreamer",
  "Pragmatist",
  "Protector",
  "Investor",
] as const;

export type Archetype = (typeof ARCHETYPES)[number];

/**
 * Calculates comprehensive metrics for each archetype based on agent feedback.
 * Used to refine archetype definitions and improve matching accuracy.
 */
export function calculateArchetypeMetrics(
  records: OutcomeRecord[]
): ArchetypeMetrics[] {
  const archetypeGroups = new Map<string, OutcomeRecord[]>();

  for (const record of records) {
    const existing = archetypeGroups.get(record.assignedArchetype) || [];
    existing.push(record);
    archetypeGroups.set(record.assignedArchetype, existing);
  }

  const metrics: ArchetypeMetrics[] = [];

  for (const archetype of ARCHETYPES) {
    const records = archetypeGroups.get(archetype) || [];

    if (records.length === 0) {
      metrics.push({
        archetype,
        totalFeedback: 0,
        avgAccuracyRating: 0,
        avgSatisfaction: null,
        avgShowingsBeforeOffer: 0,
        avgDaysToOffer: 0,
        closeRate: 0,
        unspokenSignalUsageRate: 0,
        unspokenSignalEffectiveRate: null,
        correctionRate: 0,
        suggestedAlternatives: [],
      });
      continue;
    }

    // Calculate averages
    const avgAccuracy =
      records.reduce((sum, r) => sum + r.archetypeAccuracyRating, 0) /
      records.length;

    const satisfactionRecords = records.filter(
      (r) => r.clientSatisfactionRating !== undefined
    );
    const avgSatisfaction =
      satisfactionRecords.length > 0
        ? satisfactionRecords.reduce(
            (sum, r) => sum + (r.clientSatisfactionRating || 0),
            0
          ) / satisfactionRecords.length
        : null;

    const avgShowings =
      records.reduce((sum, r) => sum + r.showingsBeforeOffer, 0) /
      records.length;

    const avgDays =
      records.reduce((sum, r) => sum + r.daysToOffer, 0) / records.length;

    // Calculate rates
    const closedCount = records.filter((r) => r.transactionClosed).length;
    const closeRate = (closedCount / records.length) * 100;

    const signalUsedCount = records.filter((r) => r.unspokenSignalUsed).length;
    const signalUsageRate = (signalUsedCount / records.length) * 100;

    const signalEffectiveRecords = records.filter(
      (r) => r.unspokenSignalUsed && r.unspokenSignalEffective !== undefined
    );
    const signalEffectiveRate =
      signalEffectiveRecords.length > 0
        ? (signalEffectiveRecords.filter((r) => r.unspokenSignalEffective)
            .length /
            signalEffectiveRecords.length) *
          100
        : null;

    // Correction analysis
    const wantToChange = records.filter((r) => r.wouldChangeArchetype);
    const correctionRate = (wantToChange.length / records.length) * 100;
    const suggestedAlternatives = [
      ...new Set(
        wantToChange
          .map((r) => r.suggestedArchetype)
          .filter((a) => a !== undefined) as string[]
      ),
    ];

    metrics.push({
      archetype,
      totalFeedback: records.length,
      avgAccuracyRating: Math.round(avgAccuracy * 10) / 10,
      avgSatisfaction: avgSatisfaction
        ? Math.round(avgSatisfaction * 10) / 10
        : null,
      avgShowingsBeforeOffer: Math.round(avgShowings * 10) / 10,
      avgDaysToOffer: Math.round(avgDays),
      closeRate: Math.round(closeRate),
      unspokenSignalUsageRate: Math.round(signalUsageRate),
      unspokenSignalEffectiveRate: signalEffectiveRate
        ? Math.round(signalEffectiveRate)
        : null,
      correctionRate: Math.round(correctionRate),
      suggestedAlternatives,
    });
  }

  return metrics.sort((a, b) => b.avgAccuracyRating - a.avgAccuracyRating);
}

/**
 * Generates a summary report for Mo's review.
 */
export function generateAccuracyReport(records: OutcomeRecord[]): string {
  const metrics = calculateArchetypeMetrics(records);

  const overallAccuracy =
    metrics.length > 0
      ? metrics
          .filter((m) => m.totalFeedback > 0)
          .reduce((sum, m) => sum + m.avgAccuracyRating, 0) /
        metrics.filter((m) => m.totalFeedback > 0).length
      : 0;

  return JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      totalFeedbackRecords: records.length,
      overallAccuracyRating: Math.round(overallAccuracy * 10) / 10,
      byArchetype: metrics,
    },
    null,
    2
  );
}
