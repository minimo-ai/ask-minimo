// lib/feedback/outcomeTracker.ts
import { v4 as uuidv4 } from "uuid";

export type TransactionOutcome =
  | "closed_with_momentus"
  | "closed_with_other"
  | "still_searching"
  | "paused"
  | "no_longer_interested";

export type ClientSatisfaction = 1 | 2 | 3 | 4 | 5;

export interface OutcomeRecord {
  id: string;
  sessionId: string;
  clientArchetype: string;
  predictedReadiness: "ready_now" | "3_months" | "6_months" | "12_plus_months";
  actualOutcome: TransactionOutcome;
  timeToOutcome: number; // days from first session
  satisfaction: ClientSatisfaction | null;
  agentId: string | null;
  propertyType: string | null;
  priceRange: string | null;
  notes: string | null;
  createdAt: string;
}

export interface OutcomeSubmission {
  sessionId: string;
  clientArchetype: string;
  predictedReadiness: OutcomeRecord["predictedReadiness"];
  actualOutcome: TransactionOutcome;
  timeToOutcome: number;
  satisfaction?: ClientSatisfaction;
  agentId?: string;
  propertyType?: string;
  priceRange?: string;
  notes?: string;
}

/**
 * Records a transaction outcome for feedback loop analysis.
 * This data feeds into archetype accuracy scoring.
 */
export async function recordOutcome(
  submission: OutcomeSubmission
): Promise<OutcomeRecord> {
  const record: OutcomeRecord = {
    id: uuidv4(),
    sessionId: submission.sessionId,
    clientArchetype: submission.clientArchetype,
    predictedReadiness: submission.predictedReadiness,
    actualOutcome: submission.actualOutcome,
    timeToOutcome: submission.timeToOutcome,
    satisfaction: submission.satisfaction ?? null,
    agentId: submission.agentId ?? null,
    propertyType: submission.propertyType ?? null,
    priceRange: submission.priceRange ?? null,
    notes: submission.notes ?? null,
    createdAt: new Date().toISOString(),
  };

  // Phase 1: Log to console
  // Phase 2: Replace with Supabase insert
  console.log("[OUTCOME RECORDED]", JSON.stringify(record));

  // TODO: await supabase.from('outcomes').insert(record)

  return record;
}

/**
 * Calculates conversion rate by archetype.
 * Used to identify which archetypes convert best with Momentus.
 */
export function calculateConversionRate(
  outcomes: OutcomeRecord[]
): Map<string, number> {
  const archetypeGroups = new Map<string, OutcomeRecord[]>();

  for (const outcome of outcomes) {
    const existing = archetypeGroups.get(outcome.clientArchetype) || [];
    existing.push(outcome);
    archetypeGroups.set(outcome.clientArchetype, existing);
  }

  const conversionRates = new Map<string, number>();

  for (const [archetype, records] of archetypeGroups) {
    const closed = records.filter(
      (r) => r.actualOutcome === "closed_with_momentus"
    ).length;
    const rate = records.length > 0 ? closed / records.length : 0;
    conversionRates.set(archetype, Math.round(rate * 100));
  }

  return conversionRates;
}
