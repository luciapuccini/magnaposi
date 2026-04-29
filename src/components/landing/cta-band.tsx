import { ArrowRight } from "lucide-react";
import type { Dict } from "@/i18n";
import { CONTACT_EMAIL } from "@/i18n";

export function CtaBand({ dict }: { dict: Dict }) {
  return (
    <section className="border-b border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">
            {dict.ctaBand.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            {dict.ctaBand.body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {dict.ctaBand.primary}
            <ArrowRight aria-hidden className="size-4" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-transparent px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {dict.ctaBand.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
