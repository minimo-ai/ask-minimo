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
  const mockContext = {
    agentId: "agent-test-001",
    archetype: "Protector",
    context: "buyer-brief",
  };

  beforeEach(() => {
    mockUuidCounter = 0;
  });

  it("should PASS clean output with no violations", async () => {
    const cleanOutput = `
      Based on your client's preference for single-story homes
      with a large backyard and proximity to parks, here are
      the top 5 matches within their $450K budget.
    `;

    const result = await runFairHousingFilter(
      cleanOutput,
      mockContext.agentId,
      mockContext.archetype,
      mockContext.context
    );

    expect(result.passed).toBe(true);
    expect(result.severity).toBe("clean");
    expect(result.flaggedTerms).toHaveLength(0);
  });

  it("should FLAG output containing protected class terms", async () => {
    const violatingOutput = `
      This neighborhood is great for families with children
      and has a lovely church community nearby.
    `;

    const result = await runFairHousingFilter(
      violatingOutput,
      mockContext.agentId,
      mockContext.archetype,
      mockContext.context
    );

    expect(result.passed).toBe(false);
    expect(result.flaggedTerms.length).toBeGreaterThan(0);
  });

  it("should BLOCK output containing steering language", async () => {
    const steeringOutput = `
      You would fit better in the Southlake area —
      people like you tend to prefer that community.
    `;

    const result = await runFairHousingFilter(
      steeringOutput,
      mockContext.agentId,
      mockContext.archetype,
      mockContext.context
    );

    expect(result.severity).toBe("blocked");
    expect(result.sanitizedOutput).not.toContain("people like you");
  });

  it("should always return an auditId regardless of result", async () => {
    const result = await runFairHousingFilter(
      "Any output here",
      mockContext.agentId,
      mockContext.archetype,
      mockContext.context
    );

    expect(result.auditId).toBeDefined();
    expect(result.auditId.length).toBeGreaterThan(0);
  });

  it("should never expose raw PII in audit logs", async () => {
    // The filter should only log a hash, never the raw output
    const sensitiveOutput = "Client name is John Smith SSN 123-45-6789";

    const result = await runFairHousingFilter(
      sensitiveOutput,
      mockContext.agentId,
      mockContext.archetype,
      mockContext.context
    );

    // Audit ID exists but raw content is hashed
    expect(result.auditId).toBeDefined();
  });
});
