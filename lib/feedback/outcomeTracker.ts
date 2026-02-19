// lib/feedback/outcomeTracker.ts
import { v4 as uuidv4 } from "uuid";
import type { OutcomeFeedback } from "./schema";

export interface OutcomeRecord extends OutcomeFeedback {
  id: string;
  createdAt: string;
}

/**
 * Records a transaction outcome for feedback loop analysis.
 * This data feeds into archetype accuracy scoring.
 */
export async function recordOutcome(
  feedback: OutcomeFeedback
): Promise<OutcomeRecord> {
  const record: OutcomeRecord = {
    id: uuidv4(),
    ...feedback,
    createdAt: new Date().toISOString(),
  };

  // Phase 1: Log to console
  // Phase 2: Replace with Supabase insert
  console.log("[OUTCOME RECORDED]", JSON.stringify(record));

  // TODO: await supabase.from('outcome_feedback').insert(record)

  return record;
}

/**
 * Calculates archetype accuracy rate from feedback data.
 */
export function calculateArchetypeAccuracy(
  records: OutcomeRecord[]
): Map<string, { avgRating: number; count: number }> {
  const archetypeGroups = new Map<string, number[]>();

  for (const record of records) {
    const existing = archetypeGroups.get(record.assignedArchetype) || [];
    existing.push(record.archetypeAccuracyRating);
    archetypeGroups.set(record.assignedArchetype, existing);
  }

  const accuracy = new Map<string, { avgRating: number; count: number }>();

  for (const [archetype, ratings] of archetypeGroups) {
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    accuracy.set(archetype, {
      avgRating: Math.round(avg * 10) / 10,
      count: ratings.length,
    });
  }

  return accuracy;
}

/**
 * Identifies archetypes that agents frequently want to change.
 * Signals potential issues with archetype definitions or assignment logic.
 */
export function getArchetypeCorrectionRate(
  records: OutcomeRecord[]
): Map<string, { correctionRate: number; suggestedAlternatives: string[] }> {
  const archetypeGroups = new Map<string, OutcomeRecord[]>();

  for (const record of records) {
    const existing = archetypeGroups.get(record.assignedArchetype) || [];
    existing.push(record);
    archetypeGroups.set(record.assignedArchetype, existing);
  }

  const corrections = new Map<
    string,
    { correctionRate: number; suggestedAlternatives: string[] }
  >();

  for (const [archetype, records] of archetypeGroups) {
    const wantToChange = records.filter((r) => r.wouldChangeArchetype);
    const alternatives = wantToChange
      .map((r) => r.suggestedArchetype)
      .filter((a) => a !== undefined) as string[];

    corrections.set(archetype, {
      correctionRate: Math.round((wantToChange.length / records.length) * 100),
      suggestedAlternatives: [...new Set(alternatives)],
    });
  }

  return corrections;
}
