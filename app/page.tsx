import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      {/* Background elements */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-200 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-16 text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <Logo size="large" />
            </div>
          </header>

          {/* Hero Section */}
          <section className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-ink-800 leading-tight mb-6">
              Clarity before decisions<span className="text-sage-500">.</span>
              <br />
              <span className="text-sage-600">Confidence before contracts</span><span className="text-coral-400">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto">
              MiniMo is your real estate clarity companion — here to help you understand, 
              not to sell you anything. Built on Care, Clarity, and Confidence.
            </p>
          </section>

          {/* Self-Select Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-ink-800 mb-2">
                Who are you here as?
              </h2>
              <p className="text-ink-500">Choose your path to get started</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Consumer Path */}
              <Link href="/explore" className="group">
                <div className="h-full rounded-4xl border-2 border-sage-200 bg-white/80 backdrop-blur-sm p-8 hover:border-sage-400 hover:shadow-glow transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-ink-800 mb-3">
                    I am exploring real estate
                  </h3>
                  <p className="text-ink-600 leading-relaxed mb-4">
                    Whether you are buying, selling, renting, or just curious — get clear on your options with zero pressure.
                  </p>
                  <div className="flex items-center text-sage-600 font-semibold group-hover:text-sage-700">
                    <span>Explore your path</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Agent Path */}
              <Link href="/agents" className="group">
                <div className="h-full rounded-4xl border-2 border-sage-200 bg-white/80 backdrop-blur-sm p-8 hover:border-sage-400 hover:shadow-glow transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-ink-800 mb-3">
                    I am a real estate agent
                  </h3>
                  <p className="text-ink-600 leading-relaxed mb-4">
                    Get the right words when you need them — client explanations, compliant language, and calm confidence.
                  </p>
                  <div className="flex items-center text-sage-600 font-semibold group-hover:text-sage-700">
                    <span>See how MiniMo helps</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* What Makes MiniMo Different */}
          <section className="mb-16">
            <div className="rounded-4xl border border-sage-100 bg-white/60 backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-2xl font-display font-semibold text-ink-800 mb-8 text-center">
                What makes MiniMo different?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💚</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Care</h3>
                  <p className="text-sm text-ink-600">You are treated like family, not a transaction. Every conversation starts with empathy.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-cream-200 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Clarity</h3>
                  <p className="text-sm text-ink-600">Complex real estate made simple. Confusion creates fear — clarity creates confidence.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-blush-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-2">Confidence</h3>
                  <p className="text-sm text-ink-600">Feel empowered to make your own decisions. No pressure, no sales pitch, ever.</p>
                </div>
              </div>
            </div>
          </section>

          {/* TREC-Compliant Legal Disclaimer Section */}
          <section className="mb-16">
            <div className="rounded-2xl border-2 border-sage-200 bg-white p-6 md:p-8">
              {/* Educational Use Only */}
              <div className="mb-6">
                <h3 className="font-semibold text-ink-800 mb-2 flex items-center gap-2">
                  <span className="text-sage-500">📚</span>
                  Educational Use Only
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Ask MiniMo is an independent educational AI tool designed to provide general real estate information. 
                  It does not provide legal, financial, or real estate brokerage services. Use of this platform does not 
                  create an agent-client, broker-client, or fiduciary relationship.
                </p>
              </div>

              {/* Powered by Momentus */}
              <div className="mb-6 pt-6 border-t border-sage-100">
                <h3 className="font-semibold text-ink-800 mb-2 flex items-center gap-2">
                  <span className="text-sage-500">🏢</span>
                  Powered by Momentus Real Estate Group
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Ask MiniMo operates independently of Momentus Real Estate Group. Momentus Real Estate Group does not 
                  provide brokerage services through this platform. Any real estate services are offered separately 
                  and only through a direct client relationship.
                </p>
              </div>

              {/* Additional Important Disclosures */}
              <div className="pt-6 border-t border-sage-100">
                <h3 className="font-semibold text-ink-800 mb-2 flex items-center gap-2">
                  <span className="text-sage-500">⚖️</span>
                  Important Disclosures
                </h3>
                <ul className="text-sm text-ink-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>MiniMo is not a licensed real estate agent, broker, loan officer, attorney, or financial advisor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>Information provided is for educational purposes only and should not be considered professional advice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>Always consult with licensed professionals for specific legal, financial, or real estate guidance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sage-400 mt-1">•</span>
                    <span>Real estate laws and practices vary by state and change frequently. Verify all information with appropriate professionals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-sage-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span>© {new Date().getFullYear()} Ask MiniMo</span>
                <span className="text-ink-300">•</span>
                <span>Made with 💚 for clarity seekers</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-ink-400">
                <Link href="/explore" className="hover:text-sage-600 transition">For Buyers</Link>
                <Link href="/agents" className="hover:text-sage-600 transition">For Agents</Link>
                <Link href="/faq" className="hover:text-sage-600 transition">FAQ</Link>
                <Link href="/terms" className="hover:text-sage-600 transition">Terms</Link>
                <Link href="/privacy" className="hover:text-sage-600 transition">Privacy</Link>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.momentusrealestategroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-ink-400 hover:text-sage-600 transition"
              >
                Powered by Momentus Real Estate Group
              </a>
              <p className="text-xs text-ink-400 mt-1">
                Maureen Cappallo, Broker • TX License #620163 • Brokerage License #9014872
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
