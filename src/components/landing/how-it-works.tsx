import type { Dict } from "@/i18n";

export function HowItWorks({ dict }: { dict: Dict }) {
  return (
    <section id="how" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.how.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.how.title}
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {dict.how.steps.map((s) => (
            <li
              key={s.n}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <span className="font-mono text-[11px] font-medium tracking-wider text-accent">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
