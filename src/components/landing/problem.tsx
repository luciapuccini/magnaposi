import { AlertTriangle } from "lucide-react";
import type { Dict } from "@/i18n";

export function Problem({ dict }: { dict: Dict }) {
  return (
    <section id="problem" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.problem.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.problem.title}
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dict.problem.body}
          </p>
          <ul className="mt-6 grid gap-3">
            {dict.problem.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
