"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Mo's Warm Greeting for Agents
const AGENT_GREETING = `Hey there, fellow agent! I'm MiniMo — think of me as your calm voice when you need the right words for client conversations.

Whether you need help explaining something clearly, staying TREC-compliant, or navigating a tough conversation — I've got you.

What situation can I help you with?`;

// localStorage keys - separate from buyer to track independently
const STORAGE_KEYS = {
  messageCount: "minimo_agent_message_count",
  lastReset: "minimo_agent_last_reset",
  userEmail: "minimo_agent_email",
  licenseNumber: "minimo_agent_license",
};

const RESET_PERIOD_DAYS = 30;
const FREE_MESSAGE_LIMIT = 15;

export default function AskAgentPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Professional verification gate state
  const [showVerificationGate, setShowVerificationGate] = useState(false);
  const [email, setEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [certificationChecked, setCertificationChecked] = useState(false);
  const [formErrors, setFormErrors] = useState<{email?: string; license?: string; certification?: string}>({});
  const [hasVerified, setHasVerified] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Check for existing verification
        const storedEmail = localStorage.getItem(STORAGE_KEYS.userEmail);
        const storedLicense = localStorage.getItem(STORAGE_KEYS.licenseNumber);
        
        if (storedEmail && storedLicense) {
          setEmail(storedEmail);
          setLicenseNumber(storedLicense);
          setHasVerified(true);
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

  // Show verification gate after disclaimer is accepted
  useEffect(() => {
    if (acceptedDisclaimer && !hasVerified) {
      setShowVerificationGate(true);
    }
  }, [acceptedDisclaimer, hasVerified]);

  // Add warm greeting when verified
  useEffect(() => {
    if (hasVerified && acceptedDisclaimer && !hasInitialized) {
      setMessages([{ role: "assistant", content: AGENT_GREETING }]);
      setHasInitialized(true);
    }
  }, [hasVerified, acceptedDisclaimer, hasInitialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateLicense = (license: string) => {
    // Texas license numbers are typically 6-9 digits
    // We're being lenient here - just checking it's not empty and has some numbers
    const cleaned = license.replace(/\D/g, '');
    return cleaned.length >= 5 && cleaned.length <= 10;
  };

  const handleVerificationSubmit = async () => {
    const errors: {email?: string; license?: string; certification?: string} = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validateLicense(licenseNumber)) {
      errors.license = "Please enter a valid Texas license number (e.g., 123456)";
    }

    if (!certificationChecked) {
      errors.certification = "Please confirm you are a licensed real estate professional";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      // Store verification locally
      localStorage.setItem(STORAGE_KEYS.userEmail, email);
      localStorage.setItem(STORAGE_KEYS.licenseNumber, licenseNumber);
      
      await fetch("/api/capture-agent-lead", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, licenseNumber }),
});

      setHasVerified(true);
      setShowVerificationGate(false);
    } catch (error) {
      console.error("Error capturing verification:", error);
      // Still allow them to proceed
      setHasVerified(true);
      setShowVerificationGate(false);
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
          isAgent: true, // Always agent mode
          userEmail: email,
          licenseNumber: licenseNumber,
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

  const upgradeUrl = "https://buy.stripe.com/eVq28sdYW1t0d03eN5awo02"; // $19/mo Agent Pro
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
              <span className="text-2xl">🏠</span>
            </div>
            <h1 className="text-2xl font-display font-semibold text-ink-800 mb-2">
              MiniMo for Agents
            </h1>
            <p className="text-ink-600">
              Your AI clarity companion for client conversations and compliance.
            </p>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5 mb-6 space-y-4 text-sm text-ink-600">
            <div>
              <h3 className="font-semibold text-ink-800 mb-1">📚 Educational Support Tool</h3>
              <p>
                MiniMo helps agents find the right words for client conversations, staying compliant and clear. 
                It does not replace your professional judgment or training.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-ink-800 mb-1">⚖️ You Remain Responsible</h3>
              <p>
                All client communications and advice remain your responsibility as a licensed professional. 
                Always verify MiniMo's suggestions against current TREC guidelines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-ink-800 mb-1">🔒 For Licensed Professionals Only</h3>
              <p>
                This tool is designed for licensed real estate professionals. 
                You'll be asked to verify your license on the next screen.
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

  // Professional verification gate
  if (showVerificationGate && !hasVerified) {
    return (
      <main className="flex flex-col h-screen bg-gradient-to-b from-cream-50 to-white items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-soft border border-sage-100 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🪪</span>
            </div>
            <h1 className="text-2xl font-display font-semibold text-ink-800 mb-2">
              Professional Verification
            </h1>
            <p className="text-ink-600">
              Please verify your credentials to access MiniMo for Agents.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFormErrors(prev => ({...prev, email: undefined}));
                }}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-sage-200 bg-white px-4 py-3 text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            {/* License Number */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">
                Texas Real Estate License Number
              </label>
              <input
                type="text"
                value={licenseNumber}
                onChange={(e) => {
                  setLicenseNumber(e.target.value);
                  setFormErrors(prev => ({...prev, license: undefined}));
                }}
                placeholder="e.g., 620163"
                className="w-full rounded-xl border border-sage-200 bg-white px-4 py-3 text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent"
              />
              {formErrors.license && (
                <p className="text-red-500 text-sm mt-1">{formErrors.license}</p>
              )}
              <p className="text-xs text-ink-400 mt-1">
                Find yours at{" "}
                <a 
                  href="https://www.trec.texas.gov/apps/license-holder-search/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-sage-600"
                >
                  TREC License Search
                </a>
              </p>
            </div>

            {/* Certification Checkbox */}
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={certificationChecked}
                  onChange={(e) => {
                    setCertificationChecked(e.target.checked);
                    setFormErrors(prev => ({...prev, certification: undefined}));
                  }}
                  className="mt-1 w-5 h-5 rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                />
                <span className="text-sm text-ink-700">
                  I certify that I am a currently licensed real estate professional in good standing 
                  with the Texas Real Estate Commission (TREC), and I understand that MiniMo is an 
                  educational tool that does not replace my professional judgment.
                </span>
              </label>
              {formErrors.certification && (
                <p className="text-red-500 text-sm mt-2">{formErrors.certification}</p>
              )}
            </div>

            <button
              onClick={handleVerificationSubmit}
              className="w-full bg-sage-500 text-white py-4 rounded-2xl font-semibold hover:bg-sage-600 transition"
            >
              Verify & Start Chatting
            </button>
          </div>

          <p className="text-xs text-ink-400 text-center mt-4">
            Your license number is used for verification purposes only. 
            We never share your credentials.
          </p>

          <div className="text-center mt-6 pt-4 border-t border-sage-100">
            <p className="text-sm text-ink-500">Not a licensed agent?</p>
            <Link href="/ask" className="text-sm text-sage-600 hover:text-sage-700 font-medium underline">
              Use MiniMo for Buyers →
            </Link>
          </div>
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
          <span className="text-xs text-ink-400 hidden sm:block">Agent Mode</span>
          <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded-full font-medium">PRO</span>
          <a href={upgradeUrl} className="text-xs bg-sage-500 text-white px-3 py-1.5 rounded-full hover:bg-sage-600 transition font-medium">
            Upgrade
          </a>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Educational Disclaimer */}
          {showDisclaimer && messages.length <= 1 && (
            <div className="bg-cream-50 border border-sage-200 rounded-xl p-4 text-center">
              <p className="text-xs text-ink-500 leading-relaxed">
                <strong>🏠 Agent Support Tool:</strong> MiniMo helps you find clear, compliant language for client conversations. 
                Always verify against current TREC guidelines. Your professional judgment remains your responsibility.
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
                  <p className="font-semibold text-ink-800 text-sm">MiniMo is helping you level up! 💚</p>
                  <p className="text-xs text-ink-600">{messagesLeft} free messages left. Go unlimited.</p>
                </div>
                <a href={upgradeUrl} className="whitespace-nowrap text-sm bg-sage-500 text-white px-4 py-2 rounded-xl hover:bg-sage-600 transition font-medium">
                  Agent Pro - $19/mo
                </a>
              </div>
            </div>
          )}

          {/* Urgency prompt - appears after 10 messages */}
          {messageCount >= 10 && messageCount < FREE_MESSAGE_LIMIT && (
            <div className="bg-gradient-to-r from-coral-50 to-cream-50 border border-coral-200 rounded-2xl p-4 my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink-800 text-sm">You're on a roll! 🌟</p>
                  <p className="text-xs text-ink-600">Only {messagesLeft} free messages left. Don't lose momentum.</p>
                </div>
                <a href={upgradeUrl} className="whitespace-nowrap text-sm bg-coral-500 text-white px-4 py-2 rounded-xl hover:bg-coral-600 transition font-medium">
                  Continue with Agent Pro
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
              <p className="text-ink-600 text-sm mb-4">MiniMo is ready to keep helping you serve your clients better.</p>
              <p className="text-ink-600 text-sm mb-6">Upgrade now for unlimited clarity and compliance support.</p>
              <a href={upgradeUrl} className="inline-block bg-sage-500 text-white px-8 py-3 rounded-2xl hover:bg-sage-600 transition font-semibold text-lg">
                Unlock Unlimited - $19/mo
              </a>
              <p className="text-xs text-ink-400 mt-4">Cancel anytime. No questions asked.</p>
            </div>
          )}

          {/* Momentus Recruiting CTA - appears after 7 messages */}
          {messageCount >= 7 && messageCount < FREE_MESSAGE_LIMIT && (
            <div className="bg-white border border-sage-100 rounded-2xl p-4 my-4 text-center">
              <p className="text-sm text-ink-600 mb-2">Looking for a brokerage that values clarity and compliance?</p>
              <a 
                href="https://www.momentusrealestategroup.com/join" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-sage-600 hover:text-sage-700 font-medium underline"
              >
                Learn about Momentus Real Estate Group →
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
              Upgrade to Agent Pro - $19/mo
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
                  placeholder="Ask about client conversations, compliance, scripts..."
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
                {messagesLeft} free messages left • Verify against current TREC guidelines • Your professional judgment applies
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
