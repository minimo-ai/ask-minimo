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
          <Link
            href="/explore"
            className="text-sm text-ink-600 hover:text-ink-800 transition hidden sm:block"
          >
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
          The right words,
          <br />
          right when you need them
        </h1>
        <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-8">
          MiniMo helps you navigate tough client conversations, stay mindful of
          compliance, and explain complex topics with confidence. Like having a
          mentor on speed dial.
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
        <p className="text-sm text-ink-400 mt-4">
          15 free messages. No credit card required.
        </p>
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
                question:
                  "How do I explain the option period to a first-time buyer?",
                category: "Client Education",
              },
              {
                question:
                  "My seller wants to overprice by $50K. How do I have that conversation?",
                category: "Tough Conversations",
              },
              {
                question: "What should I watch for in this builder's contract?",
                category: "New Construction",
              },
              {
                question:
                  "How do I explain VA loan benefits without crossing into lending advice?",
                category: "Compliance",
              },
              {
                question:
                  "The appraisal came in low. What are my options and how do I present them?",
                category: "Problem Solving",
              },
              {
                question:
                  "Write me a follow-up text for a buyer who went cold after our showing.",
                category: "Scripts & Content",
              },
            ].map((item, index) => (
              <div key={index} className="bg-cream-50 rounded-2xl p-6">
                <span className="text-xs font-medium text-sage-600 bg-sage-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <p className="text-ink-700 mt-3 font-medium">
                  "{item.question}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MiniMo is Different */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-ink-800 text-center mb-4">
            Not just AI — built for real client moments
          </h2>
          <p className="text-ink-600 text-center max-w-2xl mx-auto mb-12">
            ChatGPT can be generic. MiniMo is built with a broker’s education-first
            approach — designed to help you explain complex topics clearly, stay
            mindful of compliance, and handle tough conversations with calm confidence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Compliance Guardrails",
                description:
                  "Helps you communicate clearly while staying mindful of TREC and Fair Housing guidelines.",
              },
              {
                icon: "🏗️",
                title: "New Construction Support",
                description:
                  "Builder conversations, contract basics, incentives language, and timeline expectations — explained simply.",
              },
              {
                icon: "🎖️",
                title: "VA Conversation Help",
                description:
                  "Helps you explain VA benefits in a client-safe way without crossing into lender advice.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-ink-800 mb-2">
                  {item.title}
                </h3>
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
            Start free. Upgrade when you’re ready.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Tier */}
            <div className="border-2 border-sage-200 rounded-2xl p-8">
              <h3 className="font-semibold text-ink-800 text-lg mb-2">Free</h3>
              <p className="text-3xl font-display font-semibold text-ink-800 mb-4">
                $0
              </p>
              <p className="text-ink-600 text-sm mb-6">
                Try MiniMo and see if she’s right for you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "15 free messages",
                  "Full conversation support",
                  "Compliance guardrails",
                  "New construction su
