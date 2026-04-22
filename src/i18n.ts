export type Locale = "en" | "es";

export const SITE_URL = "https://www.magnaposi.com";
export const CONTACT_EMAIL = "info@controlesysistemas.com.ar";
export const CYS_URL = "https://cyselectronics.com";

export interface Dict {
  locale: Locale;
  langSwitchHref: string;
  langSwitchLabel: string;
  homeHref: string;
  nav: {
    howItWorks: string;
    benefits: string;
    specs: string;
    applications: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trust: readonly string[];
    imageAlt: string;
  };
  problem: {
    kicker: string;
    title: string;
    body: string;
    bullets: readonly string[];
  };
  how: {
    kicker: string;
    title: string;
    steps: readonly { n: string; title: string; body: string }[];
  };
  benefits: {
    kicker: string;
    title: string;
    items: readonly { title: string; body: string }[];
  };
  specs: {
    kicker: string;
    title: string;
    rows: readonly (readonly [string, string])[];
    note: string;
    brochureCta: string;
  };
  applications: {
    kicker: string;
    title: string;
    items: readonly string[];
    imageAlt: string;
  };
  faq: {
    kicker: string;
    title: string;
    items: readonly { q: string; a: string }[];
  };
  ctaBand: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    emailLabel: string;
    companyLabel: string;
    companyName: string;
    quoteSubject: string;
    quoteBody: string;
    form: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      submit: string;
      botFieldLabel: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const dictionaries: Record<Locale, Dict> = {
  en: {
    locale: "en",
    langSwitchHref: "/es/",
    langSwitchLabel: "ES",
    homeHref: "/",
    nav: {
      howItWorks: "How it works",
      benefits: "Benefits",
      specs: "Specs",
      applications: "Applications",
      faq: "FAQ",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      eyebrow: "MAGNAPOSI SM-500T",
      title: "Measure pickling depth without touching the acid.",
      subtitle:
        "A contactless magnetic position sensor built for steel pickling lines. Maintenance-free, acid-immune, plant-proven.",
      primaryCta: "Request a quote",
      secondaryCta: "How it works",
      trust: ["No contact with acid", "Zero maintenance", "Proven in steel mills"],
      imageAlt: "MAGNAPOSI SM-500T installed above an acid pickling tank",
    },
    problem: {
      kicker: "The problem",
      title: "Pickling depth control is hard — and getting it wrong is expensive.",
      body: "In steel pickling, the coil must be immersed to a precise depth. Contact sensors corrode, floats get stuck, and over-etching scraps product. You need a measurement that doesn't touch the acid and doesn't fail.",
      bullets: [
        "Corrosive environment destroys contact sensors",
        "Over-etching causes scrap and quality claims",
        "Unplanned downtime for sensor replacement",
      ],
    },
    how: {
      kicker: "How it works",
      title: "Three parts. No contact with the bath.",
      steps: [
        {
          n: "01",
          title: "Magnetic target",
          body: "A sealed magnetic target is fixed to the moving element above the acid bath.",
        },
        {
          n: "02",
          title: "MAGNAPOSI sensor",
          body: "The sensor reads the target through the air gap — no mechanical contact, no wear.",
        },
        {
          n: "03",
          title: "4–20 mA output",
          body: "Standard industrial signal wires straight into your PLC or DCS.",
        },
      ],
    },
    benefits: {
      kicker: "Why MAGNAPOSI",
      title: "Designed for the harshest corner of the mill.",
      items: [
        { title: "Contactless", body: "The sensor never touches the acid. No corrosion path, no fouling." },
        { title: "Maintenance-free", body: "No moving parts, no seals to replace. Install it and forget it." },
        { title: "Acid-immune housing", body: "Industrial enclosure rated for pickling line atmospheres." },
        { title: "Standard output", body: "4–20 mA analog signal integrates with any modern control system." },
      ],
    },
    specs: {
      kicker: "Technical specifications",
      title: "MAGNAPOSI SM-500T",
      rows: [
        ["Measurement principle", "Contactless magnetic position"],
        ["Measuring range", "Up to 500 mm"],
        ["Output signal", "4–20 mA, 2-wire loop"],
        ["Supply voltage", "24 V DC"],
        ["Protection rating", "IP65"],
        ["Operating temperature", "−10 °C to +70 °C"],
        ["Housing", "Corrosion-resistant industrial enclosure"],
        ["Application", "Steel pickling lines and similar acid processes"],
      ] as const,
      note: "Full specs, wiring and installation drawings in the product brochure.",
      brochureCta: "Download brochure (PDF)",
    },
    applications: {
      kicker: "Applications",
      title: "Built for pickling. Useful anywhere the bath bites back.",
      items: [
        "Continuous pickling lines (CPL)",
        "Push-pull pickling lines",
        "Hot-dip galvanizing immersion control",
        "Acid regeneration process tanks",
        "Any position measurement where contact sensors fail",
      ],
      imageAlt: "Steel pickling line in operation",
    },
    faq: {
      kicker: "FAQ",
      title: "Answers before you ask.",
      items: [
        {
          q: "Does the sensor need to touch the liquid?",
          a: "No. MAGNAPOSI measures through an air gap. The sensor head never contacts the acid bath, which is why it lasts.",
        },
        {
          q: "What output does it provide?",
          a: "A standard 4–20 mA analog signal, so it integrates directly with any PLC, DCS or data logger without custom drivers.",
        },
        {
          q: "How much maintenance does it need?",
          a: "None in normal operation. There are no moving parts, seals or wetted components to service.",
        },
        {
          q: "Can it be used outside pickling?",
          a: "Yes. Any process where a corrosive or dirty environment would destroy a contact sensor is a good fit.",
        },
        {
          q: "How do I get a quote?",
          a: "Email us at info@controlesysistemas.com.ar with your measuring range and application. We reply within one business day.",
        },
      ],
    },
    ctaBand: {
      title: "Specify MAGNAPOSI on your next line.",
      body: "Tell us your range and application — we'll send specs, pricing and lead time.",
      primary: "Request a quote",
      secondary: "Email us directly",
    },
    contact: {
      kicker: "Contact",
      title: "Talk to an engineer.",
      body: "C&S controles y sistemas SRL designs and manufactures industrial sensors for the steel industry. We respond to every enquiry within one business day.",
      emailLabel: "Email",
      companyLabel: "Manufacturer",
      companyName: "C&S controles y sistemas SRL",
      quoteSubject: "MAGNAPOSI SM-500T — Quote request",
      quoteBody:
        "Hello,\n\nI would like a quote for the MAGNAPOSI SM-500T.\n\nApplication:\nMeasuring range:\nQuantity:\nCompany:\nCountry:\n\nThank you.",
      form: {
        title: "Want to know more?",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        submit: "Contact me",
        botFieldLabel: "Don't fill this out if you're human:",
      },
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Contactless magnetic position sensing for steel pickling.",
    },
  },
  es: {
    locale: "es" as const,
    langSwitchHref: "/",
    langSwitchLabel: "EN",
    homeHref: "/es/",
    nav: {
      howItWorks: "Cómo funciona",
      benefits: "Ventajas",
      specs: "Especificaciones",
      applications: "Aplicaciones",
      faq: "FAQ",
      contact: "Contacto",
      cta: "Solicitar cotización",
    },
    hero: {
      eyebrow: "MAGNAPOSI SM-500T",
      title: "Medí la profundidad de decapado sin tocar el ácido.",
      subtitle:
        "Sensor magnético de posición sin contacto, diseñado para líneas de decapado de acero. Libre de mantenimiento, inmune al ácido, probado en planta.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Cómo funciona",
      trust: ["Sin contacto con el ácido", "Cero mantenimiento", "Probado en acerías"],
      imageAlt: "MAGNAPOSI SM-500T instalado sobre un tanque de decapado",
    },
    problem: {
      kicker: "El problema",
      title: "Controlar la profundidad de decapado es difícil — y equivocarse sale caro.",
      body: "En el decapado de acero, la bobina debe sumergirse a una profundidad precisa. Los sensores de contacto se corroen, los flotantes se traban y el sobre-decapado genera scrap. Hacía falta una medición que no toque el ácido y no falle.",
      bullets: [
        "El ambiente corrosivo destruye los sensores de contacto",
        "El sobre-decapado produce scrap y reclamos de calidad",
        "Paradas no planificadas por reemplazo del sensor",
      ],
    },
    how: {
      kicker: "Cómo funciona",
      title: "Tres partes. Sin contacto con el baño.",
      steps: [
        {
          n: "01",
          title: "Blanco magnético",
          body: "Un blanco magnético sellado se fija al elemento móvil por encima del baño de ácido.",
        },
        {
          n: "02",
          title: "Sensor MAGNAPOSI",
          body: "El sensor lee el blanco a través del aire — sin contacto mecánico, sin desgaste.",
        },
        {
          n: "03",
          title: "Salida 4–20 mA",
          body: "Señal industrial estándar que se conecta directo al PLC o DCS.",
        },
      ],
    },
    benefits: {
      kicker: "Por qué MAGNAPOSI",
      title: "Diseñado para el rincón más hostil de la planta.",
      items: [
        { title: "Sin contacto", body: "El sensor nunca toca el ácido. Sin corrosión, sin suciedad acumulada." },
        { title: "Sin mantenimiento", body: "Sin partes móviles ni sellos que reemplazar. Instalá y olvidate." },
        { title: "Gabinete inmune al ácido", body: "Carcasa industrial apta para atmósferas de líneas de decapado." },
        { title: "Salida estándar", body: "Señal analógica 4–20 mA, se integra con cualquier sistema de control moderno." },
      ],
    },
    specs: {
      kicker: "Especificaciones técnicas",
      title: "MAGNAPOSI SM-500T",
      rows: [
        ["Principio de medición", "Posición magnética sin contacto"],
        ["Rango de medición", "Hasta 500 mm"],
        ["Señal de salida", "4–20 mA, lazo 2 hilos"],
        ["Tensión de alimentación", "24 V CC"],
        ["Grado de protección", "IP65"],
        ["Temperatura de operación", "−10 °C a +70 °C"],
        ["Gabinete", "Industrial resistente a la corrosión"],
        ["Aplicación", "Líneas de decapado y procesos ácidos similares"],
      ] as const,
      note: "Especificaciones completas, esquemas de cableado y planos de instalación en el folleto del producto.",
      brochureCta: "Descargar folleto (PDF)",
    },
    applications: {
      kicker: "Aplicaciones",
      title: "Hecho para decapado. Útil donde el baño muerde.",
      items: [
        "Líneas de decapado continuo (CPL)",
        "Líneas de decapado push-pull",
        "Control de inmersión en galvanizado por inmersión en caliente",
        "Tanques de regeneración de ácido",
        "Cualquier medición de posición donde los sensores de contacto fallan",
      ],
      imageAlt: "Línea de decapado de acero en operación",
    },
    faq: {
      kicker: "FAQ",
      title: "Respuestas antes de preguntar.",
      items: [
        {
          q: "¿El sensor necesita tocar el líquido?",
          a: "No. MAGNAPOSI mide a través del aire. El cabezal nunca toca el baño de ácido, por eso dura.",
        },
        {
          q: "¿Qué salida entrega?",
          a: "Señal analógica estándar de 4–20 mA, integrable directo con cualquier PLC, DCS o datalogger sin drivers especiales.",
        },
        {
          q: "¿Cuánto mantenimiento requiere?",
          a: "Ninguno en operación normal. No tiene partes móviles, sellos ni componentes mojados.",
        },
        {
          q: "¿Sirve fuera del decapado?",
          a: "Sí. Cualquier proceso donde un ambiente corrosivo o sucio destruiría un sensor de contacto es un buen caso.",
        },
        {
          q: "¿Cómo pido una cotización?",
          a: "Escribinos a info@controlesysistemas.com.ar con tu rango de medición y aplicación. Respondemos en un día hábil.",
        },
      ],
    },
    ctaBand: {
      title: "Especificá MAGNAPOSI en tu próxima línea.",
      body: "Contanos el rango y la aplicación — te enviamos especificaciones, precio y plazo de entrega.",
      primary: "Solicitar cotización",
      secondary: "Escribinos por email",
    },
    contact: {
      kicker: "Contacto",
      title: "Hablá con un ingeniero.",
      body: "C&S controles y sistemas SRL diseña y fabrica sensores industriales para la industria del acero. Respondemos cada consulta en un día hábil.",
      emailLabel: "Email",
      companyLabel: "Fabricante",
      companyName: "C&S controles y sistemas SRL",
      quoteSubject: "MAGNAPOSI SM-500T — Solicitud de cotización",
      quoteBody:
        "Hola,\n\nQuisiera una cotización del MAGNAPOSI SM-500T.\n\nAplicación:\nRango de medición:\nCantidad:\nEmpresa:\nPaís:\n\nGracias.",
      form: {
        title: "¿Querés saber más?",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Email",
        submit: "Contactame",
        botFieldLabel: "No llenes esto si sos humano:",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Medición de posición magnética sin contacto para decapado de acero.",
    },
  },
};
