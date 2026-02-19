// lib/compliance/fairHousingFilter.ts
import { v4 as uuidv4 } from "uuid";
import { logComplianceEvent } from "./auditLog";

// Protected characteristics under Fair Housing Act
// These should NEVER influence property recommendations
const PROTECTED_CLASS_TERMS = [
  "race",
  "color",
  "religion",
  "sex",
  "gender",
  "national origin",
  "disability",
  "familial status",
  "children",
  "married",
  "single parent",
  "handicap",
  "church",
  "mosque",
  "temple",
  "synagogue",
  "school district",
  "neighborhood demographics",
  "type of people",
  "kind of people",
  "safe area",
  "good area",
  "bad area",
  "changing neighborhood",
] as const;

// Steering language patterns — recommending or discouraging
// based on anything other than the buyer's stated criteria
const STEERING_PATTERNS = [
  /you(?:'d| would) (?:fit|belong|feel comfortable) (?:better )?(?:in|at)/i,
  /people like you/i,
  /(?:that|this) (?:area|neighborhood|community) is (?:mostly|primarily|mainly)/i,
  /(?:avoid|stay away from|might not want)/i,
  /families (?:like yours|with your background)/i,
  /(?:better|worse) (?:for|fit for) (?:your|someone like)/i,
];

export interface ComplianceResult {
  passed: boolean;
  flaggedTerms: string[];
  flaggedPatterns: string[];
  sanitizedOutput: string;
  auditId: string;
  severity: "clean" | "warning" | "blocked";
}

export async function runFairHousingFilter(
  rawOutput: string,
  agentId: string,
  clientArchetype: string,
  context: string
): Promise<ComplianceResult> {
  const auditId = uuidv4();
  const lowerOutput = rawOutput.toLowerCase();

  // Check for protected class terms
  const flaggedTerms = PROTECTED_CLASS_TERMS.filter((term) =>
    lowerOutput.includes(term.toLowerCase())
  );

  // Check for steering patterns
  const flaggedPatterns = STEERING_PATTERNS.filter((pattern) =>
    pattern.test(rawOutput)
  ).map((p) => p.toString());

  // Determine severity
  let severity: ComplianceResult["severity"] = "clean";
  if (flaggedTerms.length > 0 || flaggedPatterns.length > 0) {
    severity = flaggedPatterns.length > 0 ? "blocked" : "warning";
  }

  // Sanitize output — remove or replace flagged content
  let sanitizedOutput = rawOutput;
  if (severity === "warning") {
    flaggedTerms.forEach((term) => {
      const regex = new RegExp(term, "gi");
      sanitizedOutput = sanitizedOutput.replace(regex, "[REDACTED]");
    });
  }

  if (severity === "blocked") {
    sanitizedOutput = generateSafeAlternative(context, clientArchetype);
  }

  // Log everything — every single check, pass or fail
  await logComplianceEvent({
    auditId,
    timestamp: new Date().toISOString(),
    agentId,
    clientArchetype,
    severity,
    flaggedTerms: [...flaggedTerms],
    flaggedPatterns,
    originalOutputHash: hashOutput(rawOutput), // Never log raw PII
    passed: severity === "clean",
  });

  return {
    passed: severity === "clean",
    flaggedTerms: [...flaggedTerms],
    flaggedPatterns,
    sanitizedOutput,
    auditId,
    severity,
  };
}

// Generate a safe, archetype-appropriate fallback
function generateSafeAlternative(context: string, archetype: string): string {
  return `Based on the criteria provided, here are properties that match
  your client's stated priorities. All recommendations are based solely
  on property features, price range, and the preferences your client
  expressed during discovery. [Compliance filter applied — Audit ID logged]`;
}

// One-way hash for audit trail without storing PII
function hashOutput(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}
