import Link from "next/link";
import Logo from "@/components/Logo";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-sage-50">
      <div className="relative px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <header className="flex items-center justify-between mb-12">
            <Link href="/" className="hover:opacity-80 transition">
              <Logo size="default" />
            </Link>
            <Link href="/" className="text-sm text-sage-600 hover:text-sage-700 font-medium transition">
              ← Back home
            </Link>
          </header>

          <div className="rounded-4xl border border-sage-100 bg-white/70 backdrop-blur-sm p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-ink-800 mb-2">
              Terms of Service
            </h1>
            <p className="text-ink-500 mb-8">Last updated: December 27, 2025</p>

            <div className="prose prose-ink max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Agreement to Terms</h2>
                <p className="text-ink-600 leading-relaxed">
                  By accessing or using Ask MiniMo ("the Service") at askminimo.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Description of Service</h2>
                <p className="text-ink-600 leading-relaxed">
                  Ask MiniMo is an AI-powered real estate education and guidance platform. MiniMo provides educational information to help users understand real estate concepts, processes, and terminology. The Service is designed to empower users with knowledge — not to replace professional advice.
                </p>
              </section>

              <section className="mb-8 p-4 bg-coral-50 border border-coral-200 rounded-2xl">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">⚠️ Important Disclaimer</h2>
                <p className="text-ink-600 leading-relaxed mb-3">
                  <strong>MiniMo is NOT a licensed real estate agent, broker, lender, attorney, financial advisor, or tax professional.</strong>
                </p>
                <p className="text-ink-600 leading-relaxed mb-3">
                  The information provided by MiniMo is for <strong>educational purposes only</strong> and should not be considered as:
                </p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li>Legal advice</li>
                  <li>Financial or investment advice</li>
                  <li>Tax advice</li>
                  <li>Mortgage or lending advice</li>
                  <li>A substitute for professional real estate guidance</li>
                </ul>
                <p className="text-ink-600 leading-relaxed mt-3">
                  Always consult with licensed professionals before making real estate, financial, or legal decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">User Responsibilities</h2>
                <p className="text-ink-600 leading-relaxed mb-3">By using the Service, you agree to:</p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li>Provide accurate information when creating an account</li>
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not attempt to misuse, hack, or disrupt the Service</li>
                  <li>Not use the Service to generate harmful, illegal, or misleading content</li>
                  <li>Understand that MiniMo's responses are educational and not professional advice</li>
                  <li>Verify any information with qualified professionals before taking action</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Subscriptions and Payments</h2>
                <p className="text-ink-600 leading-relaxed mb-3">
                  Some features of the Service require a paid subscription. By subscribing, you agree that:
                </p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li>You authorize us to charge your payment method on a recurring basis</li>
                  <li>Subscriptions automatically renew until cancelled</li>
                  <li>You can cancel your subscription at any time through your account or by contacting us</li>
                  <li>Refunds are provided at our discretion</li>
                  <li>Prices may change with notice</li>
                </ul>
                <p className="text-ink-600 leading-relaxed mt-3">
                  Payments are processed securely through Stripe. We do not store your full payment card details.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Intellectual Property</h2>
                <p className="text-ink-600 leading-relaxed">
                  The Service, including its design, features, content, and branding, is owned by Ask MiniMo and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">AI-Generated Content</h2>
                <p className="text-ink-600 leading-relaxed">
                  MiniMo uses artificial intelligence to generate responses. While we strive for accuracy, AI-generated content may contain errors, omissions, or outdated information. You are responsible for verifying any information before relying on it. We make no guarantees about the accuracy, completeness, or reliability of AI-generated responses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Limitation of Liability</h2>
                <p className="text-ink-600 leading-relaxed">
                  To the maximum extent permitted by law, Ask MiniMo and its owners, operators, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Indemnification</h2>
                <p className="text-ink-600 leading-relaxed">
                  You agree to indemnify and hold harmless Ask MiniMo and its owners, operators, and affiliates from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Termination</h2>
                <p className="text-ink-600 leading-relaxed">
                  We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. You may also stop using the Service at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Changes to Terms</h2>
                <p className="text-ink-600 leading-relaxed">
                  We may modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page. Your continued use of the Service after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Governing Law</h2>
                <p className="text-ink-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Contact Us</h2>
                <p className="text-ink-600 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at:{" "}
                  <a href="mailto:hello@askminimo.com" className="text-sage-600 hover:text-sage-700 underline">
                    hello@askminimo.com
                  </a>
                </p>
              </section>
            </div>
          </div>

          <footer className="pt-8 mt-8 border-t border-sage-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <span>© {new Date().getFullYear()} Ask MiniMo</span>
                <span className="text-ink-300">•</span>
                <span>Care • Clarity • Confidence</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-ink-400">
                <Link href="/" className="hover:text-sage-600 transition">Home</Link>
                <Link href="/privacy" className="hover:text-sage-600 transition">Privacy Policy</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
