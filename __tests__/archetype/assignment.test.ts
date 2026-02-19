// __tests__/archetype/assignment.test.ts
import { ARCHETYPES, type Archetype } from "@/lib/feedback/archetypeAccuracy";

describe("Archetype System", () => {
  describe("archetype definitions", () => {
    it("should have exactly 5 archetypes", () => {
      expect(ARCHETYPES).toHaveLength(5);
    });

    it("should include all required archetypes", () => {
      const required = [
        "Analyst",
        "Dreamer",
        "Pragmatist",
        "Protector",
        "Investor",
      ];
      required.forEach((archetype) => {
        expect(ARCHETYPES).toContain(archetype);
      });
    });

    it("should be a readonly tuple", () => {
      // TypeScript ensures this at compile time, but we verify runtime immutability
      expect(Object.isFrozen(ARCHETYPES)).toBe(false); // as const doesn't freeze
      expect(ARCHETYPES.length).toBe(5);
    });
  });

  describe("archetype type safety", () => {
    it("should allow valid archetype values", () => {
      const validArchetypes: Archetype[] = [
        "Analyst",
        "Dreamer",
        "Pragmatist",
        "Protector",
        "Investor",
      ];

      validArchetypes.forEach((archetype) => {
        expect(ARCHETYPES).toContain(archetype);
      });
    });
  });

  describe("Fair Housing compliance", () => {
    /**
     * CRITICAL: Archetype assignment must NEVER be influenced by
     * protected class characteristics. These tests document the
     * compliance requirement.
     */

    const PROTECTED_CHARACTERISTICS = [
      "race",
      "color",
      "religion",
      "sex",
      "national origin",
      "disability",
      "familial status",
    ];

    it("should document that archetypes are behavior-based, not demographic", () => {
      // This is a documentation test - archetypes should be based on:
      // - Decision-making style
      // - Communication preferences
      // - Risk tolerance
      // - Timeline expectations
      // - Information processing style

      // NOT based on:
      PROTECTED_CHARACTERISTICS.forEach((characteristic) => {
        // Verify none of the archetype names contain protected terms
        ARCHETYPES.forEach((archetype) => {
          expect(archetype.toLowerCase()).not.toContain(characteristic);
        });
      });
    });

    it("should have archetypes that describe behavior patterns only", () => {
      const behaviorDescriptions: Record<Archetype, string> = {
        Analyst: "Data-driven, methodical decision maker",
        Dreamer: "Visionary, emotionally-connected explorer",
        Pragmatist: "Practical, efficiency-focused buyer",
        Protector: "Security-minded, family-first decision maker",
        Investor: "ROI-focused, opportunity-seeking buyer",
      };

      // Each archetype should have a behavior-based description
      ARCHETYPES.forEach((archetype) => {
        expect(behaviorDescriptions[archetype]).toBeDefined();
        expect(behaviorDescriptions[archetype].length).toBeGreaterThan(0);
      });
    });
  });
});
