"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import ExampleQuestions from "./ExampleQuestions";
import Logo, { MiniMoIcon } from "./Logo";
import Link from "next/link";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi there 💚 I'm MiniMo, your real estate clarity companion. I'm here to help you understand your options and feel confident about your journey — no pressure, no sales pitch. What's on your mind?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState(true);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setError(null);
    setIsLoading(true);
    setShowExamples(false);

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
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : "Could not reach MiniMo right now. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      {/* Subtle background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-sage-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cream-200 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <Link href="/" className="hover:opacity-80 transition">
            <Logo size="small" />
          </Link>
          <Link 
            href="/"
            className="text-sm text-sage-600 hover:text-sage-700 font-medium transition"
          >
            ← Back home
          </Link>
        </header>

        {/* Chat Container */}
        <div className="rounded-4xl border border-sage-100 bg-white/90 backdrop-blur-sm shadow-softer overflow-hidden">
          
          {/* Example Questions - Collapsible */}
          {showExamples && messages.length <= 1 && (
            <div className="border-b border-sage-100 bg-sage-50/50 p-4 md:p-5">
              <p className="text-sm text-ink-600 mb-3 font-medium">
                Not sure where to start? Try one of these:
              </p>
              <ExampleQuestions onPick={(q) => sendMessage(q)} />
            </div>
          )}

          {/* Messages Area */}
          <div
            ref={listRef}
            className="h-[55vh] md:h-[60vh] overflow-y-auto p-4 md:p-6"
          >
            <div className="space-y-4">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  {/* MiniMo Avatar for assistant messages */}
                  {m.role === "assistant" && (
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <MiniMoIcon className="h-8 w-8" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] md:max-w-[75%] rounded-3xl px-5 py-4 ${
                      m.role === "assistant"
                        ? "bg-sage-50 border border-sage-100 text-ink-700"
                        : "bg-sage-500 text-white ml-auto"
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {m.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start animate-fade-in">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <MiniMoIcon className="h-8 w-8" />
                  </div>
                  <div className="rounded-3xl px-5 py-4 bg-sage-50 border border-sage-100">
                    <div className="flex items-center gap-2 text-sage-600">
                      <span className="text-sm">MiniMo is thinking</span>
                      <span className="flex gap-1">
                        <span className="w-2 h-2 bg-sage-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-sage-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-sage-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mx-4 md:mx-6 mb-4 rounded-2xl border border-coral-200 bg-coral-50 px-4 py-3 text-sm text-coral-800">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-sage-100 bg-white p-4 md:p-5">
            <form
              className="flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (canSend) void sendMessage(input);
              }}
            >
              <label className="sr-only" htmlFor="chat-input">
                What would you like to understand about real estate?
              </label>

              <input
                ref={inputRef}
                id="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about real estate..."
                className="flex-1 rounded-2xl border border-sage-200 bg-white px-5 py-3.5 text-base text-ink-800 placeholder:text-ink-400 outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 transition-all"
              />

              <button
                type="submit"
                disabled={!canSend}
                className="rounded-2xl bg-sage-500 px-6 py-3.5 font-semibold text-white disabled:opacity-40 hover:bg-sage-600 focus:ring-2 focus:ring-sage-300 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2"
              >
                <span className="hidden sm:inline">Send</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-3 text-xs text-ink-400 text-center">
              💚 Educational guidance only • Not legal, financial, or lending advice
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-ink-400">
          <p>Care • Clarity • Confidence</p>
        </footer>
      </div>
    </div>
  );
}
