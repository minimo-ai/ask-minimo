import Chat from "@/components/Chat";
import Disclaimer from "@/components/Disclaimer";
import Logo from "@/components/Logo";

export default function AskPage() {
  return (
    <main className="px-4 py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <header className="mb-4 flex items-center justify-between">
          <Logo />
          <span className="text-xs text-black/50">
            Educational only
          </span>
        </header>

        <div className="rounded-3xl border border-black/5 bg-white shadow-soft">
          <Chat />
        </div>

        <div className="mt-4">
          <Disclaimer />
        </div>
      </div>
    </main>
  );
}
