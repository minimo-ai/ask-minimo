import Link from "next/link";
import Logo from "@/components/Logo";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream-200 rounded-full blur-3xl" />
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
              <span>💼</span>
              <span>For Real Estate Agents</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-ink-800 leading-tight mb-6">
              The right words<span className="text-sage-500">,</span>
              <br />
              <span className="text-sage-600">when you need them</span><span className="text-coral-400">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto mb-8">
              MiniMo is the calm voice in your ear — helping you explain complex topics clearly, stay compliant, and sound confident with every client conversation.
            </p>

            <Link href="/ask?mode=agent" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-8 py-4 text-lg font-semibold text-white shadow-soft hover:bg-sage-600 hover:shadow-glow transition-all duration-300">
              <span>Try MiniMo free</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-4xl border border-sage-100 bg-white/70 backdrop-blur-sm p-8">
                <h3 className="text-lg font-display font-semibold text-ink-800 mb-4 flex items-center gap-2">
                  <span className="text-sage-500">✓</span> What MiniMo IS
                </h3>
                <ul className="space-y-3 text-ink-600">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>A conversation support tool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>A client language translator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>A compliance-safe guide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>Your calm voice in real time</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-4xl border border-ink-100 bg-ink-50/30 backdrop-blur-sm p-8">
                <h3 className="text-lg font-display font-semibold text-ink-800 mb-4 flex items-center gap-2">
                  <span className="text-ink-400">✗</span> What MiniMo is NOT
                </h3>
                <ul className="space-y-3 text-ink-500">
                  <li className="flex items-start gap-3">
                    <span className="text-ink-300 mt-1">•</span>
                    <span>A training platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ink-300 mt-1">•</span>
                    <span>A CRM or coaching program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ink-300 mt-1">•</span>
                    <span>A script writer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-ink-300 mt-1">•</span>
                    <span>A cheerleader or hype machine</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-4xl border border-sage-100 bg-white/70 backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-2xl font-display font-semibold text-ink-800 mb-8 text-center">
                How MiniMo helps you with clients
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                    <span className="text-lg">🗣️</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Client Language Translator</h3>
                  <p className="text-sm text-ink-600 mb-3">Explain complex topics in plain English:</p>
                  <ul className="text-sm text-ink-500 space-y-1">
                    <li>• Pre-approval vs. pre-qualification</li>
                    <li>• Earnest money and inspections</li>
                    <li>• Why timelines shift</li>
                    <li>• The role of a lender</li>
                  </ul>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                    <span className="text-lg">💬</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Script Reframer</h3>
                  <p className="text-sm text-ink-600 mb-3">Not rigid scripts — real talking points:</p>
                  <ul className="text-sm text-ink-500 space-y-1">
                    <li>• Sentence starters</li>
                    <li>• Objection softeners</li>
                    <li>• Reframing language</li>
                    <li>• Non-pushy explanations</li>
                  </ul>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                    <span className="text-lg">🛡️</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Compliance-Safe Guidance</h3>
                  <p className="text-sm text-ink-600 mb-3">Stay compliant while being helpful:</p>
                  <ul className="text-sm text-ink-500 space-y-1">
                    <li>• Redirect questions safely</li>
                    <li>• Avoid rate and payment quotes</li>
                    <li>• Protect yourself and clients</li>
                    <li>• Sound confident, not scripted</li>
                  </ul>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                    <span className="text-lg">📱</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Social Content Helper</h3>
                  <p className="text-sm text-ink-600 mb-3">Turn questions into educational posts:</p>
                  <ul className="text-sm text-ink-500 space-y-1">
                    <li>• Educational captions</li>
                    <li>• Professional explanations</li>
                    <li>• No hype or urgency</li>
                    <li>• Build trust, not pressure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-display font-semibold text-ink-800 mb-6 text-center">
              When agents use MiniMo
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600">Responding to nervous buyers</span>
              <span className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600">Answering repeated questions</span>
              <span className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600">Preparing for consultations</span>
              <span className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600">Writing educational captions</span>
              <span className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600">Calming a transaction moment</span>
              <span className="rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600">Finding the right words quickly</span>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-display font-semibold text-ink-800 mb-3 text-center">
              Invest in your conversations
            </h2>
            <p className="text-ink-500 text-center mb-8 max-w-xl mx-auto">
              This is not training. This is support in real conversations.
            </p>

            <div className="max-w-md mx-auto">
              <div className="rounded-4xl border-2 border-sage-400 bg-white/80 backdrop-blur-sm p-8 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
                
                <div className="text-sm font-semibold text-sage-600 uppercase tracking-wide mb-2">Agent Pro</div>
                <div className="text-3xl font-display font-semibold text-ink-800 mb-1">$49<span className="text-lg text-ink-500">/mo</span></div>
                <p className="text-sm text-ink-500 mb-6">per agent • brokerage bundles available</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited conversation support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Client-ready explanations</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compliance-safe language</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Transaction stage guidance</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Educational social content help</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-ink-600">
                    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Objection reframing</span>
                  </li>
                </ul>

                <Link href="/ask?mode=agent" className="block w-full text-center rounded-2xl bg-sage-500 px-6 py-3 font-semibold text-white hover:bg-sage-600 transition-all mb-3">
                  Try free during beta
                </Link>
                <p className="text-xs text-ink-400 text-center">No credit card required</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-4xl bg-sage-50 border border-sage-100 p-8 md:p-10 text-center">
              <p className="text-xl md:text-2xl font-display text-ink-700 italic mb-4">
                "Confidence comes from clarity, not scripts."
              </p>
              <p className="text-sm text-ink-500">The MiniMo philosophy</p>
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6 text-center">
              <p className="text-sm text-ink-600 leading-relaxed">
                MiniMo provides conversation support and educational guidance only. She does not replace broker training, compliance education, or mentorship. Always follow your brokerage policies and consult licensed professionals for specific advice.
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
                <Link href="/explore" className="hover:text-sage-600 transition">For Buyers</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
