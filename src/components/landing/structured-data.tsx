import type { Dict } from "@/i18n";
import { SITE_URL, CONTACT_EMAIL, CYS_URL } from "@/i18n";

export function StructuredData({ dict }: { dict: Dict }) {
  const url = dict.locale === "es" ? `${SITE_URL}/es/` : `${SITE_URL}/`;

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MAGNAPOSI SM-500T",
    sku: "SM-500T",
    description:
      "Contactless magnetic position sensor for steel pickling lines. Maintenance-free, acid-immune, 4–20 mA output.",
    brand: { "@type": "Brand", name: "MAGNAPOSI" },
    manufacturer: {
      "@type": "Organization",
      name: "C&S controles y sistemas SRL",
      email: CONTACT_EMAIL,
      url: CYS_URL,
    },
    category: "Industrial position sensor",
    image: [`${SITE_URL}/magnaposi-sensor.jpg`],
    url,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "C&S controles y sistemas SRL",
    url: CYS_URL,
    email: CONTACT_EMAIL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: [CYS_URL],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
