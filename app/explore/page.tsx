import Link from "next/link";
import Logo from "@/components/Logo";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-200 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <header className="flex items-center justify-between mb-12">
            <Link href="/" className="hover:opacity-80 transition">
              <Logo size="default" />
            </Link>
            <Link href="/" className="text-sm text-sage-600 hover:text-sage-700 font-medium transition">
              ← Back home
            </Link>
          </header>

          <section className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm text-sage-700 font-medium mb-6">
              <span>🏠</span>
              <span>For Homebuyers, Sellers, and the Curious</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-ink-800 leading-tight mb-6">
              Get clear on real estate<span className="text-sage-500">.</span>
              <br />
              <span className="text-sage-600">No pressure</span><span className="text-coral-400">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto mb-8">
              MiniMo helps you understand your options, know what comes next, and feel confident — before you ever talk to an agent or lender.
            </p>

            <Link href="/ask" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-8 py-4 text-lg font-semibold text-white shadow-soft hover:bg-sage-600 hover:shadow-glow transition-all duration-300">
              <span>Start chatting — it's free!</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <p className="text-sm text-ink-500 mt-4">💚 100% free • No credit card • No limits</p>
          </section>

          <section className="mb-16">
            <div className="rounded-4xl border border-sage-100 bg-white/70 backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-2xl font-display font-semibold text-ink-800 mb-8 text-center">
                What can MiniMo help you with?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🤔</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-800 mb-1">Understand where you are</h3>
                    <p className="text-sm text-ink-600">Are you curious, exploring, preparing, or ready? MiniMo helps you figure it out.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-800 mb-1">Bust the myths</h3>
                    <p className="text-sm text-ink-600">Perfect credit? 20% down? Self-employed means no loan? Let us clear that up.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🗺️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-800 mb-1">Know what comes next</h3>
                    <p className="text-sm text-ink-600">Timelines, steps, what to expect — so nothing catches you off guard.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎖️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-800 mb-1">Veterans welcome</h3>
                    <p className="text-sm text-ink-600">VA loans are powerful. MiniMo helps you understand what you have earned.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">❓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-800 mb-1">Ask the right questions</h3>
                    <p className="text-sm text-ink-600">Know what to ask agents and lenders so you walk in confident.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">😌</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-800 mb-1">Feel calm, not confused</h3>
                    <p className="text-sm text-ink-600">Real estate is overwhelming. MiniMo makes it feel manageable.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Free CTA Section */}
          <section className="mb-16">
            <div className="rounded-4xl border-2 border-sage-300 bg-gradient-to-br from-sage-50 to-white p-8 md:p-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm text-sage-700 font-medium mb-6">
                <span>💚</span>
                <span>100% Free — No Catch</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink-800 mb-4">
                MiniMo is completely free
              </h2>
              
              <p className="text-ink-600 max-w-xl mx-auto mb-8">
                No subscriptions. No limits. No credit card required. Just real estate clarity whenever you need it.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                <div className="bg-white rounded-2xl p-4 border border-sage-100">
                  <div className="text-2xl mb-2">♾️</div>
                  <p className="text-sm font-semibold text-ink-800">Unlimited Messages</p>
                  <p className="text-xs text-ink-500">Ask as much as you need</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-sage-100">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="text-sm font-semibold text-ink-800">14+ Years Experience</p>
                  <p className="text-xs text-ink-500">Built by a Texas broker</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-sage-100">
                  <div className="text-2xl mb-2">🛡️</div>
                  <p className="text-sm font-semibold text-ink-800">Safe & Compliant</p>
                  <p className="text-xs text-ink-500">Built-in guardrails</p>
                </div>
              </div>

              <Link href="/ask" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-8 py-4 text-lg font-semibold text-white shadow-soft hover:bg-sage-600 hover:shadow-glow transition-all duration-300">
                <span>Start Chatting Now</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 text-center">
              <p className="text-sm text-ink-600 leading-relaxed">
                MiniMo provides educational guidance only. She is not a lender, agent, attorney, or financial advisor. For specific rates, legal questions, or professional advice, always consult a licensed professional.
              </p>
            </div>
          </section>

          <footer className="pt-8 border-t border-sage-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span>© {new Date().getFullYear()} Ask MiniMo</span>
                <span className="text-ink-300">•</span>
                <span>Care • Clarity • Confidence</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-ink-400">
                <Link href="/" className="hover:text-sage-600 transition">Home</Link>
                <Link href="/agents" className="hover:text-sage-600 transition">For Agents</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
