"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-80 transition">
          <Logo size="small" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/faq" className="text-sm text-ink-600 hover:text-ink-800 transition hidden sm:block">
            FAQ
          </Link>
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
        <h1 className="text-4xl font-display font-semibold text-ink-800 mb-4">
          Disclaimer
        </h1>
        <p className="text-sm text-ink-400 mb-8">Last updated: December 2025</p>

        <div className="prose prose-ink max-w-none">
          <div className="bg-white border border-sage-100 rounded-2xl p-8 space-y-8">
            
            {/* Primary Disclaimer Box */}
            <div className="bg-sage-50 border-2 border-sage-300 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-ink-800 mb-4 flex items-center gap-2">
                <span className="text-sage-500">📚</span>
                Educational Use Only
              </h2>
              <p className="text-ink-600 leading-relaxed text-base">
                Ask MiniMo is an <strong>independent educational AI tool</strong> designed to provide general real estate 
                information. It does not provide legal, financial, or real estate brokerage services.
              </p>
              <p className="text-ink-600 leading-relaxed text-base mt-4">
                <strong>Use of this platform does not create an agent-client, broker-client, or fiduciary relationship.</strong>
              </p>
            </div>

            {/* Momentus Independence */}
            <div className="bg-cream-50 border-2 border-cream-300 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-ink-800 mb-4 flex items-center gap-2">
                <span className="text-sage-500">🏢</span>
                Powered by Momentus Real Estate Group
              </h2>
              <p className="text-ink-600 leading-relaxed text-base">
                Ask MiniMo operates <strong>independently</strong> of Momentus Real Estate Group. Momentus Real Estate Group 
                does not provide brokerage services through this platform.
              </p>
              <p className="text-ink-600 leading-relaxed text-base mt-4">
                Any real estate services are offered separately and only through a direct client relationship with 
                appropriate written agreements.
              </p>
            </div>

            {/* What MiniMo Is NOT */}
            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">What MiniMo Is NOT</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                To be absolutely clear, MiniMo is <strong>not</strong> any of the following:
              </p>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 bg-white border border-ink-100 rounded-xl p-4">
                  <span className="text-coral-500 text-lg">✕</span>
                  <div>
                    <p className="font-semibold text-ink-800">Not a Real Estate Agent or Broker</p>
                    <p className="text-sm text-ink-600">Cannot represent you, negotiate on your behalf, or provide property valuations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-ink-100 rounded-xl p-4">
                  <span className="text-coral-500 text-lg">✕</span>
                  <div>
                    <p className="font-semibold text-ink-800">Not a Lender or Loan Officer</p>
                    <p className="text-sm text-ink-600">Cannot quote rates, estimate payments, pre-qualify you, or provide lending advice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-ink-100 rounded-xl p-4">
                  <span className="text-coral-500 text-lg">✕</span>
                  <div>
                    <p className="font-semibold text-ink-800">Not an Attorney</p>
                    <p className="text-sm text-ink-600">Cannot provide legal advice or interpret contracts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-ink-100 rounded-xl p-4">
                  <span className="text-coral-500 text-lg">✕</span>
                  <div>
                    <p className="font-semibold text-ink-800">Not a Financial Advisor</p>
                    <p className="text-sm text-ink-600">Cannot provide investment advice or financial planning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-ink-100 rounded-xl p-4">
                  <span className="text-coral-500 text-lg">✕</span>
                  <div>
                    <p className="font-semibold text-ink-800">Not a Tax Professional</p>
                    <p className="text-sm text-ink-600">Cannot provide tax advice or guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-ink-100 rounded-xl p-4">
                  <span className="text-coral-500 text-lg">✕</span>
                  <div>
                    <p className="font-semibold text-ink-800">Not a Licensed Appraiser</p>
                    <p className="text-sm text-ink-600">Cannot provide property valuations or appraisals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What MiniMo IS */}
            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">What MiniMo IS</h2>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 bg-sage-50 border border-sage-200 rounded-xl p-4">
                  <span className="text-sage-500 text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-ink-800">An Educational Tool</p>
                    <p className="text-sm text-ink-600">Provides general real estate education and information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-sage-50 border border-sage-200 rounded-xl p-4">
                  <span className="text-sage-500 text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-ink-800">A Conversation Support Tool</p>
                    <p className="text-sm text-ink-600">Helps real estate professionals with client communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-sage-50 border border-sage-200 rounded-xl p-4">
                  <span className="text-sage-500 text-lg">✓</span>
                  <div>
                    <p className="font-semibold text-ink-800">A Starting Point</p>
                    <p className="text-sm text-ink-600">Helps you understand concepts before consulting licensed professionals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fair Housing Statement */}
            <div className="bg-sage-50 border-2 border-sage-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-ink-800 mb-4 flex items-center gap-2">
                <span className="text-sage-500">🏠</span>
                Fair Housing Statement
              </h2>
              <p className="text-ink-600 leading-relaxed text-base">
                We are committed to the letter and spirit of U.S. policy for the achievement of equal housing opportunity 
                throughout the Nation. We encourage and support an affirmative advertising and marketing program in which 
                there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, 
                or national origin.
              </p>
            </div>

            {/* Texas Real Estate Notice */}
            <div className="border-t border-sage-100 pt-8">
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Texas Real Estate Notice</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                While MiniMo is built with knowledge of Texas real estate practices, real estate laws, regulations, and 
                market conditions change frequently. The Texas Real Estate Commission (TREC) regulates real estate 
                professionals in Texas.
              </p>
              <p className="text-ink-600 leading-relaxed mb-4">
                <strong>MiniMo is not regulated by TREC and does not replace the services of a TREC-licensed professional.</strong>
              </p>
              <p className="text-ink-600 leading-relaxed">
                For any real estate transaction in Texas, you should work with a licensed real estate professional and 
                review the{" "}
                <a 
                  href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700 underline font-medium"
                >
                  Texas Real Estate Commission Consumer Protection Notice
                </a>.
              </p>
            </div>

            {/* User Acknowledgment */}
            <div className="border-t border-sage-100 pt-8">
              <h2 className="text-xl font-semibold text-ink-800 mb-4">User Acknowledgment</h2>
              <p className="text-ink-600 leading-relaxed mb-4">By using Ask MiniMo, you acknowledge and agree that:</p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li>MiniMo provides educational information only, not professional advice</li>
                <li>No agent-client, broker-client, or fiduciary relationship is created</li>
                <li>You will verify all information with appropriate licensed professionals</li>
                <li>You are responsible for all decisions made based on MiniMo's information</li>
                <li>Real estate transactions involve significant legal and financial consequences</li>
                <li>Laws and regulations change, and information may become outdated</li>
              </ul>
            </div>

            {/* Broker Information */}
            <div className="border-t border-sage-100 pt-8">
              <h2 className="text-xl font-semibold text-ink-800 mb-4">About the Creator</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                Ask MiniMo was created by Maureen "Mo" Cappallo, a licensed Texas real estate broker with extensive 
                experience serving families across DFW, including veterans and first-time homebuyers.
              </p>
              <div className="bg-ink-50 rounded-xl p-4 text-sm text-ink-600">
                <p><strong>Maureen Cappallo</strong></p>
                <p>Licensed Texas Real Estate Broker</p>
                <p>TX License #620163</p>
                <p className="mt-2"><strong>Momentus Real Estate Group</strong></p>
                <p>Brokerage License #9014872</p>
                <p>4501 Merlot Ave, Suite 200</p>
                <p>Grapevine, TX 76051</p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t border-sage-100 pt-8">
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Questions?</h2>
              <p className="text-ink-600 leading-relaxed">
                If you have questions about this disclaimer or Ask MiniMo, please contact us through{" "}
                <a 
                  href="https://www.momentusrealestategroup.com/contact" 
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
            <Link href="/terms" className="hover:text-ink-600">Terms</Link>
            <Link href="/privacy" className="hover:text-ink-600">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
