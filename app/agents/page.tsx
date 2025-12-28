<section className="px-6 py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-display font-semibold text-ink-800 text-center mb-4">
      Not just AI — built for real client moments
    </h2>
    <p className="text-ink-600 text-center max-w-2xl mx-auto mb-12">
      ChatGPT can be generic. MiniMo is built with a broker’s education-first approach — designed to help
      you explain complex topics clearly, stay mindful of compliance, and handle tough conversations with calm confidence.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: "🛡️",
          title: "Compliance Guardrails",
          description:
            "Helps you communicate clearly while staying mindful of TREC and Fair Housing guidelines."
        },
        {
          icon: "🏗️",
          title: "New Construction Support",
          description:
            "Builder conversations, contract basics, incentives language, and timeline expectations — explained simply."
        },
        {
          icon: "🎖️",
          title: "VA Conversation Help",
          description:
            "Helps you explain VA benefits in a client-safe way without crossing into lender advice."
        }
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">{item.icon}</span>
          </div>
          <h3 className="font-semibold text-ink-800 mb-2">{item.title}</h3>
          <p className="text-sm text-ink-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
