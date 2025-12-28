"use client";

type Props = {
  onPick: (question: string) => void;
};

// Targeted questions for Mo's ideal clients: veterans, first-time buyers, sellers, new construction
const questions = [
  // Veteran focus
  "I'm a veteran — what should I know about VA loans?",
  // Buyer myths
  "Do I really need 20% down to buy a house?",
  // Seller focus
  "I'm thinking about selling — where do I even start?",
  // New construction
  "What's the difference between buying new construction vs. resale?",
  // Seller pricing
  "How do I figure out what my home is worth?",
  // Readiness (works for both buyers and sellers)
  "How do I know if I'm ready to make a move?",
];

export default function ExampleQuestions({ onPick }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onPick(q)}
          className="group rounded-full border border-sage-200 bg-white px-4 py-2 text-sm text-ink-600 hover:border-sage-400 hover:bg-sage-50 hover:text-ink-800 transition-all duration-200"
        >
          <span className="group-hover:translate-x-0.5 inline-block transition-transform">
            {q}
          </span>
        </button>
      ))}
    </div>
  );
}
