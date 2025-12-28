"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsAgent(params.get("mode") === "agent");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading || messageCount >= 10) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessageCount((prev) => prev + 1);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
          isAgent,
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const upgradeUrl = isAgent
    ? "https://buy.stripe.com/bJebJ2dYW2x44tx48rawo01"
    : "https://buy.stripe.com/eVqbJ28EC7Ro1hlbATawo00";

  const upgradeName = isAgent ? "Agent Pro" : "Clarity Plus";
  const upgradePrice = isAgent ? "$49/mo" : "$9/mo";
  const messagesLeft = 10 - messageCount;
  const isLocked = messageCount >= 10;

  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-cream-50 to-white">
      <header className="flex items-center justify-between px-4 py-3 border-b border-sage-100 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="hover:opacity-80 transition">
          <Logo size="small" />
        </Link>
        <div className="flex items-center gap-3">
          <a href={upgradeUrl} className="text-xs bg-sage-500 text-white px-3 py-1.5 rounded-full hover:bg-sage-600 transition font-medium hidden sm:block">
            Upgrade
          </a>
          <div className="flex items-center gap-2">
            <span className={!isAgent ? "text-xs text-sage-600 font-medium" : "text-xs text-ink-400"}>Buyer</span>
            <button
              onClick={() => setIsAgent(!isAgent)}
              className={isAgent ? "relative w-10 h-5 rounded-full transition-colors bg-sage-500" : "relative w-10 h-5 rounded-full transition-colors bg-sage-200"}
            >
              <span className={isAgent ? "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform translate-x-5" : "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform translate-x-0.5"} />
            </button>
            <span className={isAgent ? "text-xs text-sage-600 font-medium" : "text-xs text-ink-400"}>Agent</span>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h2 className="text-xl font-display font-semibold text-ink-800 mb-2">
                {isAgent ? "Hey there, fellow agent!" : "Hi, I'm MiniMo!"}
              </h2>
              <p className="text-ink-600 max-w-md mx-auto">
                {isAgent
                  ? "I'm here to help you find the right words for client conversations. What situation can I help you navigate?"
                  : "I'm your real estate clarity companion. Ask me anything about buying, selling, or understanding your options. No pressure, just clarity."}
              </p>
              <p className="text-xs text-ink-400 mt-4">10 free messages to get started</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
              <div className={message.role === "user" ? "max-w-[85%] rounded-2xl px-4 py-3 bg-sage-500 text-white" : "max-w-[85%] rounded-2xl px-4 py-3 bg-white border border-sage-100 text-ink-700"}>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-sage-100 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sage-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-sage-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-sage-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}

          {messageCount >= 3 && messageCount < 7 && (
            <div className="bg-gradient-to-r from-sage-50 to-cream-50 border border-sage-200 rounded-2xl p-4 my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink-800 text-sm">Enjoying MiniMo? 💚</p>
                  <p className="text-xs text-ink-600">{messagesLeft} free messages left. Upgrade for unlimited clarity.</p>
                </div>
                <a href={upgradeUrl} className="whitespace-nowrap text-sm bg-sage-500 text-white px-4 py-2 rounded-xl hover:bg-sage-600 transition font-medium">
                  {upgradeName} - {upgradePrice}
                </a>
              </div>
            </div>
          )}

          {messageCount >= 7 && messageCount < 10 && (
            <div className="bg-gradient-to-r from-coral-50 to-cream-50 border border-coral-200 rounded-2xl p-4 my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink-800 text-sm">You are getting great clarity! 🌟</p>
                  <p className="text-xs text-ink-600">Only {messagesLeft} free messages left. Keep this momentum going.</p>
                </div>
                <a href={upgradeUrl} className="whitespace-nowrap text-sm bg-coral-500 text-white px-4 py-2 rounded-xl hover:bg-coral-600 transition font-medium">
                  Continue with {upgradeName}
                </a>
              </div>
            </div>
          )}

          {isLocked && (
            <div className="bg-gradient-to-r from-sage-100 to-sage-50 border-2 border-sage-300 rounded-2xl p-6 my-4 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-200 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-display font-semibold text-ink-800 text-lg mb-2">You have used your 10 free messages</h3>
              <p className="text-ink-600 text-sm mb-4">MiniMo already knows your situation. Do not lose this progress.</p>
              <p className="text-ink-600 text-sm mb-6">Upgrade now to continue your journey with unlimited clarity.</p>
              <a href={upgradeUrl} className="inline-block bg-sage-500 text-white px-8 py-3 rounded-2xl hover:bg-sage-600 transition font-semibold text-lg">
                Unlock Unlimited - {upgradePrice}
              </a>
              <p className="text-xs text-ink-400 mt-4">Cancel anytime. No questions asked.</p>
            </div>
          )}

          {!isAgent && messageCount >= 5 && messageCount < 10 && (
            <div className="bg-white border border-sage-100 rounded-2xl p-4 my-4 text-center">
              <p className="text-sm text-ink-600 mb-2">Ready to work with a real agent in DFW?</p>
              <a 
                href="https://www.momentusrealestategroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-700 font-medium underline"
              >
                Meet the Momentus Real Estate Group team →
              </a>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {!isLocked && (
        <div className="bg-sage-50 border-t border-sage-100 px-4 py-2 block sm:hidden">
          <div className="flex items-center justify-center">
            <a href={upgradeUrl} className="text-xs text-sage-600 hover:text-sage-700 font-medium">
              Upgrade to {upgradeName} - {upgradePrice}
            </a>
          </div>
        </div>
      )}

      <div className="border-t border-sage-100 bg-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
          {isLocked ? (
            <div className="text-center py-2">
              <p className="text-sm text-ink-500 mb-3">Upgrade to continue chatting with MiniMo</p>
              <a href={upgradeUrl} className="inline-block bg-sage-500 text-white px-6 py-2 rounded-xl hover:bg-sage-600 transition font-medium">
                Upgrade Now
              </a>
            </div>
          ) : (
            <>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                  placeholder={isAgent ? "Ask about client conversations..." : "Ask me anything about real estate..."}
                  className="flex-1 rounded-2xl border border-sage-200 bg-white px-4 py-3 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="rounded-2xl bg-sage-500 px-5 py-3 text-white font-medium hover:bg-sage-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-ink-400 text-center mt-3">
                {messagesLeft} free messages left. MiniMo provides educational guidance only.
              </p>
            </>
          )}
        </div>
      </div>

      <footer className="border-t border-sage-100 bg-white px-4 py-3">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-400">
          <span>© {new Date().getFullYear()} Ask MiniMo</span>
          <div className="flex items-center gap-3">
            <Link href="/terms" className="hover:text-ink-600">Terms</Link>
            <Link href="/privacy" className="hover:text-ink-600">Privacy</Link>
            <a href="https://www.momentusrealestategroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600">
              Powered by Momentus Real Estate Group
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
