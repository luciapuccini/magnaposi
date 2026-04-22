import type { Dict } from "@/i18n";
import { CYS_URL } from "@/i18n";
import { buildMailto } from "@/mailto";

export function SiteNav({ dict }: { dict: Dict }) {
  const quote = buildMailto(dict.contact.quoteSubject, dict.contact.quoteBody);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <a
            href={CYS_URL}
            target="_blank"
            rel="noopener"
            aria-label="C&S Controles y Sistemas"
          >
            <img
              src="/cys-logo.png"
              alt="C&S Controles y Sistemas"
              width={88}
              height={32}
              className="h-7 w-auto"
            />
          </a>
          <span aria-hidden className="h-5 w-px bg-border" />
          <a
            href={dict.homeHref}
            className="font-display text-base font-semibold tracking-tight text-foreground"
            aria-label="MAGNAPOSI home"
          >
            MAGNAPOSI
          </a>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <a href="#how" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {dict.nav.howItWorks}
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {dict.nav.benefits}
          </a>
          <a href="#specs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {dict.nav.specs}
          </a>
          <a href="#applications" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {dict.nav.applications}
          </a>
          <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {dict.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={dict.langSwitchHref}
            hrefLang={dict.locale === "en" ? "es" : "en"}
            className="rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Switch language to ${dict.langSwitchLabel}`}
          >
            {dict.langSwitchLabel}
          </a>
          <a
            href={quote}
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {dict.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
