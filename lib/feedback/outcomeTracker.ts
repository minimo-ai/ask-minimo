// lib/feedback/outcomeTracker.ts
import { OutcomeFeedback } from "./schema";
import { v4 as uuidv4 } from "uuid";

export interface OutcomeRecord {
  id: string;
  feedback: OutcomeFeedback;
  recordedAt: string;
  version: string; // Mo.ai version that generated this session
}

export async function recordOutcome(
  feedback: OutcomeFeedback
): Promise<{ id: string }> {
  const record: OutcomeRecord = {
    id: uuidv4(),
    feedback,
    recordedAt: new Date().toISOString(),
    version: process.env.MOAI_VERSION || "1.0.0",
  };

  // Phase 1: Log to console (swap for DB write when ready)
  console.log("[OUTCOME RECORDED]", JSON.stringify(record));

  // Phase 2: When DB is ready:
  // await db.outcomeLog.create({ data: record })

  // Calculate and store archetype accuracy aggregate
  await updateArchetypeAccuracy(feedback);

  return { id: record.id };
}

async function updateArchetypeAccuracy(feedback: OutcomeFeedback) {
  // This is where the learning loop lives
  // When you have 50+ records per archetype, you can start
  // identifying which discovery question combinations
  // most reliably predict the correct archetype

  const accuracySignal = {
    archetype: feedback.assignedArchetype,
    accurate: feedback.archetypeAccuracyRating >= 4,
    showingsResult: feedback.showingsBeforeOffer,
    closed: feedback.transactionClosed,
    timestamp: new Date().toISOString(),
  };

  console.log("[ACCURACY SIGNAL]", JSON.stringify(accuracySignal));
  // Future: feed this into your model retraining pipeline
}
