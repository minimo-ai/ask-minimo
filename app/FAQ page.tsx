"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const faqs = [
  {
    category: "About MiniMo",
    questions: [
      {
        question: "What is MiniMo?",
        answer: "MiniMo is an AI-powered real estate educational tool created by Mo — a licensed Texas broker with 14+ years of experience, 1,500+ families served, 1,400+ new construction transactions, and 600+ veteran clients. MiniMo helps buyers understand real estate concepts and helps agents navigate client conversations with confidence."
      },
      {
        question: "Is MiniMo a real estate agent or broker?",
        answer: "No. MiniMo is an educational tool, not a licensed real estate agent, broker, lender, attorney, or financial advisor. MiniMo provides general real estate education and conversation support based on Texas practices. It is not a substitute for working with a licensed professional for your specific transaction. Use of MiniMo does not create any agent-client, broker-client, or fiduciary relationship."
      },
      {
        question: "What's the relationship between MiniMo and Momentus Real Estate Group?",
        answer: "Ask MiniMo operates independently of Momentus Real Estate Group. While MiniMo is powered by the knowledge and expertise of Mo, founder of Momentus Real Estate Group, this platform does not provide real estate brokerage services. Any brokerage services offered by Momentus Real Estate Group are provided separately and only through a direct, formal client relationship with appropriate written agreements."
      },
      {
        question: "Who created MiniMo?",
        answer: "MiniMo was created by Maureen 'Mo' Cappallo, founder and CEO of Momentus Real Estate Group — a boutique brokerage in Grapevine, Texas. Mo has 14+ years of real estate experience, specializing in new construction and serving military families. MiniMo is Mo's brain, scaled to help more people than she could ever reach alone — while maintaining clear boundaries about what an educational AI tool can and cannot do."
      }
    ]
  },
  {
    category: "What MiniMo Can & Cannot Do",
    questions: [
      {
        question: "Can MiniMo give me lending or mortgage advice?",
        answer: "No — and that's intentional. MiniMo was created by a licensed real estate broker, not a loan officer. MiniMo can explain how different loan types generally work (VA, FHA, Conventional), but will always refer you to a licensed lender for specific advice about rates, qualification, or your personal situation. This keeps you protected and ensures you get accurate, personalized information from the right professional."
      },
      {
        question: "Can MiniMo tell me how much house I can afford?",
        answer: "No. Affordability calculations require a licensed loan officer to review your specific financial situation, credit history, debt-to-income ratio, and other factors. MiniMo can explain general concepts about budgeting for a home, but cannot and will not provide personalized financial advice. Always consult with a licensed lender for your specific numbers."
      },
      {
        question: "Can MiniMo give me legal advice about contracts?",
        answer: "No. MiniMo is not an attorney and cannot provide legal advice. MiniMo can explain general concepts about real estate contracts and what questions you might want to ask, but you should always consult with a licensed real estate attorney for specific legal guidance about your contracts and situation."
      },
      {
        question: "Can MiniMo represent me in a real estate transaction?",
        answer: "No. MiniMo is an educational tool, not a licensed real estate agent. MiniMo cannot negotiate on your behalf, represent you in transactions, provide property valuations, or act as your agent in any capacity. For representation in a real estate transaction, you need to work with a licensed real estate professional."
      }
    ]
  },
  {
    category: "Using MiniMo",
    questions: [
      {
        question: "Why use MiniMo instead of ChatGPT?",
        answer: "Great question! ChatGPT gives generic information — you'd have to spend hours training it on Texas real estate, TREC rules, new construction contracts, and VA loans. MiniMo already has all of that built in, plus guardrails to keep you safe from crossing into areas that require a licensed professional. MiniMo is ready to help in 30 seconds, no setup required."
      },
      {
        question: "Is MiniMo free?",
        answer: "Yes! You get 15 free messages to try MiniMo with no credit card required. If you love it, you can upgrade to unlimited access — Clarity Plus is $9/mo for buyers, and Agent Pro is $19/mo (launch pricing) for agents."
      },
      {
        question: "What's the difference between Clarity Plus and Agent Pro?",
        answer: "Clarity Plus ($9/mo) is for home buyers and sellers who want unlimited access to MiniMo for their real estate journey — understanding processes, terminology, and what questions to ask. Agent Pro ($19/mo) is for real estate agents who need help with client conversations, scripts, objection handling, and staying TREC-compliant."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes! Both Clarity Plus and Agent Pro are month-to-month subscriptions. Cancel anytime with no questions asked."
      },
      {
        question: "How do I get MiniMo on my phone like an app?",
        answer: "Easy! Visit askminimo.com on your phone, then tap Share → 'Add to Home Screen.' MiniMo will appear on your phone just like an app — no app store needed!"
      }
    ]
  },
  {
    category: "Geographic Coverage",
    questions: [
      {
        question: "Is MiniMo only for Texas?",
        answer: "MiniMo is built on Texas real estate expertise, so it's most helpful for Texas transactions — especially in the Dallas-Fort Worth area. MiniMo knows TREC rules, Texas contracts, and DFW market specifics. It can still help with general real estate education for other states, but its specialty is Texas."
      },
      {
        question: "How is MiniMo different from other real estate AI tools?",
        answer: "Most AI tools are generic. MiniMo is specific. It's trained on 14 years of real-world Texas real estate experience — not just information, but the nuances that only come from 1,500+ transactions. MiniMo knows what's actually negotiable with builders, what TREC wants you to say, and how to explain VA loans without crossing compliance lines. Plus, MiniMo has clear guardrails to keep conversations educational rather than venturing into areas that require licensed professionals."
      }
    ]
  },
  {
    category: "For Real Estate Agents",
    questions: [
      {
        question: "I'm an agent. Will MiniMo replace me?",
        answer: "Absolutely not! MiniMo is a tool to make you BETTER, not replace you. MiniMo helps you find the right words, stay compliant, and serve your clients with more confidence. Think of MiniMo as a mentor on speed dial, not competition. Clients still need licensed agents for transactions — MiniMo just helps you communicate more effectively."
      },
      {
        question: "How does MiniMo help with TREC compliance?",
        answer: "MiniMo is built with TREC rules in mind, helping you phrase things in compliant ways and avoid crossing into areas that could get you in trouble — like giving lending advice when you're not a lender. MiniMo provides talking points and language suggestions, not rigid scripts, so you can adapt them to your style while staying safe."
      }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Is my conversation with MiniMo private?",
        answer: "Yes. We take privacy seriously. Your conversations are not shared or sold to third parties. Information is used only to provide and improve the service. Importantly, your MiniMo conversations do not create any client relationship with Momentus Real Estate Group and are not used for real estate brokerage purposes. See our Privacy Policy for full details."
      },
      {
        question: "What happens to my data if I cancel?",
        answer: "If you cancel your subscription, we retain your information for a reasonable period to allow for reactivation. After that, your data will be deleted or anonymized. You can also request deletion of your data at any time by contacting us."
      }
    ]
  },
  {
    category: "Getting More Help",
    questions: [
      {
        question: "I have more questions. How do I contact you?",
        answer: "We'd love to hear from you! Reach out to the team through momentusrealestategroup.com/contact."
      },
      {
        question: "I'm ready to work with a real agent. What do I do?",
        answer: "If you're in the Dallas-Fort Worth area and ready to work with a licensed real estate professional, you can connect with the team at Momentus Real Estate Group at momentusrealestategroup.com. Note that working with Momentus is a separate relationship from using MiniMo, and requires appropriate written agreements for any brokerage services."
      }
    ]
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

      {/* Important Disclaimer Banner */}
      <section className="px-6 pb-8 max-w-3xl mx-auto">
        <div className="bg-sage-50 border-2 border-sage-200 rounded-2xl p-6">
          <h2 className="font-semibold text-ink-800 mb-2 flex items-center gap-2">
            <span className="text-sage-500">📋</span>
            Important: Educational Use Only
          </h2>
          <p className="text-sm text-ink-600 leading-relaxed">
            Ask MiniMo is an independent educational AI tool. It does not provide legal, financial, or real estate 
            brokerage services. Use of this platform does not create an agent-client, broker-client, or fiduciary 
            relationship. Always consult with licensed professionals for your specific situation.
          </p>
        </div>
      </section>

      {/* FAQ List by Category */}
      <section className="px-6 pb-16 max-w-3xl mx-auto">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            <h2 className="text-xl font-display font-semibold text-ink-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center text-sm text-sage-600">
                {categoryIndex + 1}
              </span>
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, index) => (
                <div key={index} className="bg-white border border-sage-100 rounded-2xl p-6">
                  <h3 className="font-semibold text-ink-800 text-lg mb-3">{faq.question}</h3>
                  <p className="text-ink-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          <p className="text-xs text-ink-400 mt-4">
            Educational guidance only. Not legal, financial, or brokerage advice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-sage-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-400">
          <span>© {new Date().getFullYear()} Ask MiniMo • Care • Clarity • Confidence</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-ink-600">Home</Link>
            <Link href="/explore" className="hover:text-ink-600">For Buyers</Link>
            <Link href="/agents" className="hover:text-ink-600">For Agents</Link>
            <Link href="/terms" className="hover:text-ink-600">Terms</Link>
            <Link href="/privacy" className="hover:text-ink-600">Privacy</Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-4 text-center">
          <a href="https://www.momentusrealestategroup.com" target="_blank" rel="noopener noreferrer" className="text-xs text-ink-400 hover:text-sage-600">
            Powered by Momentus Real Estate Group
          </a>
          <p className="text-xs text-ink-400 mt-1">
            Maureen Cappallo, Broker • TX License #620163 • Brokerage License #9014872
          </p>
        </div>
      </footer>
    </main>
  );
}
