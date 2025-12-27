"use client";

type Props = {
  onPick: (question: string) => void;
};

const questions = [
  "What credit score do I really need to buy a home?",
  "How much do I actually need for a down payment?",
  "I'm self-employed — can I still get a mortgage?",
  "What's the difference between pre-qualified and pre-approved?",
  "I'm a veteran — how do VA loans work?",
  "How do I know if I'm ready to buy?",
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
