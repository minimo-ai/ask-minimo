"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-ink-400 mb-8">Last updated: December 2024</p>

        <div className="prose prose-ink max-w-none">
          <div className="bg-white border border-sage-100 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Introduction</h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered real estate clarity companion service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Information We Collect</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                <strong>Conversation Data:</strong> When you interact with MiniMo, we collect the messages you send and receive. This helps us provide relevant responses and improve our service.
              </p>
              <p className="text-ink-600 leading-relaxed mb-4">
                <strong>Account Information:</strong> If you subscribe to our paid plans, we collect your email address and payment information through our secure payment processor (Stripe).
              </p>
              <p className="text-ink-600 leading-relaxed">
                <strong>Usage Data:</strong> We collect anonymous usage data such as pages visited, features used, and general interaction patterns to improve our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">How We Use Your Information</h2>
              <p className="text-ink-600 leading-relaxed">
                We use your information to provide and improve MiniMo's services, process payments, communicate with you about your account, and ensure the security of our platform. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Data Security</h2>
              <p className="text-ink-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Third-Party Services</h2>
              <p className="text-ink-600 leading-relaxed">
                We use trusted third-party services including OpenAI for AI processing and Stripe for payment processing. These services have their own privacy policies governing how they handle your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Cookies</h2>
              <p className="text-ink-600 leading-relaxed">
                We may use cookies and similar technologies to enhance your experience and understand how visitors interact with our website. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Children's Privacy</h2>
              <p className="text-ink-600 leading-relaxed">
                Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Changes to This Policy</h2>
              <p className="text-ink-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Contact Us</h2>
              <p className="text-ink-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us through{" "}
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
            <Link href="/terms" className="hover:text-ink-600">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
