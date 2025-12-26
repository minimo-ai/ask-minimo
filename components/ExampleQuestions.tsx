const EXAMPLES = [
  "How does buying a home usually work?",
  "What happens after I talk to a lender?",
  "How is new construction different from resale?",
  "What should I think about before selling?"
];

export default function ExampleQuestions({ onPick }: { onPick: (q: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {EXAMPLES.map((q) => (
        <button
          key={q}
          type="button"
          onClick={() => onPick(q)}
          className="rounded-full border border-black/10 bg-warm-50 px-3 py-2 text-sm text-ink-900 hover:bg-warm-100 transition"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
