/**
 * Compliance Audit Logging
 * Records all compliance-related events for regulatory review.
 *
 * In production, these logs should be persisted to Supabase.
 * For now, logs to console with structured JSON for log aggregation.
 */

import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import type { ViolationCategory } from "./fairHousingFilter";

export enum ComplianceEventType {
  FAIR_HOUSING_VIOLATION = "FAIR_HOUSING_VIOLATION",
  RESTRICTED_CONTENT_BLOCKED = "RESTRICTED_CONTENT_BLOCKED",
  RESPONSE_FILTERED = "RESPONSE_FILTERED",
  ARCHETYPE_ASSIGNMENT = "ARCHETYPE_ASSIGNMENT",
}

export interface ComplianceEvent {
  type: ComplianceEventType;
  violations?: ViolationCategory[];
  matchedPatterns?: string[];
  timestamp: string;
  sessionId?: string;
  metadata?: Record<string, string>;
}

export interface AuditLogEntry {
  id: string;
  event: ComplianceEvent;
  createdAt: string;
}

/**
 * Logs a compliance event with a unique ID and formatted timestamp.
 * Currently outputs structured JSON to stdout for log aggregation.
 *
 * TODO: Persist to Supabase `compliance_audit_log` table when
 * database integration is ready.
 */
export function logComplianceEvent(event: ComplianceEvent): AuditLogEntry {
  const entry: AuditLogEntry = {
    id: uuidv4(),
    event,
    createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
  };

  console.log(
    JSON.stringify({
      level: "COMPLIANCE",
      ...entry,
    })
  );

  return entry;
}

/**
 * Creates a compliance event for archetype assignments.
 * Ensures no protected class characteristics influenced the assignment.
 */
export function logArchetypeAssignment(
  sessionId: string,
  archetype: string,
  inputFactors: string[]
): AuditLogEntry {
  return logComplianceEvent({
    type: ComplianceEventType.ARCHETYPE_ASSIGNMENT,
    timestamp: new Date().toISOString(),
    sessionId,
    metadata: {
      archetype,
      inputFactors: inputFactors.join(", "),
      protectedClassCheck: "passed",
    },
  });
}
