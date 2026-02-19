// lib/feedback/schema.ts
import { z } from "zod";

/**
 * Zod schemas for runtime validation of feedback data.
 * These mirror the TypeScript types but provide runtime checks.
 */

export const TransactionOutcomeSchema = z.enum([
  "closed_with_momentus",
  "closed_with_other",
  "still_searching",
  "paused",
  "no_longer_interested",
]);

export const ClientSatisfactionSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const PredictedReadinessSchema = z.enum([
  "ready_now",
  "3_months",
  "6_months",
  "12_plus_months",
]);

export const OutcomeSubmissionSchema = z.object({
  sessionId: z.string().uuid(),
  clientArchetype: z.string().min(1).max(100),
  predictedReadiness: PredictedReadinessSchema,
  actualOutcome: TransactionOutcomeSchema,
  timeToOutcome: z.number().int().min(0).max(3650), // max ~10 years
  satisfaction: ClientSatisfactionSchema.optional(),
  agentId: z.string().uuid().optional(),
  propertyType: z.string().max(100).optional(),
  priceRange: z.string().max(50).optional(),
  notes: z.string().max(1000).optional(),
});

export const SessionFeedbackSchema = z.object({
  sessionId: z.string().uuid(),
  rating: ClientSatisfactionSchema,
  helpful: z.boolean(),
  wouldRecommend: z.boolean(),
  comments: z.string().max(2000).optional(),
});

export const ArchetypeCorrectionSchema = z.object({
  sessionId: z.string().uuid(),
  originalArchetype: z.string().min(1).max(100),
  correctedArchetype: z.string().min(1).max(100),
  reason: z.string().max(500),
  correctedBy: z.string().uuid(), // agent or admin ID
});

/**
 * SQL schema for Supabase (for reference when setting up DB)
 *
 * CREATE TABLE outcomes (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   session_id UUID NOT NULL,
 *   client_archetype VARCHAR(100) NOT NULL,
 *   predicted_readiness VARCHAR(20) NOT NULL,
 *   actual_outcome VARCHAR(30) NOT NULL,
 *   time_to_outcome INTEGER NOT NULL,
 *   satisfaction SMALLINT CHECK (satisfaction BETWEEN 1 AND 5),
 *   agent_id UUID,
 *   property_type VARCHAR(100),
 *   price_range VARCHAR(50),
 *   notes TEXT,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * CREATE TABLE session_feedback (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   session_id UUID NOT NULL,
 *   rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
 *   helpful BOOLEAN NOT NULL,
 *   would_recommend BOOLEAN NOT NULL,
 *   comments TEXT,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * CREATE TABLE archetype_corrections (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   session_id UUID NOT NULL,
 *   original_archetype VARCHAR(100) NOT NULL,
 *   corrected_archetype VARCHAR(100) NOT NULL,
 *   reason VARCHAR(500) NOT NULL,
 *   corrected_by UUID NOT NULL,
 *   created_at TIMESTAMPTZ DEFAULT NOW()
 * );
 *
 * -- Indexes for reporting
 * CREATE INDEX idx_outcomes_archetype ON outcomes(client_archetype);
 * CREATE INDEX idx_outcomes_created ON outcomes(created_at);
 * CREATE INDEX idx_corrections_original ON archetype_corrections(original_archetype);
 */

export type OutcomeSubmission = z.infer<typeof OutcomeSubmissionSchema>;
export type SessionFeedback = z.infer<typeof SessionFeedbackSchema>;
export type ArchetypeCorrection = z.infer<typeof ArchetypeCorrectionSchema>;
