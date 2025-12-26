import Chat from "@/components/Chat";
import Logo from "@/components/Logo";

export default function AskPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:py-12">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-6 flex items-center justify-between">
          <Logo />
          <span className="text-xs text-black/50">Educational only</span>
        </header>

        <h1 className="text-2xl font-semibold tracking-tight">
          Ask MiniMo
        </h1>
        <p className="mt-2 text-sm text-black/70">
          Clear, calm explanations about real estate. No pressure.
        </p>

        <div className="mt-6">
          <Chat />
        </div>

        <p className="mt-6 text-xs text-black/50">
          MiniMo provides general educational info, not legal, lending, or
          professional advice.
        </p>
      </div>
    </main>
  );
}
