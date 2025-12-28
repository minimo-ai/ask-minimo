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
          Privacy Policy
        </h1>
        <p className="text-sm text-ink-400 mb-8">Last updated: December 2025</p>

        <div className="prose prose-ink max-w-none">
          <div className="bg-white border border-sage-100 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Introduction</h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our AI-powered real estate 
                educational tool. Please read this policy carefully to understand our practices regarding your information.
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-ink-800 mb-3 flex items-center gap-2">
                <span className="text-sage-500">📋</span>
                Important Notice
              </h2>
              <p className="text-ink-600 leading-relaxed">
                Ask MiniMo is an independent educational tool and operates separately from Momentus Real Estate Group. 
                Information collected through Ask MiniMo is used solely for operating and improving this educational 
                service and is not used for real estate brokerage purposes. Use of Ask MiniMo does not create any 
                client relationship with Momentus Real Estate Group.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Information We Collect</h2>
              
              <h3 className="font-semibold text-ink-700 mb-2 mt-4">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li><strong>Conversation Data:</strong> When you interact with MiniMo, we collect the messages you send 
                and receive. This helps us provide relevant responses and improve our service.</li>
                <li><strong>Account Information:</strong> If you subscribe to our paid plans, we collect your email address 
                through our secure payment processor.</li>
                <li><strong>Payment Information:</strong> Payment details are processed securely through Stripe. We do not 
                store your full credit card number on our servers.</li>
              </ul>

              <h3 className="font-semibold text-ink-700 mb-2 mt-4">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li><strong>Usage Data:</strong> We collect anonymous usage data such as pages visited, features used, 
                session duration, and general interaction patterns.</li>
                <li><strong>Device Information:</strong> We may collect information about the device you use to access 
                our service, including device type, operating system, and browser type.</li>
                <li><strong>Log Data:</strong> Our servers automatically record information including your IP address, 
                access times, and referring URLs.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">How We Use Your Information</h2>
              <p className="text-ink-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li>Provide, operate, and maintain our educational AI service</li>
                <li>Improve and personalize your experience with MiniMo</li>
                <li>Process payments and manage subscriptions</li>
                <li>Communicate with you about your account or service updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns to improve our service</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">How We Do NOT Use Your Information</h2>
              <p className="text-ink-600 leading-relaxed mb-4">To be clear, we do NOT:</p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li>Sell your personal information to third parties</li>
                <li>Use your information for real estate brokerage purposes</li>
                <li>Share your conversations with third parties for marketing purposes</li>
                <li>Use your information to create a broker-client or agent-client relationship</li>
                <li>Contact you with unsolicited real estate services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-ink-600 leading-relaxed mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li><strong>Service Providers:</strong> We work with trusted third-party service providers including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>OpenAI for AI processing</li>
                    <li>Stripe for payment processing</li>
                    <li>Hosting and infrastructure providers</li>
                  </ul>
                </li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, 
                or government request.</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, 
                or safety, or that of our users or others.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                your information may be transferred as part of that transaction.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Data Security</h2>
              <p className="text-ink-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, 
                secure servers, and access controls. However, no method of transmission over the Internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Data Retention</h2>
              <p className="text-ink-600 leading-relaxed">
                We retain your information for as long as necessary to provide our services and fulfill the purposes 
                described in this policy. Conversation data may be retained to improve our AI service. If you cancel 
                your subscription, we will retain your information for a reasonable period to allow for reactivation, 
                after which it will be deleted or anonymized.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Your Rights and Choices</h2>
              <p className="text-ink-600 leading-relaxed mb-4">You have the following rights regarding your information:</p>
              <ul className="list-disc pl-6 space-y-2 text-ink-600">
                <li><strong>Access:</strong> You can request a copy of the information we hold about you.</li>
                <li><strong>Correction:</strong> You can request that we correct inaccurate information.</li>
                <li><strong>Deletion:</strong> You can request that we delete your information, subject to legal requirements.</li>
                <li><strong>Opt-out:</strong> You can opt out of promotional communications by following the unsubscribe 
                instructions in emails.</li>
                <li><strong>Data Portability:</strong> You can request your data in a portable format where technically feasible.</li>
              </ul>
              <p className="text-ink-600 leading-relaxed mt-4">
                To exercise these rights, please contact us through the contact information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-ink-600 leading-relaxed">
                We may use cookies and similar tracking technologies to enhance your experience and understand how visitors 
                interact with our website. Cookies are small data files stored on your device. You can control cookie settings 
                through your browser preferences. Note that disabling cookies may affect some functionality of our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Children's Privacy</h2>
              <p className="text-ink-600 leading-relaxed">
                Our Service is not intended for children under 18 years of age. We do not knowingly collect personal 
                information from children under 18. If you are a parent or guardian and believe your child has provided 
                us with personal information, please contact us so we can delete it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">International Users</h2>
              <p className="text-ink-600 leading-relaxed">
                Our Service is operated in the United States. If you access our Service from outside the United States, 
                please be aware that your information may be transferred to, stored, and processed in the United States 
                where our servers are located.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Changes to This Policy</h2>
              <p className="text-ink-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                new policy on this page and updating the "Last updated" date. We encourage you to review this policy 
                periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-800 mb-4">Contact Us</h2>
              <p className="text-ink-600 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us through{" "}
                <a 
                  href="https://www.momentusrealestategroup.com/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-700 underline"
                >
                  Momentus Real Estate Group
                </a>.
              </p>
              <p className="text-ink-600 leading-relaxed mt-2">
                <strong>Address:</strong><br />
                4501 Merlot Ave, Suite 200<br />
                Grapevine, TX 76051
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
        <div className="max-w-4xl mx-auto mt-4 text-center">
          <p className="text-xs text-ink-400">
            Maureen Cappallo, Broker • TX License #620163 • Brokerage License #9014872
          </p>
        </div>
      </footer>
    </main>
  );
}
