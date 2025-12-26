"use client";

import { useMemo, useRef, useState } from "react";
import ExampleQuestions from "./ExampleQuestions";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi — I’m MiniMo. Ask me anything about real estate timelines, terms, or what typically happens next. (Educational only.)"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const listRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setError(null);
    setIsLoading(true);

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages,
          userInput: trimmed
        })
      });

      const data = (await res.json()) as { reply?: string; error?: string };

      if (!res.ok || !data.reply) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply! }]);

      requestAnimationFrame(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
      });
    } catch (e: any) {
      setError(e?.message || "Could not reach MiniMo right now.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 md:p-6">
      <div className="mb-4 rounded-2xl bg-warm-50 p-4">
        <p className="text-sm text-black/70 mb-3">
          Try one of these, or ask your own question:
        </p>
        <ExampleQuestions onPick={(q) => sendMessage(q)} />
      </div>

      <div
        ref={listRef}
        className="h-[50vh] md:h-[56vh] overflow-y-auto rounded-2xl border border-black/5 bg-white p-3 md:p-4"
      >
        <div className="space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={[
                "max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                m.role === "assistant"
                  ? "bg-warm-50 border border-black/5"
                  : "bg-white border border-black/10 ml-auto"
              ].join(" ")}
            >
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          ))}

          {isLoading && (
            <div className="max-w-[90%] rounded-2xl px-4 py-3 text-sm bg-warm-50 border border-black/5">
              <span className="text-black/70">MiniMo is thinking</span>
              <span className="inline-block w-6" aria-hidden="true">
                <span className="animate-pulse">…</span>
              </span>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (canSend) void sendMessage(input);
        }}
      >
        <label className="sr-only" htmlFor="chat-input">
          What would you like to understand about real estate?
        </label>

        <input
          id="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What would you like to understand about real estate?"
          className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-base outline-none focus:ring-2 focus:ring-warm-200"
        />

        <button
          type="submit"
          disabled={!canSend}
          className="rounded-xl bg-warm-200 px-4 py-3 font-semibold text-ink-900 disabled:opacity-50 hover:bg-warm-100 transition"
        >
          Send
        </button>
      </form>

      <p className="mt-3 text-xs text-black/50">
        Educational guidance only. No legal, financial, or lending advice.
      </p>
    </div>
  );
}
