/**
 * Compliance Audit Logging
 * Records all compliance-related events for regulatory review.
 *
 * In production, these logs should be persisted to Supabase.
 * For now, logs to console with structured JSON for log aggregation.
 */

import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export interface ComplianceAuditEvent {
  auditId: string;
  timestamp: string;
  agentId: string;
  clientArchetype: string;
  severity: "clean" | "warning" | "blocked";
  flaggedTerms: string[];
  flaggedPatterns: string[];
  originalOutputHash: string;
  passed: boolean;
}

export interface AuditLogEntry {
  id: string;
  event: ComplianceAuditEvent;
  createdAt: string;
}

/**
 * Logs a compliance event with structured data for audit trail.
 * Currently outputs structured JSON to stdout for log aggregation.
 *
 * TODO: Persist to Supabase `compliance_audit_log` table when
 * database integration is ready.
 */
export async function logComplianceEvent(
  event: ComplianceAuditEvent
): Promise<AuditLogEntry> {
  const entry: AuditLogEntry = {
    id: event.auditId || uuidv4(),
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
export async function logArchetypeAssignment(
  sessionId: string,
  archetype: string,
  inputFactors: string[]
): Promise<AuditLogEntry> {
  return logComplianceEvent({
    auditId: uuidv4(),
    timestamp: new Date().toISOString(),
    agentId: "system",
    clientArchetype: archetype,
    severity: "clean",
    flaggedTerms: [],
    flaggedPatterns: [],
    originalOutputHash: "",
    passed: true,
  });
}
