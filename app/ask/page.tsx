"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Mo's Warm Greeting for Buyers
const INITIAL_GREETING = `Hey there! I'm MiniMo — think of me as your guide to figuring out your next move in real estate. No pressure, no sales pitch. Just clarity.

Whether you're thinking about buying, selling, or just trying to understand your options — I'm here to help you get clear on what makes sense for *you*.

What's on your mind?`;

// localStorage keys
const STORAGE_KEYS = {
  messageCount: "minimo_buyer_message_count",
  lastReset: "minimo_buyer_last_reset",
  userEmail: "minimo_buyer_email",
};

const RESET_PERIOD_DAYS = 30;
const FREE_MESSAGE_LIMIT = 15;

export default function AskBuyerPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Email gate state
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasProvidedEmail, setHasProvidedEmail] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Check for existing email
        const storedEmail = localStorage.getItem(STORAGE_KEYS.userEmail);
        if (storedEmail) {
          setEmail(storedEmail);
          setHasProvidedEmail(true);
        }

        // Check if we should reset (monthly reset)
        const lastReset = localStorage.getItem(STORAGE_KEYS.lastReset);
        const now = Date.now();
        
        if (lastReset) {
          const daysSinceReset = (now - parseInt(lastReset)) / (1000 * 60 * 60 * 24);
          if (daysSinceReset > RESET_PERIOD_DAYS) {
            localStorage.setItem(STORAGE_KEYS.messageCount, "0");
            localStorage.setItem(STORAGE_KEYS.lastReset, now.toString());
          }
        } else {
          localStorage.setItem(STORAGE_KEYS.lastReset, now.toString());
        }

        // Load the message count
        const storedCount = localStorage.getItem(STORAGE_KEYS.messageCount);
        if (storedCount) {
          setMessageCount(parseInt(storedCount, 10));
        }
      } catch (error) {
        console.warn("localStorage not available:", error);
      }
      setIsHydrated(true);
    }
  }, []);

  // Save message count to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.messageCount, messageCount.toString());
      } catch (error) {
        console.warn("Could not save to localStorage:", error);
      }
    }
  }, [messageCount, isHydrated]);

  // Show email gate after disclaimer is accepted
  useEffect(() => {
    if (acceptedDisclaimer && !hasProvidedEmail) {
      setShowEmailGate(true);
    }
  }, [acceptedDisclaimer, hasProvidedEmail]);

  // Add warm greeting when email is provided
  useEffect(() => {
    if (hasProvidedEmail && acceptedDisclaimer && !hasInitialized) {
      setMessages([{ role: "assistant", content: INITIAL_GREETING }]);
      setHasInitialized(true);
    }
  }, [hasProvidedEmail, acceptedDisclaimer, hasInitialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      // Store email locally
      localStorage.setItem(STORAGE_KEYS.userEmail, email);
      
      // TODO: Send to FUB via webhook
      // await fetch("/api/capture-lead", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, type: "buyer" }),
      // });

      setHasProvidedEmail(true);
      setShowEmailGate(false);
    } catch (error) {
      console.error("Error capturing email:", error);
      // Still allow them to proceed
      setHasProvidedEmail(true);
      setShowEmailGate(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading || messageCount >= FREE_MESSAGE_LIMIT) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessageCount((prev) => prev + 1);
    setIsLoading(true);
    setShowDisclaimer(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
          isAgent: false, // Always buyer mode
          userEmail: email,
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

  const upgradeUrl = "https://buy.stripe.com/eVqbJ28EC7Ro1hlbATawo00"; // $9/mo Clarity Plus
  const messagesLeft = FREE_MESSAGE_LIMIT - messageCount;
  const isLocked = messageCount >= FREE_MESSAGE_LIMIT;

  // Loading state
  if (!isHydrated) {
    return (
      <main className="flex flex-col h-screen bg-gradient-to-b from-cream-50 to-white items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center animate-pulse">
          <span className="text-2xl">💚</span>
        </div>
        <p className="text-ink-500 mt-4">Loading MiniMo...</p>
      </main>
    );
  }

  // Disclaimer acceptance modal
  if (!acceptedDisclaimer) {
    return (
      <main className="flex flex-col h-screen bg-gradient-to-b from-cream-50 to-white items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-soft border border-sage-100 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💚</span>
            </div>
            <h1 className="text-2xl font-display font-semibold text-ink-800 mb-2">
              Welcome to MiniMo
            </h1>
            <p className="text-ink-600">
              Before we chat, please review and acknowledge the following:
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5 mb-6 space-y-4 text-sm text-ink-600">
            <div>
              <h3 className="font-semibold text-ink-800 mb-1">📚 Educational Use Only</h3>
              <p>
                Ask MiniMo is an independent educational AI tool designed to provide general real estate information. 
                It does not provide legal, financial, or real estate brokerage services.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-800 mb-1">🤝 No Professional Relationship</h3>
              <p>
                Use of this platform does not create an agent-client, broker-client, or fiduciary relationship.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 mb-1">🏢 Independent from Momentus</h3>
              <p>
                Ask MiniMo operates independently of Momentus Real Estate Group. Any real estate services are 
                offered separately and only through a direct client relationship.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 mb-1">⚖️ Consult Licensed Professionals</h3>
              <p>
                Always verify information with licensed real estate professionals, lenders, and attorneys 
                for your specific situation.
              </p>
            </div>
          </div>

          <button
            onClick={() => setAcceptedDisclaimer(true)}
            className="w-full bg-sage-500 text-white py-4 rounded-2xl font-semibold hover:bg-sage-600 transition"
          >
            I Understand — Continue
          </button>

          <p className="text-xs text-ink-400 text-center mt-4">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-sage-600">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="underline hover:text-sage-600">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    );
  }

  // Email capture gate
  if (showEmailGate && !hasProvidedEmail) {
    return (
      <main className="flex flex-col h-screen bg-gradient-to-b from-cream-50 to-white items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-soft border border-sage-100 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h1 className="text-2xl font-display font-semibold text-ink-800 mb-2">
              One Quick Thing
            </h1>
            <p className="text-ink-600">
              Enter your email to start your 15 free messages with MiniMo.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
                placeholder="your@email.com"
                className="w-full rounded-2xl border border-sage-200 bg-white px-4 py-4 text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>

            <button
              onClick={handleEmailSubmit}
              className="w-full bg-sage-500 text-white py-4 rounded-2xl font-semibold hover:bg-sage-600 transition"
            >
              Start Chatting — It's Free
            </button>
          </div>

          <p className="text-xs text-ink-400 text-center mt-4">
            We'll only use this to save your conversation progress. No spam, ever.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-cream-50 to-white">
      <header className="flex items-center justify-between px-4 py-3 border-b border-sage-100 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="hover:opacity-80 transition">
          <Logo size="small" />
        </Link>
        <div className="flex items-center gap-3">
          <a href={upgradeUrl} className="text-xs bg-sage-500 text-white px-3 py-1.5 rounded-full hover:bg-sage-600 transition font-medium">
            Upgrade
          </a>
          <Link href="/agents" className="text-xs text-ink-500 hover:text-sage-600 transition">
            For Agents →
          </Link>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Educational Disclaimer */}
          {showDisclaimer && messages.length <= 1 && (
            <div className="bg-cream-50 border border-sage-200 rounded-xl p-4 text-center">
              <p className="text-xs text-ink-500 leading-relaxed">
                <strong>📚 Educational Purposes Only:</strong> MiniMo provides general real estate education based on Texas practices. 
                This is not legal, financial, or professional advice. Always verify information with licensed professionals. 
                No agent-client or broker-client relationship is created.
              </p>
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

          {/* Upgrade prompt - appears after 5 messages */}
          {messageCount >= 5 && messageCount < 10 && (
            <div className="bg-gradient-to-r from-sage-50 to-cream-50 border border-sage-200 rounded-2xl p-4 my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink-800 text-sm">Enjoying MiniMo? 💚</p>
                  <p className="text-xs text-ink-600">{messagesLeft} free messages left. Upgrade for unlimited clarity.</p>
                </div>
                <a href={upgradeUrl} className="whitespace-nowrap text-sm bg-sage-500 text-white px-4 py-2 rounded-xl hover:bg-sage-600 transition font-medium">
                  Clarity Plus - $9/mo
                </a>
              </div>
            </div>
          )}

          {/* Urgency prompt - appears after 10 messages */}
          {messageCount >= 10 && messageCount < FREE_MESSAGE_LIMIT && (
            <div className="bg-gradient-to-r from-coral-50 to-cream-50 border border-coral-200 rounded-2xl p-4 my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink-800 text-sm">You're getting great clarity! 🌟</p>
                  <p className="text-xs text-ink-600">Only {messagesLeft} free messages left. Keep this momentum going.</p>
                </div>
                <a href={upgradeUrl} className="whitespace-nowrap text-sm bg-coral-500 text-white px-4 py-2 rounded-xl hover:bg-coral-600 transition font-medium">
                  Continue with Clarity Plus
                </a>
              </div>
            </div>
          )}

          {/* Locked state */}
          {isLocked && (
            <div className="bg-gradient-to-r from-sage-100 to-sage-50 border-2 border-sage-300 rounded-2xl p-6 my-4 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-200 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-display font-semibold text-ink-800 text-lg mb-2">You've used your 15 free messages</h3>
              <p className="text-ink-600 text-sm mb-4">MiniMo already knows your situation. Don't lose this progress.</p>
              <p className="text-ink-600 text-sm mb-6">Upgrade now to continue your journey with unlimited clarity.</p>
              <a href={upgradeUrl} className="inline-block bg-sage-500 text-white px-8 py-3 rounded-2xl hover:bg-sage-600 transition font-semibold text-lg">
                Unlock Unlimited - $9/mo
              </a>
              <p className="text-xs text-ink-400 mt-4">Cancel anytime. No questions asked.</p>
            </div>
          )}

          {/* Momentus CTA - appears after 7 messages */}
          {messageCount >= 7 && messageCount < FREE_MESSAGE_LIMIT && (
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
              <p className="text-xs text-ink-400 mt-2">
                Brokerage services provided separately through direct client relationship.
              </p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {!isLocked && (
        <div className="bg-sage-50 border-t border-sage-100 px-4 py-2 block sm:hidden">
          <div className="flex items-center justify-center">
            <a href={upgradeUrl} className="text-xs text-sage-600 hover:text-sage-700 font-medium">
              Upgrade to Clarity Plus - $9/mo
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
                  placeholder="Ask me anything about real estate..."
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
                {messagesLeft} free messages left • Educational guidance only • Not professional advice
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
            <Link href="/faq" className="hover:text-ink-600">FAQ</Link>
            <a href="https://www.momentusrealestategroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600">
              Powered by Momentus Real Estate Group
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
