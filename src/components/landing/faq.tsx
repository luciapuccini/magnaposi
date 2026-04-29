import type { Dict } from "@/i18n";

export function Faq({ dict }: { dict: Dict }) {
  return (
    <section id="faq" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.faq.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.faq.title}
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          {dict.faq.items.map((item, i) => (
            <details
              key={item.q}
              className={`group px-5 py-4 ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-display text-base font-medium text-foreground">
                {item.q}
                <span
                  aria-hidden
                  className="mt-1 inline-block size-4 shrink-0 rounded-sm border border-border text-muted-foreground transition-transform group-open:rotate-45"
                >
                  <svg viewBox="0 0 16 16" className="size-full">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
