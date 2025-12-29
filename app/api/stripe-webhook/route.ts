// app/api/stripe-webhook/route.ts
// Handles Stripe webhook events for MiniMo subscriptions
// Receives: checkout.session.completed, customer.subscription.* events

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      console.error("No Stripe signature found");
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    // Verify the webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        
        const customerEmail = session.customer_details?.email || session.customer_email;
        const amountTotal = session.amount_total; // in cents
        
        // Determine subscription type based on amount
        // $9/mo = 900 cents (Clarity Plus - Buyers)
        // $19/mo = 1900 cents (Agent Pro)
        let subscriptionType = "unknown";
        if (amountTotal === 900) {
          subscriptionType = "clarity_plus";
        } else if (amountTotal === 1900) {
          subscriptionType = "agent_pro";
        }

        console.log("✅ Checkout completed:", {
          email: customerEmail,
          amount: amountTotal,
          type: subscriptionType,
          customerId: session.customer,
          subscriptionId: session.subscription,
        });

        // TODO: Send to Follow Up Boss
        // await sendToFUB(customerEmail, subscriptionType);

        break;
      }

      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("✅ Subscription created:", {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          status: subscription.status,
        });
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("✅ Subscription updated:", {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          status: subscription.status,
        });
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("⚠️ Subscription cancelled:", {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
        });
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

// Disable body parsing - Stripe needs the raw body
export const config = {
  api: {
    bodyParser: false,
  },
};
