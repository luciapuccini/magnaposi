import { Check } from "lucide-react";
import type { Dict } from "@/i18n";

export function Applications({ dict }: { dict: Dict }) {
  return (
    <section id="applications" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.applications.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.applications.title}
          </h2>

          <ul className="mt-6 grid gap-2.5">
            {dict.applications.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
            <img
              src="/pickling-line.jpg"
              alt={dict.applications.imageAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
