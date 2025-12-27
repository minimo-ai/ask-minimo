import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream-200 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <header className="mb-12 animate-fade-in">
            <Logo size="large" />
          </header>

          <section className="animate-slide-up">
            <div className="rounded-4xl border border-sage-100 bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-softer">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-ink-800 leading-tight">
                Get clear on real estate<span className="text-sage-500">.</span>
                <br />
                <span className="text-sage-600">No pressure</span><span className="text-coral-400">.</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-ink-600 leading-relaxed max-w-xl">
                MiniMo helps you understand your options, know what comes next, and feel confident — before you ever talk to an agent or lender.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/ask" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-sage-500 px-8 py-4 text-lg font-semibold text-white shadow-soft hover:bg-sage-600 hover:shadow-glow transition-all duration-300">
                  <span>Start a conversation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <a href="#about" className="inline-flex items-center justify-center rounded-2xl border-2 border-sage-200 bg-white px-8 py-4 text-lg font-semibold text-sage-700 hover:bg-sage-50 hover:border-sage-300 transition-all duration-300">
                  Learn more
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-ink-500">
                <svg className="w-4 h-4 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Educational guidance only. No pressure. Ever.</span>
              </div>
            </div>
          </section>

          <section id="about" className="mt-16">
            <div className="rounded-4xl border border-sage-100 bg-white/60 backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-2xl font-display font-semibold text-ink-800 mb-6">What is MiniMo?</h2>
              
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <p>MiniMo is your clarity companion — here to help you understand real estate before you feel pressured to make decisions.</p>
                <p>Whether you are just curious, actively exploring, or getting ready to take the next step, MiniMo helps you understand where you are and what comes next.</p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-sage-50 p-5 border border-sage-100">
                  <div className="w-10 h-10 rounded-xl bg-sage-200 flex items-center justify-center mb-3">
                    <span className="text-lg">💚</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-1">Care</h3>
                  <p className="text-sm text-ink-600">You are treated like family, not a transaction.</p>
                </div>

                <div className="rounded-2xl bg-cream-50 p-5 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center mb-3">
                    <span className="text-lg">✨</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-1">Clarity</h3>
                  <p className="text-sm text-ink-600">Complex stuff made simple and understandable.</p>
                </div>

                <div className="rounded-2xl bg-blush-50 p-5 border border-blush-100">
                  <div className="w-10 h-10 rounded-xl bg-blush-200 flex items-center justify-center mb-3">
                    <span className="text-lg">💪</span>
                  </div>
                  <h3 className="font-semibold text-ink-800 mb-1">Confidence</h3>
                  <p className="text-sm text-ink-600">Feel empowered to make your own decisions.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
              <h3 className="text-sm font-semibold text-ink-700 mb-3 uppercase tracking-wide">Important Note</h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                MiniMo provides educational guidance only. She is not a lender, agent, attorney, or financial advisor. For specific rates, legal questions, or professional advice, always consult a licensed professional.
              </p>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-sage-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span>© {new Date().getFullYear()} Ask MiniMo</span>
                <span className="text-ink-300">•</span>
                <span>Made with 💚 for clarity seekers</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-ink-400">
                <span>Care</span>
                <span className="text-sage-400">•</span>
                <span>Clarity</span>
                <span className="text-sage-400">•</span>
                <span>Confidence</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
