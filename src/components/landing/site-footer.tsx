import type { Dict } from "@/i18n";
import { CYS_URL } from "@/i18n";

export function SiteFooter({ dict }: { dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <a
            href={CYS_URL}
            target="_blank"
            rel="noopener"
            aria-label="C&S Controles y Sistemas"
          >
            <img
              src="/cys-logo.png"
              alt="C&S Controles y Sistemas"
              width={96}
              height={36}
              className="h-8 w-auto"
            />
          </a>
          <div className="flex flex-col">
            <span className="font-display text-sm font-semibold text-foreground">MAGNAPOSI</span>
            <span className="text-xs text-muted-foreground">{dict.footer.tagline}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} <a href={CYS_URL} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">{dict.contact.companyName}</a>. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
