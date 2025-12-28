"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-80 transition">
          <Logo size="small" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/ask"
            className="text-sm bg-sage-500 text-white px-4 py-2 rounded-full hover:bg-sage-600 transition font-medium"
          >
            Try MiniMo Free
          </Link>
        </nav>
      </header>

      {/* Content */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-display font-semibold text-ink-800 mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-ink-400 mb-8">Last updated: December 2024</p>

        <div className="prose prose-ink max-w-none">
          <div className="bg-white border border-sage-100 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Agreement to Terms</h2>
              <p className="text-ink-600 leading-relaxed">
                By accessing or using Ask MiniMo, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Description of Service</h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo is an AI-powered real estate education and conversation support tool. MiniMo provides general real estate information and guidance based on Texas real estate practices. MiniMo is designed to educate and inform, not to provide professional advice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Important Disclaimers</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                <strong>Not Professional Advice:</strong> MiniMo provides educational information only. This is not legal, financial, tax, or professional real estate advice. Always consult with licensed professionals for your specific situation.
              </p>
              <p className="text-ink-600 leading-relaxed mb-4">
                <strong>Not a Licensed Agent:</strong> MiniMo is not a licensed real estate agent, broker, loan officer, attorney, or financial advisor. MiniMo cannot represent you in transactions, provide property valuations, or give specific lending advice.
              </p>
              <p className="text-ink-600 leading-relaxed">
                <strong>Information May Change:</strong> Real estate laws, regulations, and market conditions change frequently. Always verify current information with appropriate licensed professionals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">User Responsibilities</h2>
              <p className="text-ink-600 leading-relaxed">
                You agree to use MiniMo only for lawful purposes and in accordance with these Terms. You are responsible for verifying any information provided by MiniMo before making decisions. You agree not to misuse the service or attempt to circumvent any limitations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Subscription and Payments</h2>
              <p className="text-ink-600 leading-relaxed">
                Free users receive a limited number of messages. Paid subscriptions (Clarity Plus and Agent Pro) provide unlimited access. Subscriptions are billed monthly and can be cancelled at any time. Refunds are handled on a case-by-case basis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Intellectual Property</h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo, including its design, content, and AI training, is the property of its creators. You may not copy, reproduce, or distribute our service without permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Limitation of Liability</h2>
              <p className="text-ink-600 leading-relaxed">
                To the fullest extent permitted by law, Ask MiniMo and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service. We are not responsible for decisions made based on information provided by MiniMo.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Changes to Terms</h2>
              <p className="text-ink-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Governing Law</h2>
              <p className="text-ink-600 leading-relaxed">
                These Terms shall be governed by the laws of the State of Texas, without regard to conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Contact Us</h2>
              <p className="text-ink-600 leading-relaxed">
                If you have questions about these Terms, please contact us through{" "}
                <a 
                  href="https://www.momentusrealestategroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  Momentus Real Estate Group
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-sage-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-400">
          <span>© {new Date().getFullYear()} Ask MiniMo • Care • Clarity • Confidence</span>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-ink-600">Home</Link>
            <Link href="/faq" className="hover:text-ink-600">FAQ</Link>
            <Link href="/privacy" className="hover:text-ink-600">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
