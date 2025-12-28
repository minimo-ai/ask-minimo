"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const faqs = [
  {
    question: "What is MiniMo?",
    answer: "MiniMo is an AI-powered real estate clarity companion created by Mo — a licensed Texas broker with 14+ years of experience, 1,500+ families served, 1,400+ new construction transactions, and 600+ veteran clients. She helps buyers understand real estate and helps agents navigate client conversations."
  },
  {
    question: "Why use MiniMo instead of ChatGPT?",
    answer: "Great question! ChatGPT gives generic information — you'd have to spend hours training it on Texas real estate, TREC rules, new construction contracts, and VA loans. MiniMo already has all of that built in. Plus, MiniMo has guardrails to keep agents compliant and won't accidentally give lending advice that could get you in trouble. She's ready to help in 30 seconds, no setup required."
  },
  {
    question: "Is MiniMo a licensed real estate agent?",
    answer: "No. MiniMo is an educational tool, not a licensed agent. She provides general real estate education and conversation support based on Texas practices. She's not a substitute for working with a licensed professional for your specific transaction."
  },
  {
    question: "Can MiniMo give me lending or mortgage advice?",
    answer: "No — and that's intentional. MiniMo is created by a licensed real estate broker, not a loan officer. She can explain how different loan types generally work (VA, FHA, Conventional), but she'll always refer you to a licensed lender for specific advice about rates, qualification, or your personal situation. This keeps you protected."
  },
  {
    question: "Is MiniMo free?",
    answer: "Yes! You get 15 free messages to try MiniMo with no credit card required. If you love her, you can upgrade to unlimited access — Clarity Plus is $9/mo for buyers, and Agent Pro is $19/mo (launch pricing) for agents."
  },
  {
    question: "What's the difference between Clarity Plus and Agent Pro?",
    answer: "Clarity Plus ($9/mo) is for home buyers and sellers who want unlimited access to MiniMo for their real estate journey. Agent Pro ($19/mo) is for real estate agents who need help with client conversations, scripts, objection handling, and staying TREC-compliant."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! Both Clarity Plus and Agent Pro are month-to-month subscriptions. Cancel anytime with no questions asked."
  },
  {
    question: "Is MiniMo only for Texas?",
    answer: "MiniMo is built on Texas real estate expertise, so she's most helpful for Texas transactions — especially in the Dallas-Fort Worth area. She knows TREC rules, Texas contracts, and DFW market specifics. She can still help with general real estate education for other states, but her specialty is Texas."
  },
  {
    question: "How is MiniMo different from other real estate AI tools?",
    answer: "Most AI tools are generic. MiniMo is specific. She's trained on 14 years of real-world Texas real estate experience — not just information, but the nuances that only come from 1,500+ transactions. She knows what's actually negotiable with builders, what TREC wants you to say, and how to explain VA loans without crossing compliance lines."
  },
  {
    question: "Who created MiniMo?",
    answer: "MiniMo was created by Mo, founder and CEO of Momentus Real Estate Group — a boutique brokerage in Grapevine, Texas. Mo has 14+ years of real estate experience, specializing in new construction and serving military families. MiniMo is Mo's brain, scaled to help more people than she could ever reach alone."
  },
  {
    question: "I'm an agent. Will MiniMo replace me?",
    answer: "Absolutely not! MiniMo is a tool to make you BETTER, not replace you. She helps you find the right words, stay compliant, and serve your clients with more confidence. Think of her as a mentor on speed dial, not competition."
  },
  {
    question: "How do I get MiniMo on my phone like an app?",
    answer: "Easy! Visit askminimo.com on your phone, then tap Share → 'Add to Home Screen.' MiniMo will appear on your phone just like an app — no app store needed!"
  },
  {
    question: "Is my conversation with MiniMo private?",
    answer: "Yes. We take privacy seriously. Your conversations are not shared or sold. See our Privacy Policy for full details."
  },
  {
    question: "I have more questions. How do I contact you?",
    answer: "We'd love to hear from you! Reach out to the team at Momentus Real Estate Group through momentusrealestategroup.com."
  }
];

export default function FAQPage() {
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
          <Link href="/agents" className="text-sm text-ink-600 hover:text-ink-800 transition hidden sm:block">
            For Agents
          </Link>
          <Link
            href="/ask"
            className="text-sm bg-sage-500 text-white px-4 py-2 rounded-full hover:bg-sage-600 transition font-medium"
          >
            Try MiniMo Free
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-ink-800 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl mx-auto">
          Everything you need to know about MiniMo, your real estate clarity companion.
        </p>
      </section>

      {/* FAQ List */}
      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-sage-100 rounded-2xl p-6">
              <h3 className="font-semibold text-ink-800 text-lg mb-3">{faq.question}</h3>
              <p className="text-ink-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-sage-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-display font-semibold text-ink-800 mb-4">
            Ready to get clarity?
          </h2>
          <p className="text-ink-600 mb-8">
            Try MiniMo free — 15 messages, no credit card required.
          </p>
          <Link
            href="/ask"
            className="inline-block bg-sage-500 text-white px-8 py-4 rounded-2xl hover:bg-sage-600 transition font-semibold text-lg"
          >
            Ask MiniMo Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-sage-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-400">
          <span>© {new Date().getFullYear()} Ask MiniMo</span>
          <div className="flex items-center gap-6">
            <Link href="/explore" className="hover:text-ink-600">For Buyers</Link>
            <Link href="/agents" className="hover:text-ink-600">For Agents</Link>
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
