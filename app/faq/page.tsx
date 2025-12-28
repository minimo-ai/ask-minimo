"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      <div className="relative px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <header className="flex items-center justify-between mb-12">
            <Link href="/" className="hover:opacity-80 transition">
              <Logo size="default" />
            </Link>
            <Link href="/" className="text-sm text-sage-600 hover:text-sage-700 font-medium transition">
              ← Back home
            </Link>
          </header>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-ink-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-ink-600">
              Everything you need to know about Ask MiniMo
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">What is Ask MiniMo?</h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo is an AI-powered real estate clarity companion. It helps homebuyers, sellers, and real estate agents understand the real estate process with calm, clear, educational guidance — without the pressure of a sales pitch.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">Is MiniMo a real estate agent?</h2>
              <p className="text-ink-600 leading-relaxed">
                No. MiniMo is an educational tool, not a licensed real estate agent, broker, lender, or attorney. It provides information to help you understand your options and feel confident — but it does not provide professional advice. Always consult licensed professionals for specific guidance.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">Is Ask MiniMo free?</h2>
              <p className="text-ink-600 leading-relaxed">
                Yes! You can start conversations with MiniMo completely free. We also offer premium subscriptions (Clarity Plus for consumers at $9/month and Agent Pro for real estate agents at $19/month) for unlimited access and additional features.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">Who is MiniMo for?</h2>
              <p className="text-ink-600 leading-relaxed">
                MiniMo serves two audiences: <strong>Consumers</strong> (first-time buyers, sellers, renters exploring homeownership, veterans, and anyone curious about real estate) and <strong>Real Estate Agents</strong> (who need help finding the right words for client conversations, staying compliant, and explaining complex topics simply).
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">What kind of questions can I ask?</h2>
              <p className="text-ink-600 leading-relaxed">
                You can ask MiniMo about the homebuying process, what to expect at each stage, common myths (like needing 20% down), VA loans, how to talk to lenders and agents, understanding closing costs, and much more. MiniMo is here to help you feel informed and confident.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">How is MiniMo different from searching Google?</h2>
              <p className="text-ink-600 leading-relaxed">
                Google gives you thousands of links. MiniMo gives you a conversation. It listens to your specific situation, answers in plain English, and helps you understand what applies to YOU — without the overwhelm of sifting through articles and ads.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">Is my information private?</h2>
              <p className="text-ink-600 leading-relaxed">
                Yes. We take your privacy seriously. We do not sell your personal information. Conversations are used only to provide and improve the service. For full details, please read our <Link href="/privacy" className="text-sage-600 hover:text-sage-700 underline">Privacy Policy</Link>.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">Can I cancel my subscription anytime?</h2>
              <p className="text-ink-600 leading-relaxed">
                Absolutely. You can cancel your subscription at any time — no questions asked, no hoops to jump through. Just email us at hello@askminimo.com or manage your subscription through Stripe.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">Who created MiniMo?</h2>
              <p className="text-ink-600 leading-relaxed">
                MiniMo was created by a licensed Texas broker with extensive real estate experience and a passion for education. After serving families across DFW — including many veterans — she built MiniMo to give everyone access to the clarity they deserve, before they ever feel pressured to make a decision.
              </p>
            </div>

            <div className="rounded-2xl border border-sage-100 bg-white/70 backdrop-blur-sm p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-2">How do I get started?</h2>
              <p className="text-ink-600 leading-relaxed">
                Just click "Start a free conversation" on our homepage and ask MiniMo anything! No account required to try it out. When you are ready for more, you can subscribe to unlock premium features.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-ink-600 mb-4">Still have questions?</p>
            <a href="mailto:hello@askminimo.com" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-6 py-3 font-semibold text-white hover:bg-sage-600 transition-all">
              Contact Us
            </a>
          </div>

          {/* Fair Housing Statement */}
          <div className="mt-12 p-6 bg-sage-50 border border-sage-200 rounded-2xl text-center">
            <p className="text-sm text-ink-600 leading-relaxed">
              <strong>Fair Housing Statement:</strong> We are committed to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
            </p>
          </div>

          <footer className="pt-8 mt-12 border-t border-sage-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span>© {new Date().getFullYear()} Ask MiniMo</span>
                <span className="text-ink-300">•</span>
                <span>Care • Clarity • Confidence</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-ink-400">
                <Link href="/" className="hover:text-sage-600 transition">Home</Link>
                <Link href="/privacy" className="hover:text-sage-600 transition">Privacy</Link>
                <Link href="/terms" className="hover:text-sage-600 transition">Terms</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
