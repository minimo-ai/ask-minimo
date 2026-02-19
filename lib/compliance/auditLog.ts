// lib/compliance/auditLog.ts

export interface AuditLogEntry {
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

export async function logComplianceEvent(entry: AuditLogEntry): Promise<void> {
  try {
    // Phase 1: Log to console + file (pre-database)
    // Phase 2: Replace with your database write (Supabase/Postgres recommended)
    console.log("[COMPLIANCE AUDIT]", JSON.stringify(entry));

    // When your DB is ready, replace above with:
    // await db.complianceLog.create({ data: entry })

    // For now, also write to a local audit file
    // This gives you a paper trail immediately
    if (process.env.NODE_ENV === "production") {
      await writeAuditToStorage(entry);
    }
  } catch (error) {
    // Compliance logging failure should NEVER crash the app
    // But it should alert you immediately
    console.error("[COMPLIANCE LOG FAILURE]", error);
    // TODO: Add alerting (email/Slack) when this fires
  }
}

async function writeAuditToStorage(entry: AuditLogEntry): Promise<void> {
  // Placeholder for your storage solution
  // Options: Vercel Blob, Supabase, AWS S3
  // Do NOT use local filesystem in serverless environments
}
