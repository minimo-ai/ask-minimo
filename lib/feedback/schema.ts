// lib/feedback/schema.ts
import { z } from "zod";

export const OutcomeFeedbackSchema = z.object({
  // Transaction identifiers
  sessionId: z.string().uuid(),
  agentId: z.string().min(1),
  transactionDate: z.string().datetime().optional(),

  // Archetype accuracy
  assignedArchetype: z.enum([
    "Analyst",
    "Dreamer",
    "Pragmatist",
    "Protector",
    "Investor",
  ]),
  archetypeAccuracyRating: z.number().min(1).max(5),
  archetypeComments: z.string().max(500).optional(),

  // Transaction outcomes
  showingsBeforeOffer: z.number().min(0).max(100),
  daysToOffer: z.number().min(0),
  clientSatisfactionRating: z.number().min(1).max(5).optional(),
  transactionClosed: z.boolean(),

  // Unspoken Signal accuracy
  unspokenSignalUsed: z.boolean(),
  unspokenSignalEffective: z.boolean().optional(),

  // Communication style fit
  communicationStyleRating: z.number().min(1).max(5),

  // What the agent would change
  wouldChangeArchetype: z.boolean(),
  suggestedArchetype: z
    .enum(["Analyst", "Dreamer", "Pragmatist", "Protector", "Investor"])
    .optional(),
});

export type OutcomeFeedback = z.infer<typeof OutcomeFeedbackSchema>;
