import { Mail, Building2 } from "lucide-react";
import type { Dict } from "@/i18n";
import { CONTACT_EMAIL } from "@/i18n";

export function Contact({ dict }: { dict: Dict }) {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {dict.contact.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {dict.contact.body}
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Mail aria-hidden className="size-3.5" />
                {dict.contact.emailLabel}
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all font-mono text-sm text-foreground underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <Building2 aria-hidden className="size-3.5" />
                {dict.contact.companyLabel}
              </dt>
              <dd className="mt-2 text-sm text-foreground">{dict.contact.companyName}</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">
              {dict.contact.form.title}
            </h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              data-netlify-honeypot="bot-field"
              className="mt-5 grid gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="sr-only" aria-hidden="true">
                <label>
                  {dict.contact.form.botFieldLabel}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="sr-only">{dict.contact.form.namePlaceholder}</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={dict.contact.form.namePlaceholder}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="sr-only">{dict.contact.form.emailPlaceholder}</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={dict.contact.form.emailPlaceholder}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                  />
                </label>
              </div>
              <div data-netlify-recaptcha="true" />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-colors hover:bg-primary/90 sm:self-start"
              >
                {dict.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
