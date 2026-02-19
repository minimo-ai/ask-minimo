// app/api/feedback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OutcomeFeedbackSchema } from "@/lib/feedback/schema";
import { recordOutcome } from "@/lib/feedback/outcomeTracker";

export async function POST(req: NextRequest) {
  try {
    // Parse and validate — never trust raw input
    const body = await req.json();
    const parsed = OutcomeFeedbackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid feedback data",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    // Record the outcome
    const result = await recordOutcome(parsed.data);

    return NextResponse.json(
      { success: true, feedbackId: result.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[FEEDBACK API ERROR]", error);
    return NextResponse.json(
      { error: "Failed to record feedback" },
      { status: 500 }
    );
  }
}

// Agents can retrieve aggregate accuracy stats
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const agentId = searchParams.get("agentId");
    const archetype = searchParams.get("archetype");

    if (!agentId) {
      return NextResponse.json({ error: "agentId required" }, { status: 400 });
    }

    const stats = await getAccuracyStats(agentId, archetype);
    return NextResponse.json(stats);
  } catch (error) {
    console.error("[FEEDBACK STATS ERROR]", error);
    return NextResponse.json(
      { error: "Failed to retrieve stats" },
      { status: 500 }
    );
  }
}

// Placeholder — wire to your DB
async function getAccuracyStats(
  agentId: string,
  archetype: string | null
): Promise<{
  agentId: string;
  archetype: string;
  averageAccuracy: number | null;
  totalSessions: number;
  message: string;
}> {
  // TODO: Replace with Supabase query
  // const { data } = await supabase
  //   .from('outcome_feedback')
  //   .select('*')
  //   .eq('agentId', agentId)
  //   .eq(archetype ? 'assignedArchetype' : '', archetype || '')

  return {
    agentId,
    archetype: archetype || "all",
    averageAccuracy: null,
    totalSessions: 0,
    message: "Database connection pending",
  };
}
