import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "MiniMo for Agents | Free AI Clarity Companion for Real Estate Professionals",
  description: "Your free AI clarity companion for client conversations and TREC compliance. Find the right words, stay compliant, and serve your clients better.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-sage-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition">
            <Logo size="small" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/ask" className="text-sm text-ink-600 hover:text-sage-600 transition">
              For Buyers
            </Link>
            <Link
              href="/ask/agent"
              className="bg-sage-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-sage-600 transition"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>🏠</span>
            <span>Built by agents, for agents — 100% free</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink-800 mb-6 leading-tight">
            Find the right words.<br />
            <span className="text-sage-600">Every time.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ink-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            MiniMo is your free AI clarity companion for client conversations, compliance questions, 
            and those moments when you need the perfect script — fast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ask/agent"
              className="bg-sage-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sage-600 transition shadow-soft"
            >
              Start Chatting — It's Free →
            </Link>
            <a
              href="#features"
              className="bg-white text-ink-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sage-50 transition border border-sage-200"
            >
              See What MiniMo Can Do
            </a>
          </div>

          <p className="text-sm text-ink-400 mt-6">
            For licensed real estate professionals • License verification required
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-ink-800 mb-6">
                Ever frozen on a client call?
              </h2>
              <div className="space-y-4 text-ink-600">
                <p>
                  A buyer asks about earnest money. A seller wants to know about disclosure requirements. 
                  A first-timer needs you to explain the whole process — clearly and compliantly.
                </p>
                <p>
                  You know the answer. But finding the <em>right words</em> — the clear, compliant, 
                  client-friendly words — that's the challenge.
                </p>
                <p className="font-semibold text-ink-800">
                  MiniMo gives you those words, instantly. And it's completely free.
                </p>
              </div>
            </div>
            <div className="bg-sage-50 rounded-3xl p-8 border border-sage-100">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-ink-800">Client Scripts</p>
                    <p className="text-sm text-ink-600">Clear explanations for any situation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <p className="font-semibold text-ink-800">Compliance Support</p>
                    <p className="text-sm text-ink-600">TREC-conscious language guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-ink-800">Tough Conversations</p>
                    <p className="text-sm text-ink-600">Navigate difficult client moments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-semibold text-ink-800">Process Explanations</p>
                    <p className="text-sm text-ink-600">Break down complex concepts simply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-ink-800 mb-4">
              What can you ask MiniMo?
            </h2>
            <p className="text-ink-600 max-w-2xl mx-auto">
              Real questions. Real answers. Real help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏠",
                title: "Explain earnest money to a first-time buyer",
                description: "Clear, jargon-free language they'll actually understand"
              },
              {
                emoji: "📋",
                title: "What disclosures are required for foundation issues?",
                description: "Compliance guidance you can trust"
              },
              {
                emoji: "💰",
                title: "How do I explain seller concessions?",
                description: "Scripts that make complex topics simple"
              },
              {
                emoji: "⏰",
                title: "My buyer wants to waive inspection — what do I say?",
                description: "Navigate tricky conversations professionally"
              },
              {
                emoji: "📝",
                title: "Help me write a counter-offer explanation",
                description: "Clear communication for negotiations"
              },
              {
                emoji: "🔑",
                title: "Explain the option period to a nervous seller",
                description: "Calm, confident explanations"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-sage-100 hover:shadow-soft transition"
              >
                <span className="text-3xl mb-4 block">{feature.emoji}</span>
                <h3 className="font-semibold text-ink-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-4xl border-2 border-sage-300 bg-gradient-to-br from-sage-50 to-white p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm text-sage-700 font-medium mb-6">
              <span>💚</span>
              <span>100% Free — No Catch</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink-800 mb-4">
              MiniMo is completely free for agents
            </h2>
            
            <p className="text-ink-600 max-w-xl mx-auto mb-8">
              No subscriptions. No limits. No credit card required. Just clarity whenever you need it.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-2xl p-4 border border-sage-100">
                <div className="text-2xl mb-2">♾️</div>
                <p className="text-sm font-semibold text-ink-800">Unlimited Messages</p>
                <p className="text-xs text-ink-500">Ask as much as you need</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-sage-100">
                <div className="text-2xl mb-2">⚖️</div>
                <p className="text-sm font-semibold text-ink-800">TREC-Conscious</p>
                <p className="text-xs text-ink-500">Built with compliance in mind</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-sage-100">
                <div className="text-2xl mb-2">🎓</div>
                <p className="text-sm font-semibold text-ink-800">14+ Years Experience</p>
                <p className="text-xs text-ink-500">Real broker knowledge</p>
              </div>
            </div>

            <Link
              href="/ask/agent"
              className="inline-block bg-sage-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sage-600 transition shadow-soft"
            >
              Start Chatting — It's Free →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-ink-800 mb-8">
            Built with compliance in mind
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⚖️</span>
              </div>
              <h3 className="font-semibold text-ink-800 mb-2">TREC-Conscious</h3>
              <p className="text-sm text-ink-600">
                Guidance aligned with Texas Real Estate Commission standards
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="font-semibold text-ink-800 mb-2">License Verified</h3>
              <p className="text-sm text-ink-600">
                Access limited to verified licensed professionals
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="font-semibold text-ink-800 mb-2">Educational Focus</h3>
              <p className="text-sm text-ink-600">
                Support tool — your professional judgment always applies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Ready to find your words?
          </h2>
          <p className="text-sage-100 mb-8 max-w-xl mx-auto">
            MiniMo is completely free. No credit card required. Start chatting now.
          </p>
          <Link
            href="/ask/agent"
            className="inline-block bg-white text-sage-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-sage-50 transition shadow-soft"
          >
            Start Chatting — It's Free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-sage-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Logo size="small" />
              <span className="text-sm text-ink-400">© {new Date().getFullYear()} Ask MiniMo</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-ink-500">
              <Link href="/terms" className="hover:text-sage-600 transition">Terms</Link>
              <Link href="/privacy" className="hover:text-sage-600 transition">Privacy</Link>
              <Link href="/disclaimer" className="hover:text-sage-600 transition">Disclaimer</Link>
              <Link href="/faq" className="hover:text-sage-600 transition">FAQ</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-sage-100 text-center">
            <p className="text-xs text-ink-400">
              Ask MiniMo is an independent educational AI tool. It does not provide legal, financial, or real estate brokerage services. 
              Use of this platform does not create any professional relationship. Always verify guidance with current TREC regulations.
            </p>
            <p className="text-xs text-ink-400 mt-2">
              <a href="https://www.momentusrealestategroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600">
                Powered by Momentus Real Estate Group
              </a>
              {" | "}
              <a href="https://www.trec.texas.gov/apps/license-holder-search/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600">
                TREC License Search
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
