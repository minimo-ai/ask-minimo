// app/api/feedback/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  OutcomeSubmissionSchema,
  SessionFeedbackSchema,
  ArchetypeCorrectionSchema,
} from "@/lib/feedback/schema";
import { recordOutcome } from "@/lib/feedback/outcomeTracker";
import { v4 as uuidv4 } from "uuid";

/**
 * POST /api/feedback
 *
 * Accepts three types of feedback:
 * 1. outcome - Transaction outcome for archetype accuracy tracking
 * 2. session - User satisfaction with MiniMo session
 * 3. correction - Agent correction of archetype assignment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Missing type or data in request body" },
        { status: 400 }
      );
    }

    switch (type) {
      case "outcome": {
        const parsed = OutcomeSubmissionSchema.safeParse(data);
        if (!parsed.success) {
          return NextResponse.json(
            { error: "Invalid outcome data", details: parsed.error.issues },
            { status: 400 }
          );
        }
        const record = await recordOutcome(parsed.data);
        return NextResponse.json({
          success: true,
          id: record.id,
          type: "outcome",
        });
      }

      case "session": {
        const parsed = SessionFeedbackSchema.safeParse(data);
        if (!parsed.success) {
          return NextResponse.json(
            { error: "Invalid session feedback", details: parsed.error.issues },
            { status: 400 }
          );
        }
        // Phase 1: Log to console
        // Phase 2: Replace with Supabase insert
        const feedbackId = uuidv4();
        console.log(
          "[SESSION FEEDBACK]",
          JSON.stringify({ id: feedbackId, ...parsed.data })
        );
        return NextResponse.json({
          success: true,
          id: feedbackId,
          type: "session",
        });
      }

      case "correction": {
        const parsed = ArchetypeCorrectionSchema.safeParse(data);
        if (!parsed.success) {
          return NextResponse.json(
            {
              error: "Invalid archetype correction",
              details: parsed.error.issues,
            },
            { status: 400 }
          );
        }
        // Phase 1: Log to console
        // Phase 2: Replace with Supabase insert
        const correctionId = uuidv4();
        console.log(
          "[ARCHETYPE CORRECTION]",
          JSON.stringify({ id: correctionId, ...parsed.data })
        );
        return NextResponse.json({
          success: true,
          id: correctionId,
          type: "correction",
        });
      }

      default:
        return NextResponse.json(
          { error: `Unknown feedback type: ${type}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("[FEEDBACK API ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
