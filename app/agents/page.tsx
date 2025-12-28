"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-80 transition">
          <Logo size="small" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/explore" className="text-sm text-ink-600 hover:text-ink-800 transition hidden sm:block">
            For Buyers
          </Link>
          <Link
            href="/ask?mode=agent"
            className="text-sm bg-sage-500 text-white px-4 py-2 rounded-full hover:bg-sage-600 transition font-medium"
          >
            Try MiniMo Free
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-sage-100 text-sage-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
          Built by a broker, for agents
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-ink-800 mb-6 leading-tight">
          The right words,<br />right when you need them
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-8">
          MiniMo helps you navigate tough client conversations, stay TREC-compliant, 
          and explain complex topics with confidence. Like having a mentor on speed dial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ask?mode=agent"
            className="bg-sage-500 text-white px-8 py-4 rounded-2xl hover:bg-sage-600 transition font-semibold text-lg"
          >
            Try MiniMo Free
          </Link>
          <a
            href="#pricing"
            className="border-2 border-sage-300 text-sage-700 px-8 py-4 rounded-2xl hover:bg-sage-50 transition font-semibold text-lg"
          >
            See Pricing
          </a>
        </div>
        <p className="text-sm text-ink-400 mt-4">15 free messages. No credit card required.</p>
      </section>

      {/* What MiniMo Helps With */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-ink-800 text-center mb-12">
            What agents ask MiniMo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I explain the option period to a first-time buyer?",
                category: "Client Education"
              },
              {
                question: "My seller wants to overprice by $50K. How do I have that conversation?",
                category: "Tough Conversations"
              },
              {
                question: "What should I watch for in this builder's contract?",
                category: "New Construction"
              },
              {
                question: "How do I explain VA loan benefits without crossing into lending advice?",
                category: "Compliance"
              },
              {
                question: "The appraisal came in low. What are my options and how do I present them?",
                category: "Problem Solving"
              },
              {
                question: "Write me a follow-up text for a buyer who went cold after our showing.",
                category: "Scripts & Content"
              }
            ].map((item, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl p-6">
                <span className="text-xs font-medium text-sage-600 bg-sage-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <p className="text-ink-700 mt-3 font-medium">"{item.question}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MiniMo is Different */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-ink-800 text-center mb-4">
            Not just AI — a broker's brain
          </h2>
          <p className="text-ink-600 text-center max-w-2xl mx-auto mb-12">
            ChatGPT gives generic answers. MiniMo is powered by 14 years of Texas real estate experience, 
            1,400+ new construction transactions, and 600+ veteran clients served.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "TREC-Aware",
                description: "Knows what you can and can't say. Helps you stay compliant while being helpful."
              },
              {
                icon: "🏗️",
                title: "New Construction Expert",
                description: "Builder contracts, design centers, negotiations — from 1,400+ transactions."
              },
              {
                icon: "🎖️",
                title: "VA Loan Knowledgeable",
                description: "Help your veteran clients understand their benefits with confidence."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-ink-800 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-ink-800 text-center mb-4">
            Simple pricing
          </h2>
          <p className="text-ink-600 text-center mb-12">
            Start free. Upgrade when you're ready.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Tier */}
            <div className="border-2 border-sage-200 rounded-2xl p-8">
              <h3 className="font-semibold text-ink-800 text-lg mb-2">Free</h3>
              <p className="text-3xl font-display font-semibold text-ink-800 mb-4">$0</p>
              <p className="text-ink-600 text-sm mb-6">Try MiniMo and see if she's right for you.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "15 free messages",
                  "Full conversation support",
                  "TREC compliance guidance",
                  "New construction help"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/ask?mode=agent"
                className="block text-center border-2 border-sage-300 text-sage-700 px-6 py-3 rounded-xl hover:bg-sage-50 transition font-medium"
              >
                Start Free
              </Link>
            </div>

            {/* Agent Pro */}
            <div className="border-2 border-sage-500 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                🚀 Launch Special
              </div>
              <h3 className="font-semibold text-ink-800 text-lg mb-2">Agent Pro</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-3xl font-display font-semibold text-ink-800">$19</p>
                <span className="text-ink-500">/mo</span>
                <span className="text-sm text-ink-400 line-through">$29/mo</span>
              </div>
              <p className="text-ink-600 text-sm mb-6">Real-time support for your daily client conversations.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Free",
                  "Unlimited conversation support",
                  "Client content creation",
                  "Objection handling scripts",
                  "VA loan expertise on demand",
                  "Saved sessions and templates"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/eVq28sdYW1t0d03eN5awo02"
                className="block text-center bg-sage-500 text-white px-6 py-3 rounded-xl hover:bg-sage-600 transition font-medium"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream-50 border border-sage-200 rounded-xl p-6 text-center">
            <p className="text-sm text-ink-500 leading-relaxed">
              MiniMo provides conversation support and educational guidance only. Always verify information 
              and ensure compliance with your local real estate regulations. MiniMo is not a substitute 
              for broker oversight, legal counsel, or professional training.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-sage-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-400">
          <span>© {new Date().getFullYear()} Ask MiniMo</span>
          <div className="flex items-center gap-6">
            <Link href="/explore" className="hover:text-ink-600">For Buyers</Link>
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
