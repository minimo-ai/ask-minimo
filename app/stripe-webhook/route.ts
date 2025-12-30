import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    // Log the webhook event (we'll verify signature later)
    console.log("✅ Stripe webhook received:", {
      hasSignature: !!signature,
      bodyLength: body.length,
    });

    // Parse the event
    const event = JSON.parse(body);
    
    console.log("📦 Event type:", event.type);
    console.log("📧 Customer email:", event.data?.object?.customer_email || event.data?.object?.customer_details?.email);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
