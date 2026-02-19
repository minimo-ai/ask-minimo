/**
 * Compliance Module Configuration
 * All settings sourced from environment variables — never hardcoded.
 */

export interface ComplianceConfig {
  /** Enable audit logging for compliance events */
  enableAuditLogging: boolean;
  /** Enable Fair Housing filter on AI responses */
  enableFairHousingFilter: boolean;
  /** Enable restricted content detection (rates, lending, etc.) */
  enableRestrictedContentFilter: boolean;
}

export const complianceConfig: ComplianceConfig = {
  enableAuditLogging:
    process.env.COMPLIANCE_AUDIT_LOGGING !== "false",
  enableFairHousingFilter:
    process.env.COMPLIANCE_FAIR_HOUSING_FILTER !== "false",
  enableRestrictedContentFilter:
    process.env.COMPLIANCE_RESTRICTED_CONTENT_FILTER !== "false",
};
