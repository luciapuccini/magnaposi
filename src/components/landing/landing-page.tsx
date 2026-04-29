import type { Dict } from "@/i18n";
import { SiteNav } from "./site-nav";
import { Hero } from "./hero";
import { Problem } from "./problem";
import { HowItWorks } from "./how-it-works";
import { Benefits } from "./benefits";
import { Specs } from "./specs";
import { Applications } from "./applications";
import { Faq } from "./faq";
import { CtaBand } from "./cta-band";
import { Contact } from "./contact";
import { SiteFooter } from "./site-footer";
import { StructuredData } from "./structured-data";

export function LandingPage({ dict }: { dict: Dict }) {
  return (
    <div className="flex min-h-dvh flex-col" lang={dict.locale}>
      <SiteNav dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Problem dict={dict} />
        <HowItWorks dict={dict} />
        <Benefits dict={dict} />
        <Specs dict={dict} />
        <Applications dict={dict} />
        <Faq dict={dict} />
        <CtaBand dict={dict} />
        <Contact dict={dict} />
      </main>
      <SiteFooter dict={dict} />
      <StructuredData dict={dict} />
    </div>
  );
}
