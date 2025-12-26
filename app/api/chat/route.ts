import OpenAI from "openai";
import { SYSTEM_PROMPT } from "@/lib/systemPrompt";
import { assertSafeUserInput } from "@/lib/validators";
import { rateLimit } from "@/lib/rateLimit";
import { looksRestricted, RESTRICTED_REFUSAL } from "@/lib/guards";
import { headers } from "next/headers";

export const runtime = "nodejs";

type ClientMessage = { role: "user" | "assistant"; content: string };

async function getClientIp() {
  const h = await headers();
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return h.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  try {
    const ip = await getClientIp();
    const rl = rateLimit(ip);
    if (!rl.ok) {
      return Response.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const userInput = assertSafeUserInput(body.userInput);

    if (looksRestricted(userInput)) {
      return Response.json({ reply: RESTRICTED_REFUSAL }, { status: 200 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

    const clientMessages: ClientMessage[] = Array.isArray(body.messages) ? body.messages : [];
    const recent = clientMessages.slice(-12).map((m) => ({
      role: m.role,
      content: typeof m.content === "string" ? m.content : ""
    }));

    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...recent],
      temperature: 0.4
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I’m sorry — I didn’t catch that. Could you rephrase your question?";

    // Post-check safety net
    if (looksRestricted(reply)) {
      return Response.json({ reply: RESTRICTED_REFUSAL }, { status: 200 });
    }

    return Response.json({ reply }, { status: 200 });
  } catch (e: any) {
    const msg =
      typeof e?.message === "string" ? e.message : "Server error.";
    return Response.json({ error: msg }, { status: 500 });
  }
}
