import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <Logo />
        </header>

        <section className="rounded-3xl border border-black/5 bg-warm-50 p-8 md:p-12 shadow-soft">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Ask MiniMo — clear, calm answers about real estate.
          </h1>

          <p className="mt-4 text-lg text-black/70 leading-relaxed">
            Understand your options. Know what comes next. No pressure.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/ask"
              className="inline-flex items-center justify-center rounded-xl bg-warm-200 px-5 py-3 text-base font-semibold text-ink-900 hover:bg-warm-100 transition"
            >
              Ask MiniMo
            </Link>

            <a
              href="#note"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-base font-semibold text-black/70 hover:bg-black/[0.02] transition"
            >
              What this is
            </a>
          </div>

          <p id="note" className="mt-8 text-sm text-black/60 leading-relaxed">
            Educational guidance only. Not legal, financial, or lending advice.
          </p>
        </section>

        <footer className="mt-10 text-xs text-black/45">
          © {new Date().getFullYear()} Ask MiniMo
        </footer>
      </div>
    </main>
  );
}
