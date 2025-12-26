/**
 * Lightweight "restricted content" detector.
 * Goal: avoid lending/underwriting/rate guidance and market predictions.
 * This is intentionally conservative.
 */
export function looksRestricted(text: string) {
  const s = text.toLowerCase();

  const restrictedPhrases = [
    // rates / pricing
    "interest rate",
    "mortgage rate",
    "apr",
    "rate lock",
    "points",
    "discount points",
    // qualification / underwriting
    "qualify",
    "qualification",
    "prequal",
    "pre-qual",
    "preapproval",
    "pre-approval",
    "underwrite",
    "underwriting",
    "debt to income",
    "dti",
    "credit score",
    "fico",
    "how much can i borrow",
    "how much house can i afford",
    // market prediction / timing pressure
    "will prices go",
    "market will crash",
    "should i buy now",
    "should i wait",
    "predict the market"
  ];

  return restrictedPhrases.some((p) => s.includes(p));
}

export const RESTRICTED_REFUSAL =
  "I can’t help with interest rates, qualification, or personalized lending guidance (and I can’t predict the market). " +
  "But I *can* explain the general process, common terms, and what questions to ask a licensed professional so you feel oriented.";
