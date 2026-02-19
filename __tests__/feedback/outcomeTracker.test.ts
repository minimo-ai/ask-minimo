// __tests__/feedback/outcomeTracker.test.ts

// Mock uuid before importing modules that use it
let mockUuidCounter = 0;
jest.mock("uuid", () => ({
  v4: jest.fn(() => `test-uuid-${++mockUuidCounter}`),
}));

import { recordOutcome } from "@/lib/feedback/outcomeTracker";
import { OutcomeFeedbackSchema, type OutcomeFeedback } from "@/lib/feedback/schema";

describe("Outcome Tracker", () => {
  const validFeedback: OutcomeFeedback = {
    sessionId: "550e8400-e29b-41d4-a716-446655440000",
    agentId: "agent-123",
    assignedArchetype: "Analyst",
    archetypeAccuracyRating: 4,
    showingsBeforeOffer: 5,
    daysToOffer: 21,
    transactionClosed: true,
    unspokenSignalUsed: true,
    unspokenSignalEffective: true,
    communicationStyleRating: 4,
    wouldChangeArchetype: false,
  };

  beforeEach(() => {
    mockUuidCounter = 0;
  });

  describe("recordOutcome", () => {
    it("should record valid outcome and return an ID", async () => {
      const result = await recordOutcome(validFeedback);

      expect(result.id).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(result.id.length).toBeGreaterThan(0);
    });

    it("should generate unique IDs for each outcome", async () => {
      const result1 = await recordOutcome(validFeedback);
      const result2 = await recordOutcome(validFeedback);

      expect(result1.id).not.toBe(result2.id);
    });
  });

  describe("OutcomeFeedbackSchema validation", () => {
    it("should validate correct feedback data", () => {
      const result = OutcomeFeedbackSchema.safeParse(validFeedback);
      expect(result.success).toBe(true);
    });

    it("should reject invalid archetype", () => {
      const invalidFeedback = {
        ...validFeedback,
        assignedArchetype: "InvalidArchetype",
      };

      const result = OutcomeFeedbackSchema.safeParse(invalidFeedback);
      expect(result.success).toBe(false);
    });

    it("should reject accuracy rating out of range", () => {
      const invalidFeedback = {
        ...validFeedback,
        archetypeAccuracyRating: 6,
      };

      const result = OutcomeFeedbackSchema.safeParse(invalidFeedback);
      expect(result.success).toBe(false);
    });

    it("should reject negative showings count", () => {
      const invalidFeedback = {
        ...validFeedback,
        showingsBeforeOffer: -1,
      };

      const result = OutcomeFeedbackSchema.safeParse(invalidFeedback);
      expect(result.success).toBe(false);
    });

    it("should accept feedback without optional fields", () => {
      const minimalFeedback: OutcomeFeedback = {
        sessionId: "550e8400-e29b-41d4-a716-446655440000",
        agentId: "agent-123",
        assignedArchetype: "Dreamer",
        archetypeAccuracyRating: 3,
        showingsBeforeOffer: 10,
        daysToOffer: 45,
        transactionClosed: false,
        unspokenSignalUsed: false,
        communicationStyleRating: 3,
        wouldChangeArchetype: true,
        suggestedArchetype: "Pragmatist",
      };

      const result = OutcomeFeedbackSchema.safeParse(minimalFeedback);
      expect(result.success).toBe(true);
    });

    it("should validate all 5 archetypes", () => {
      const archetypes = [
        "Analyst",
        "Dreamer",
        "Pragmatist",
        "Protector",
        "Investor",
      ] as const;

      archetypes.forEach((archetype) => {
        const feedback = { ...validFeedback, assignedArchetype: archetype };
        const result = OutcomeFeedbackSchema.safeParse(feedback);
        expect(result.success).toBe(true);
      });
    });

    it("should validate suggestedArchetype when wouldChangeArchetype is true", () => {
      const feedbackWithSuggestion = {
        ...validFeedback,
        wouldChangeArchetype: true,
        suggestedArchetype: "Investor",
      };

      const result = OutcomeFeedbackSchema.safeParse(feedbackWithSuggestion);
      expect(result.success).toBe(true);
    });
  });

  describe("Unspoken Signal tracking", () => {
    it("should allow unspokenSignalEffective when unspokenSignalUsed is true", () => {
      const feedback = {
        ...validFeedback,
        unspokenSignalUsed: true,
        unspokenSignalEffective: true,
      };

      const result = OutcomeFeedbackSchema.safeParse(feedback);
      expect(result.success).toBe(true);
    });

    it("should allow unspokenSignalEffective to be undefined", () => {
      const feedback = {
        ...validFeedback,
        unspokenSignalUsed: true,
        unspokenSignalEffective: undefined,
      };

      const result = OutcomeFeedbackSchema.safeParse(feedback);
      expect(result.success).toBe(true);
    });
  });
});
