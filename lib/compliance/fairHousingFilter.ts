/**
 * Fair Housing Compliance Filter
 * Detects and prevents responses that could violate the Fair Housing Act.
 *
 * Protected classes (federal): race, color, religion, sex, disability,
 * familial status, national origin.
 *
 * Texas additions: age, ancestry, sexual orientation, gender identity,
 * marital status, military/veteran status.
 */

import { logComplianceEvent, ComplianceEventType } from "./auditLog";
import { complianceConfig } from "./config";

/** Categories of Fair Housing violations to detect */
export type ViolationCategory =
  | "steering"
  | "discriminatory_language"
  | "protected_class_reference"
  | "neighborhood_characterization";

export interface FairHousingResult {
  flagged: boolean;
  violations: ViolationCategory[];
  matchedPatterns: string[];
  /** Sanitized response to use if the original was flagged */
  safeResponse: string | null;
}

/**
 * Phrases and patterns that indicate potential Fair Housing violations.
 * Organized by violation category for auditability.
 */
const VIOLATION_PATTERNS: Record<ViolationCategory, string[]> = {
  steering: [
    "you should live in",
    "you belong in",
    "that neighborhood isn't for",
    "people like you",
    "you'd be more comfortable in",
    "better suited for",
    "your kind of neighborhood",
    "a better fit for your family",
    "you wouldn't want to live",
    "not the right area for",
  ],
  discriminatory_language: [
    "bad neighborhood",
    "bad area",
    "sketchy area",
    "rough area",
    "dangerous neighborhood",
    "unsafe neighborhood",
    "good families",
    "better people",
    "wrong side of",
    "ethnic neighborhood",
    "changing neighborhood",
    "up and coming area",
    "urban area",
    "inner city",
    "ghetto",
    "barrio",
  ],
  protected_class_reference: [
    "because of your race",
    "because of your religion",
    "because you're pregnant",
    "because of your disability",
    "because you have kids",
    "because you're single",
    "because of your national origin",
    "because you're a woman",
    "because you're a man",
    "church nearby",
    "mosque nearby",
    "synagogue nearby",
    "temple nearby",
    "mostly white",
    "mostly black",
    "mostly hispanic",
    "mostly asian",
  ],
  neighborhood_characterization: [
    "safe neighborhood",
    "safe area",
    "safest neighborhood",
    "family-friendly area",
    "good school district",
    "best schools",
    "low crime area",
    "high crime area",
    "crime rate",
  ],
};

/** Standard redirect for Fair Housing violations */
const FAIR_HOUSING_REDIRECT =
  "I want to make sure I'm being helpful in the right way here. " +
  "I focus on objective home features — like layout, size, price range, and commute — " +
  "rather than characterizing neighborhoods. For school ratings, safety data, and demographics, " +
  "I'd recommend checking neutral public sources like GreatSchools.org or local government sites. " +
  "What matters most to you in a home itself?";

/**
 * Scans text for potential Fair Housing violations.
 * Used on both user input (to guide response) and AI output (to catch issues).
 */
export function checkFairHousing(text: string): FairHousingResult {
  const lower = text.toLowerCase();
  const violations: ViolationCategory[] = [];
  const matchedPatterns: string[] = [];

  for (const [category, patterns] of Object.entries(VIOLATION_PATTERNS)) {
    for (const pattern of patterns) {
      if (lower.includes(pattern)) {
        const cat = category as ViolationCategory;
        if (!violations.includes(cat)) {
          violations.push(cat);
        }
        matchedPatterns.push(pattern);
      }
    }
  }

  const flagged = violations.length > 0;

  if (flagged && complianceConfig.enableAuditLogging) {
    logComplianceEvent({
      type: ComplianceEventType.FAIR_HOUSING_VIOLATION,
      violations,
      matchedPatterns,
      timestamp: new Date().toISOString(),
    });
  }

  return {
    flagged,
    violations,
    matchedPatterns,
    safeResponse: flagged ? FAIR_HOUSING_REDIRECT : null,
  };
}

/**
 * Scans AI-generated output before it reaches the user.
 * Returns the original text if clean, or the safe redirect if flagged.
 */
export function filterAIResponse(responseText: string): string {
  const result = checkFairHousing(responseText);
  return result.flagged && result.safeResponse
    ? result.safeResponse
    : responseText;
}
