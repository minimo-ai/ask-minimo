import Link from "next/link";
import Logo from "@/components/Logo";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-ink-500 mb-8">Last updated: December 27, 2025</p>

            <div className="prose prose-ink max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Overview</h2>
                <p className="text-ink-600 leading-relaxed">
                  Ask MiniMo ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website at askminimo.com and our AI-powered real estate education service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Information We Collect</h2>
                <p className="text-ink-600 leading-relaxed mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li><strong>Information you provide:</strong> When you subscribe to our service, we collect your name, email address, and payment information (processed securely through Stripe).</li>
                  <li><strong>Conversation data:</strong> The questions you ask and conversations you have with MiniMo to provide and improve our service.</li>
                  <li><strong>Usage data:</strong> Information about how you interact with our website, including pages visited and features used.</li>
                  <li><strong>Device information:</strong> Browser type, operating system, and device identifiers for analytics purposes.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">How We Use Your Information</h2>
                <p className="text-ink-600 leading-relaxed mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li>Provide and maintain our AI-powered real estate education service</li>
                  <li>Process your subscription payments</li>
                  <li>Improve and personalize your experience</li>
                  <li>Communicate with you about your account or our services</li>
                  <li>Analyze usage patterns to improve our service</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Information Sharing</h2>
                <p className="text-ink-600 leading-relaxed mb-3">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li><strong>Service providers:</strong> Third parties who help us operate our service (e.g., Stripe for payments, Vercel for hosting)</li>
                  <li><strong>AI providers:</strong> We use Anthropic's Claude API to power MiniMo's conversations</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Data Security</h2>
                <p className="text-ink-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Your Rights</h2>
                <p className="text-ink-600 leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 text-ink-600 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Cancel your subscription at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Cookies</h2>
                <p className="text-ink-600 leading-relaxed">
                  We use essential cookies to make our website work properly. We may also use analytics cookies to understand how visitors interact with our website. You can control cookie settings through your browser.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Children's Privacy</h2>
                <p className="text-ink-600 leading-relaxed">
                  Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Changes to This Policy</h2>
                <p className="text-ink-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-ink-800 mb-3">Contact Us</h2>
                <p className="text-ink-600 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:{" "}
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
                <Link href="/terms" className="hover:text-sage-600 transition">Terms of Service</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
