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
  userEmail: "minimo_agent_email",
  licenseNumber: "minimo_agent_license",
};

// Common fake/test email patterns to block
const FAKE_EMAIL_PATTERNS = [
  /^test@/i,
  /^abc@/i,
  /^asdf@/i,
  /^fake@/i,
  /^none@/i,
  /^no@/i,
  /^na@/i,
  /^noemail@/i,
  /^email@/i,
  /^user@/i,
  /^admin@/i,
  /^info@test/i,
  /^a{2,}@/i,
  /^b{2,}@/i,
  /^x{2,}@/i,
  /^123@/i,
  /^111@/i,
  /^aaa@/i,
  /^bbb@/i,
];

// Disposable email domains to block
const DISPOSABLE_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "throwaway.com",
  "fakeinbox.com",
  "guerrillamail.com",
  "10minutemail.com",
  "trashmail.com",
];

export default function AskAgentPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
      } catch (error) {
        console.warn("localStorage not available:", error);
      }
      setIsHydrated(true);
    }
  }, []);

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

  const validateEmail = (email: string): { valid: boolean; error?: string } => {
    const trimmedEmail = email.trim().toLowerCase();
    
    // Basic format check
    const formatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatRegex.test(trimmedEmail)) {
      return { valid: false, error: "Please enter a valid email address" };
    }

    // Check minimum length before @
    const localPart = trimmedEmail.split("@")[0];
    if (localPart.length < 3) {
      return { valid: false, error: "Please enter your full email address" };
    }

    // Check for fake email patterns
    for (const pattern of FAKE_EMAIL_PATTERNS) {
      if (pattern.test(trimmedEmail)) {
        return { valid: false, error: "Please enter your real email so we can keep you posted on MiniMo updates 💚" };
      }
    }

    // Check for disposable domains
    const domain = trimmedEmail.split("@")[1];
    if (DISPOSABLE_DOMAINS.includes(domain)) {
      return { valid: false, error: "Please use your personal or work email address" };
    }

    return { valid: true };
  };

  const validateLicense = (license: string): { valid: boolean; error?: string } => {
    const cleaned = license.trim().replace(/\D/g, '');
    
    if (!cleaned) {
      return { valid: false, error: "Please enter your Texas real estate license number" };
    }
    
    if (cleaned.length < 5 || cleaned.length > 10) {
      return { valid: false, error: "Texas license numbers are typically 6-9 digits (e.g., 620163)" };
    }

    // Block obvious fakes
    if (/^0+$/.test(cleaned) || /^1+$/.test(cleaned) || /^123456/.test(cleaned)) {
      return { valid: false, error: "Please enter your real TREC license number" };
    }

    return { valid: true };
  };

  const handleVerificationSubmit = async () => {
    const errors: {email?: string; license?: string; certification?: string} = {};

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      errors.email = emailValidation.error;
    }

    const licenseValidation = validateLicense(licenseNumber);
    if (!licenseValidation.valid) {
      errors.license = licenseValidation.error;
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
      localStorage.setItem(STORAGE_KEYS.userEmail, email.trim().toLowerCase());
      localStorage.setItem(STORAGE_KEYS.licenseNumber, licenseNumber.trim());
      
      await fetch("/api/capture-agent-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), licenseNumber: licenseNumber.trim() }),
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
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
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
                You'll be asked to verify your status on the next screen.
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
              Quick Verification
            </h1>
            <p className="text-ink-600">
              Just a few quick details so we can tailor MiniMo for Texas pros and keep you posted on TREC updates that matter.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">
                Email Address <span className="text-coral-500">*</span>
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
              <p className="text-xs text-ink-400 mt-1">
                We'll only reach out with MiniMo updates and TREC news that helps.
              </p>
            </div>

            {/* License Number - NOW REQUIRED */}
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">
                Texas Real Estate License Number <span className="text-coral-500">*</span>
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
                This helps us keep MiniMo tailored for licensed Texas professionals.{" "}
                <a 
                  href="https://www.trec.texas.gov/apps/license-holder-search/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-sage-600"
                >
                  Look up your license
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
                  educational tool that does not replace my professional judgment. <span className="text-coral-500">*</span>
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
              Let's Go!
            </button>
          </div>

          <p className="text-xs text-ink-400 text-center mt-4">
            No spam, no selling your info. Just good stuff when it matters. 💚
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
          <span className="text-xs bg-sage-100 text-sage-700 px-3 py-1 rounded-full font-medium">100% Free</span>
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

          {/* Momentus Recruiting CTA - appears after 7 messages */}
          {messages.length >= 7 && (
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

      <div className="border-t border-sage-100 bg-white px-4 py-4">
        <div className="max-w-2xl mx-auto">
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
            💚 Completely free • Verify against current TREC guidelines • Your professional judgment applies
          </p>
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
