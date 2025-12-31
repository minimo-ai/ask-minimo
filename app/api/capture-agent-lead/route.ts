import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, licenseNumber } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
    
    if (!apiKey) {
      console.error("FOLLOW_UP_BOSS_API_KEY not configured");
      return NextResponse.json({ success: true });
    }

    const tags = ["Ask MiniMo", "Agent User", "Potential Recruit"];

    const fubPayload = {
      source: "Ask MiniMo",
      system: "AskMiniMo",
      type: "Recruit",
      emails: [{ value: email, type: "primary" }],
      tags,
      assignedTo: "jim@momentusrealestate.com",
      notes: [{ body: `Agent using MiniMo.\nLicense #: ${licenseNumber || "N/A"}\nStarted: ${new Date().toLocaleString()}` }],
    };

    const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${Buffer.from(apiKey + ":").toString("base64")}`,
        "X-System": "AskMiniMo",
        "X-System-Key": "askminimo-v1",
      },
      body: JSON.stringify(fubPayload),
    });

    if (fubResponse.status === 409) {
      console.log("Agent already exists:", email);
    } else {
      console.log("✅ Agent lead created in FUB:", email);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FUB error:", error);
    return NextResponse.json({ success: true });
  }
}
