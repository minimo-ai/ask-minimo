// app/api/feedback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OutcomeFeedbackSchema } from "@/lib/feedback/schema";
import { v4 as uuidv4 } from "uuid";

/**
 * POST /api/feedback
 *
 * Records agent feedback on archetype accuracy and transaction outcomes.
 * This data feeds the archetype accuracy improvement loop.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = OutcomeFeedbackSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid feedback data", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const feedbackId = uuidv4();
    const feedback = parsed.data;

    // Phase 1: Log to console
    // Phase 2: Replace with Supabase insert
    console.log(
      "[OUTCOME FEEDBACK]",
      JSON.stringify({
        id: feedbackId,
        ...feedback,
        createdAt: new Date().toISOString(),
      })
    );

    // TODO: await supabase.from('outcome_feedback').insert({ id: feedbackId, ...feedback })

    return NextResponse.json({
      success: true,
      id: feedbackId,
    });
  } catch (error) {
    console.error("[FEEDBACK API ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
