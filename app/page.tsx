import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--color-bone)" }}>
      {/* Soft ambient glow, sister to Mo's marketing surface. */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--color-sage-tint)", opacity: 0.55 }}
        />
        <div
          className="absolute bottom-24 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--color-cream)", opacity: 0.45 }}
        />
      </div>

      <div className="relative px-6 md:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <header className="mb-16 flex justify-center animate-fade-in">
            <Logo size="large" />
          </header>

          {/* Hero */}
          <section className="text-center mb-20 animate-slide-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="hairline" />
              <p className="tag">From Momentus Real Estate Group</p>
              <span className="hairline" />
            </div>

            <h1
              className="font-editorial mb-8 leading-[1.05]"
              style={{
                color: "var(--color-navy)",
                fontSize: "clamp(2.5rem, 6vw, 4.6rem)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Clarity before decisions.
              <br />
              <span style={{ color: "var(--color-sage-deep)", fontStyle: "italic" }}>
                Confidence before contracts.
              </span>
            </h1>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-text-soft)" }}
            >
              MiniMo is your real estate clarity companion. She is here to help you understand,
              never to sell you anything. Built on Care, Clarity, and Confidence.
            </p>
          </section>

          {/* Self-Select */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2
                className="font-editorial mb-3"
                style={{
                  color: "var(--color-navy)",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                }}
              >
                Who are you here as?
              </h2>
              <p style={{ color: "var(--color-text-quiet)" }}>Choose your path to get started.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Consumer */}
              <Link href="/explore" className="group">
                <div
                  className="h-full p-8 transition-all duration-300"
                  style={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-stone-soft)",
                    borderRadius: "18px",
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-5 transition-colors"
                    style={{
                      background: "var(--color-sage-tint)",
                      borderRadius: "12px",
                    }}
                  >
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3
                    className="font-editorial mb-3"
                    style={{ color: "var(--color-navy)", fontSize: "1.45rem", fontWeight: 500 }}
                  >
                    I am exploring real estate
                  </h3>
                  <p className="leading-relaxed mb-5" style={{ color: "var(--color-text-soft)" }}>
                    Whether you are buying, selling, renting, or just curious, get clear on your options with zero pressure.
                  </p>
                  <div
                    className="flex items-center text-sm font-medium tracking-wide uppercase"
                    style={{ color: "var(--color-sage-deep)", letterSpacing: "0.14em" }}
                  >
                    <span>Explore your path</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Agent */}
              <Link href="/agents" className="group">
                <div
                  className="h-full p-8 transition-all duration-300"
                  style={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-stone-soft)",
                    borderRadius: "18px",
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-5 transition-colors"
                    style={{
                      background: "var(--color-cream)",
                      borderRadius: "12px",
                    }}
                  >
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3
                    className="font-editorial mb-3"
                    style={{ color: "var(--color-navy)", fontSize: "1.45rem", fontWeight: 500 }}
                  >
                    I am a real estate agent
                  </h3>
                  <p className="leading-relaxed mb-5" style={{ color: "var(--color-text-soft)" }}>
                    Get the right words when you need them. Client explanations, compliant language, and calm confidence.
                  </p>
                  <div
                    className="flex items-center text-sm font-medium tracking-wide uppercase"
                    style={{ color: "var(--color-sage-deep)", letterSpacing: "0.14em" }}
                  >
                    <span>See how she helps</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Care, Clarity, Confidence */}
          <section className="mb-20">
            <div
              className="p-10 md:p-12"
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-stone-soft)",
                borderRadius: "20px",
              }}
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="hairline" />
                <p className="tag">What makes her different</p>
                <span className="hairline" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div
                    className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--color-sage-tint)", borderRadius: "12px" }}
                  >
                    <span className="text-2xl">💚</span>
                  </div>
                  <h3
                    className="font-editorial mb-2"
                    style={{ color: "var(--color-navy)", fontSize: "1.25rem", fontWeight: 500 }}
                  >
                    Care
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
                    You are treated like family, not a transaction. Every conversation starts with empathy.
                  </p>
                </div>

                <div className="text-center">
                  <div
                    className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--color-cream)", borderRadius: "12px" }}
                  >
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3
                    className="font-editorial mb-2"
                    style={{ color: "var(--color-navy)", fontSize: "1.25rem", fontWeight: 500 }}
                  >
                    Clarity
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
                    Complex real estate made simple. Confusion creates fear, clarity creates confidence.
                  </p>
                </div>

                <div className="text-center">
                  <div
                    className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--color-blush)", borderRadius: "12px" }}
                  >
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3
                    className="font-editorial mb-2"
                    style={{ color: "var(--color-navy)", fontSize: "1.25rem", fontWeight: 500 }}
                  >
                    Confidence
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
                    Feel empowered to make your own decisions. No pressure, no sales pitch, ever.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TREC */}
          <section className="mb-16">
            <div
              className="p-8 md:p-10"
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-stone-soft)",
                borderRadius: "16px",
              }}
            >
              <div className="mb-6">
                <h3
                  className="font-medium mb-2 flex items-center gap-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  <span style={{ color: "var(--color-sage-deep)" }}>📚</span>
                  Educational Use Only
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
                  Ask MiniMo is an independent educational AI tool designed to provide general real estate information.
                  It does not provide legal, financial, or real estate brokerage services. Use of this platform does not
                  create an agent-client, broker-client, or fiduciary relationship.
                </p>
              </div>

              <div className="mb-6 pt-6" style={{ borderTop: "1px solid var(--color-sage-tint)" }}>
                <h3
                  className="font-medium mb-2 flex items-center gap-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  <span style={{ color: "var(--color-sage-deep)" }}>🏢</span>
                  Powered by Momentus Real Estate Group
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-soft)" }}>
                  Ask MiniMo operates independently of Momentus Real Estate Group. Momentus Real Estate Group does not
                  provide brokerage services through this platform. Any real estate services are offered separately
                  and only through a direct client relationship.
                </p>
              </div>

              <div className="pt-6" style={{ borderTop: "1px solid var(--color-sage-tint)" }}>
                <h3
                  className="font-medium mb-3 flex items-center gap-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  <span style={{ color: "var(--color-sage-deep)" }}>⚖️</span>
                  Important Disclosures
                </h3>
                <ul className="text-sm space-y-2" style={{ color: "var(--color-text-soft)" }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--color-sage-deep)", marginTop: "4px" }}>•</span>
                    <span>MiniMo is not a licensed real estate agent, broker, loan officer, attorney, or financial advisor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--color-sage-deep)", marginTop: "4px" }}>•</span>
                    <span>Information provided is for educational purposes only and should not be considered professional advice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--color-sage-deep)", marginTop: "4px" }}>•</span>
                    <span>Always consult with licensed professionals for specific legal, financial, or real estate guidance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "var(--color-sage-deep)", marginTop: "4px" }}>•</span>
                    <span>Real estate laws and practices vary by state and change frequently. Verify all information with appropriate professionals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8" style={{ borderTop: "1px solid var(--color-sage-tint)" }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-quiet)" }}>
                <span>© {new Date().getFullYear()} Ask MiniMo</span>
                <span style={{ color: "var(--color-stone)" }}>·</span>
                <span>Made with care for clarity seekers</span>
              </div>
              <div className="flex items-center gap-4 text-sm" style={{ color: "var(--color-text-quiet)" }}>
                <Link href="/explore" className="hover:underline">For Buyers</Link>
                <Link href="/agents" className="hover:underline">For Agents</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/terms" className="hover:underline">Terms</Link>
                <Link href="/privacy" className="hover:underline">Privacy</Link>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.momentusrealestategroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline"
                style={{ color: "var(--color-text-quiet)" }}
              >
                Powered by Momentus Real Estate Group
              </a>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-quiet)" }}>
                Maureen Cappallo, Broker · TX License #620163 · Brokerage License #9014872
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
