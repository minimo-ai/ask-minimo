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

      {/* Hero */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-sage-100 text-sage-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
          Built by a broker, for real conversations
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-semibold text-ink-800 mb-6 leading-tight">
          The right words,
          <br />
          right when you need them
        </h1>

        <p className="text-lg text-ink-600 max-w-2xl mx-auto mb-8">
          MiniMo helps agents navigate tough client conversations, explain complex
          topics clearly, and stay mindful of compliance. Calm, clear support —
          like having a mentor on speed dial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ask?mode=agent"
            className="bg-sage-500 text-white px-8 py-4 rounded-2xl hover:bg-sage-600 transition font-semibold text-lg"
          >
            Try MiniMo Free
