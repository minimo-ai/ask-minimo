// __tests__/compliance/fairHousingFilter.test.ts

// Mock uuid before importing modules that use it
let mockUuidCounter = 0;
jest.mock("uuid", () => ({
  v4: jest.fn(() => `test-uuid-${++mockUuidCounter}`),
}));

// Mock the audit log to avoid console noise in tests
jest.mock("@/lib/compliance/auditLog", () => ({
  logComplianceEvent: jest.fn().mockResolvedValue(undefined),
}));

import { runFairHousingFilter } from "@/lib/compliance/fairHousingFilter";

describe("Fair Housing Filter", () => {
  const testAgent = "agent-123";
  const testArchetype = "Analyst";
  const testContext = "property search";

  beforeEach(() => {
    mockUuidCounter = 0;
  });

  describe("clean output detection", () => {
    it("should pass clean output with no violations", async () => {
      const cleanOutput =
        "This property has 3 bedrooms, 2 bathrooms, and a large backyard.";

      const result = await runFairHousingFilter(
        cleanOutput,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(true);
      expect(result.severity).toBe("clean");
      expect(result.flaggedTerms).toHaveLength(0);
      expect(result.flaggedPatterns).toHaveLength(0);
      expect(result.sanitizedOutput).toBe(cleanOutput);
    });

    it("should pass output discussing property features only", async () => {
      const propertyOutput =
        "The home features hardwood floors, granite countertops, and a two-car garage. It's within your budget of $450,000.";

      const result = await runFairHousingFilter(
        propertyOutput,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(true);
      expect(result.severity).toBe("clean");
    });
  });

  describe("protected class term detection (warning)", () => {
    it("should flag 'school district' as a warning", async () => {
      const output = "This home is in a great school district.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.severity).toBe("warning");
      expect(result.flaggedTerms).toContain("school district");
    });

    it("should flag 'safe area' as a warning", async () => {
      const output = "This is a very safe area for families.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.severity).toBe("warning");
      expect(result.flaggedTerms).toContain("safe area");
    });

    it("should flag religious references", async () => {
      const output = "There is a church nearby if that matters to you.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.flaggedTerms).toContain("church");
    });

    it("should redact flagged terms in warning mode", async () => {
      const output = "This is a good area with nice people.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.severity).toBe("warning");
      expect(result.sanitizedOutput).toContain("[REDACTED]");
      expect(result.sanitizedOutput).not.toContain("good area");
    });
  });

  describe("steering pattern detection (blocked)", () => {
    it("should block 'people like you' steering language", async () => {
      const output = "People like you would really enjoy this neighborhood.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.severity).toBe("blocked");
      expect(result.flaggedPatterns.length).toBeGreaterThan(0);
    });

    it("should block 'you would fit better' steering", async () => {
      const output = "You'd fit better in a different part of town.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.severity).toBe("blocked");
    });

    it("should block demographic characterization", async () => {
      const output = "This neighborhood is mostly young professionals.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.severity).toBe("blocked");
    });

    it("should block avoidance suggestions", async () => {
      const output = "You might not want to look in that area.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.passed).toBe(false);
      expect(result.severity).toBe("blocked");
    });

    it("should replace blocked content with safe alternative", async () => {
      const output = "People like you should avoid that neighborhood.";

      const result = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result.severity).toBe("blocked");
      expect(result.sanitizedOutput).toContain("Compliance filter applied");
      expect(result.sanitizedOutput).not.toContain("avoid");
    });
  });

  describe("audit trail", () => {
    it("should generate a unique audit ID for each check", async () => {
      const output = "A clean property description.";

      const result1 = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );
      const result2 = await runFairHousingFilter(
        output,
        testAgent,
        testArchetype,
        testContext
      );

      expect(result1.auditId).toBeDefined();
      expect(result2.auditId).toBeDefined();
      expect(result1.auditId).not.toBe(result2.auditId);
    });
  });
});
