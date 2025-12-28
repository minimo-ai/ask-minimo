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
          Terms of Service
        </h1>
        <p className="text-sm text-ink-400 mb-8">Last updated: December 2025</p>

        <div className="prose prose-ink max-w-none">
          <div className="bg-white border border-sage-100 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Agreement to Terms</h2>
              <p className="text-ink-600 leading-relaxed">
                By accessing or using Ask MiniMo ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, please do not use our Service. These Terms constitute a legally binding 
                agreement between you and Ask MiniMo.
              </p>
            </div>

            {/* CRITICAL DISCLAIMER SECTION */}
            <div className="bg-sage-50 border-2 border-sage-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-ink-800 mb-4 flex items-center gap-2">
                <span className="text-sage-500">⚠️</span>
                Critical Disclaimers — Please Read Carefully
              </h2>
              
              <div className="space-y-4 text-ink-600 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-ink-800 mb-2">Educational Use Only</h3>
                  <p>
                    Ask MiniMo is an independent educational AI tool designed to provide general real estate information. 
                    It does not provide legal, financial, or real estate brokerage services. The information provided is 
                    for educational and informational purposes only.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink-800 mb-2">No Professional Relationship</h3>
                  <p>
                    <strong>Use of this platform does not create an agent-client, broker-client, fiduciary, or any other 
                    professional relationship.</strong> MiniMo is not acting as your real estate agent, broker, attorney, 
                    lender, financial advisor, or any other licensed professional.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ink-800 mb-2">Independence from Momentus Real Estate Group</h3>
                  <p>
                    Ask MiniMo operates independently of Momentus Real Estate Group. Momentus Real Estate Group does not 
                    provide brokerage services through this platform. Any real estate brokerage services offered by 
                    Momentus Real Estate Group are provided separately and only through a direct, formal client relationship 
                    with appropriate written agreements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Description of Service</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                Ask MiniMo is an AI-powered educational tool that provides general real estate information, conversation support, 
                and educational guidance. The Service is designed to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li>Provide general educational information about real estate concepts and processes</li>
                <li>Help users understand common real estate terminology</li>
                <li>Offer general guidance on what questions to ask licensed professionals</li>
                <li>Provide conversation support for real estate professionals (Agent Pro tier)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">What MiniMo Is NOT</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                To be absolutely clear, MiniMo is <strong>NOT</strong> any of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li><strong>Not a real estate agent or broker</strong> — MiniMo cannot represent you in any transaction, 
                negotiate on your behalf, or provide property valuations</li>
                <li><strong>Not a lender or loan officer</strong> — MiniMo cannot quote interest rates, estimate payments, 
                pre-qualify you for a mortgage, or provide lending advice</li>
                <li><strong>Not an attorney</strong> — MiniMo cannot provide legal advice or interpret contracts</li>
                <li><strong>Not a financial advisor</strong> — MiniMo cannot provide investment advice or financial planning</li>
                <li><strong>Not a tax professional</strong> — MiniMo cannot provide tax advice</li>
                <li><strong>Not a licensed appraiser</strong> — MiniMo cannot provide property valuations or appraisals</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">User Responsibilities</h2>
              <p className="text-ink-600 leading-relaxed mb-4">By using our Service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li>Use MiniMo only for lawful purposes and in accordance with these Terms</li>
                <li>Understand that MiniMo provides educational information only, not professional advice</li>
                <li>Verify all information with appropriate licensed professionals before making decisions</li>
                <li>Consult with licensed real estate agents, brokers, attorneys, lenders, and other professionals 
                for your specific situation</li>
                <li>Not rely solely on MiniMo for any legal, financial, or real estate decisions</li>
                <li>Not attempt to circumvent any limitations or misuse the Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Texas Real Estate Specific Disclaimer</h2>
              <p className="text-ink-600 leading-relaxed">
                While MiniMo is built with knowledge of Texas real estate practices, real estate laws, regulations, 
                and market conditions change frequently. The Texas Real Estate Commission (TREC) regulates real estate 
                professionals in Texas. MiniMo is not regulated by TREC and does not replace the services of a 
                TREC-licensed professional. For any real estate transaction in Texas, you should work with a licensed 
                real estate professional and review the{" "}
                <a 
                  href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  Texas Real Estate Commission Consumer Protection Notice
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Subscription and Payments</h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                Our Service offers the following tiers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li><strong>Free Tier:</strong> Limited messages to try the Service</li>
                <li><strong>Clarity Plus ($9/month):</strong> Unlimited access for consumers</li>
                <li><strong>Agent Pro ($19/month launch pricing):</strong> Unlimited access for real estate professionals</li>
              </ul>
              <p className="text-ink-600 leading-relaxed mt-4">
                Subscriptions are billed monthly through Stripe and can be cancelled at any time. Upon cancellation, 
                you will retain access through the end of your current billing period. Refunds are handled on a 
                case-by-case basis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Intellectual Property</h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo, including its design, content, AI training, and underlying technology, is the property 
                of its creators. You may not copy, reproduce, modify, distribute, or create derivative works based 
                on our Service without express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Limitation of Liability</h2>
              <p className="text-ink-600 leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, ASK MINIMO, ITS CREATORS, OPERATORS, AND AFFILIATES 
                (INCLUDING MOMENTUS REAL ESTATE GROUP) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF THE SERVICE. THIS INCLUDES, BUT IS 
                NOT LIMITED TO, DAMAGES ARISING FROM DECISIONS MADE BASED ON INFORMATION PROVIDED BY MINIMO, 
                LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION.
              </p>
              <p className="text-ink-600 leading-relaxed mt-4">
                <strong>YOU ACKNOWLEDGE THAT:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600 mt-2">
                <li>MiniMo provides educational information only</li>
                <li>You are responsible for verifying all information with licensed professionals</li>
                <li>Any decisions you make based on MiniMo's information are your sole responsibility</li>
                <li>Real estate transactions involve significant legal and financial consequences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Indemnification</h2>
              <p className="text-ink-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Ask MiniMo, its creators, operators, and affiliates 
                from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your 
                use of the Service or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Changes to Terms</h2>
              <p className="text-ink-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by 
                posting the updated Terms on this page and updating the "Last updated" date. Continued use of the 
                Service after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-ink-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, 
                without regard to conflict of law provisions. Any disputes arising from these Terms or your use of 
                the Service shall be resolved in the courts of Tarrant County, Texas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Severability</h2>
              <p className="text-ink-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
                limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain 
                in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Contact Us</h2>
              <p className="text-ink-600 leading-relaxed">
                If you have questions about these Terms, please contact us through{" "}
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
            <Link href="/privacy" className="hover:text-ink-600">Privacy Policy</Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-4 text-center">
          <p className="text-xs text-ink-400">
            Maureen Cappallo, Broker • TX License #620163 • Brokerage License #9014872
          </p>
        </div>
      </footer>
    </main>
  );
}
