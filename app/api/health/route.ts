// app/api/health/route.ts
import { NextResponse } from "next/server";

interface HealthCheck {
  status: "healthy" | "degraded" | "unhealthy";
  version: string;
  timestamp: string;
  checks: {
    api: "ok" | "error";
    openai: "ok" | "error" | "unchecked";
    database: "ok" | "error" | "unchecked";
  };
}

/**
 * GET /api/health
 *
 * Health check endpoint for monitoring and deployment verification.
 * Returns status of core services.
 */
export async function GET() {
  const health: HealthCheck = {
    status: "healthy",
    version: process.env.MOAI_VERSION || "1.0.0",
    timestamp: new Date().toISOString(),
    checks: {
      api: "ok",
      openai: process.env.OPENAI_API_KEY ? "ok" : "error",
      database: "unchecked", // TODO: Add Supabase ping when connected
    },
  };

  // Determine overall status
  if (health.checks.openai === "error") {
    health.status = "degraded";
  }

  const statusCode = health.status === "healthy" ? 200 : 503;

  return NextResponse.json(health, { status: statusCode });
}
