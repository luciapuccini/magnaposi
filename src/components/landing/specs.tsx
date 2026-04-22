import { Download } from "lucide-react";
import type { Dict } from "@/i18n";

export function Specs({ dict }: { dict: Dict }) {
  return (
    <section id="specs" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.specs.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.specs.title}
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <caption className="sr-only">{dict.specs.title} technical specifications</caption>
            <tbody>
              {dict.specs.rows.map(([k, v], i) => (
                <tr
                  key={k}
                  className={i % 2 === 0 ? "bg-card" : "bg-secondary/40"}
                >
                  <th
                    scope="row"
                    className="w-1/2 px-5 py-4 text-left align-top font-medium text-muted-foreground"
                  >
                    {k}
                  </th>
                  <td className="w-1/2 px-5 py-4 align-top font-mono text-foreground tabular-nums">
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">{dict.specs.note}</p>
          <a
            href="/Magnaposi_Eng_Datashet_3.02.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download aria-hidden className="size-4" />
            {dict.specs.brochureCta}
          </a>
        </div>
      </div>
    </section>
  );
}
