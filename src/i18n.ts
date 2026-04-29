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
			messagePlaceholder: string;
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
				"A contactless magnetic position sensor built for steel pickling lines. Acid-immune. plant-proven.",
			primaryCta: "Request a quote",
			secondaryCta: "How it works",

			imageAlt: "MAGNAPOSI SM-500T installed above an acid pickling tank",
		},
		problem: {
			kicker: "The problem",
			title:
				"Pickling depth control is hard — and getting it wrong is expensive.",
			body: "In steel pickling, the coil must be immersed to a precise depth. Contact sensors corrode, floats get stuck, and over-etching scraps product. You need a measurement that doesn't touch the acid and doesn't fail.",
			bullets: [
				"Corrosive pickling environments demand sensors built to survive them.",
			],
		},
		how: {
			kicker: "How it works",
			title: "Three parts. No contact with the bath.",
			steps: [
				{
					n: "01",
					title: "SM-500T Sensor",
					body: "The cylindrical magnetic sensor sits in the acid tank and detects distance to the tank floor. Fully cast in corrosion-resistant compound, connected via a 5-metre cable.",
				},
				{
					n: "02",
					title: "Measurement & Control Unit (MGP-10V-P)",
					body: "The core electronics module that conditions the sensor signals, processes the measurement, and outputs the analogue result.",
				},
				{
					n: "03",
					title: "Alarms Module (MAP-3HL)",
					body: "The microprocessor unit that supervises the whole system — monitoring supplies, sensor settings, current loop integrity, and triggering relay alarms for low/high strip levels or system faults.",
				},
			],
		},
		benefits: {
			kicker: "Why MAGNAPOSI",
			title: "Designed for the harshest corner of the mill.",
			items: [
				{
					title: "Contactless",
					body: "The sensor never touches the acid. No corrosion path, no fouling.",
				},
				{
					title: "Maintenance-free",
					body: "No moving parts, no seals to replace. Install it and forget it.",
				},
				{
					title: "Acid-immune housing",
					body: "Industrial enclosure rated for pickling line atmospheres.",
				},
				{
					title: "Standard output",
					body: "4–20 mA analog signal integrates with any modern control system.",
				},
			],
		},
		specs: {
			kicker: "Technical specifications",
			title: "MAGNAPOSI SM-500T",
			rows: [
				[
					"Measurement principle",
					"Magnetic, contactless (no contact with the acid or the steel strip)",
				],
				["Measurement range", "0 to 400 mm distance from tank floor"],
				["Analogue output", "0 to 10 Vcc or 4–20 mA current loop"],
				["Power requirements", "110V (220V) Vac, 50Hz (60Hz), 750 VA"],
				[
					"Sensor (SM-500T)",
					"Cylindrical body, 97 mm diameter, 960 mm length, fully cast in a corrosion-resistant compound",
				],
				[
					"Sensor cable",
					"5 metres long for interconnection with the electronics unit",
				],
				[
					"Control enclosure",
					"IP65 metallic enclosure, RAL7035 colour, dimensions 600mm (W) × 800mm (H) × 300mm (D)",
				],
				[
					"Dual-sensor option",
					"Two active sensors with independent electronics, enabling lateral strip position measurement relative to the centre line",
				],
			] as const,
			note: "Full specs, wiring and installation drawings in the product brochure.",
			brochureCta: "Download brochure (PDF)",
		},
		applications: {
			kicker: "Applications",
			title:
				"Built for pickling. Engineered for any corrosive immersion environment.",
			items: [
				"Continuous pickling lines (CPL)",
				"Push-pull pickling lines",
				"Any position measurement where contact sensors fail",
			],
			imageAlt: "Steel pickling line in operation",
		},
		faq: {
			kicker: "FAQ",
			title: "Answers before you ask.",
			items: [
				{
					q: "Does the sensor come into contact with the acid or the steel strip?",
					a: "No. The MAGNAPOSI system is entirely contactless — the magnetic measurement principle means the sensor never touches either the acid bath or the strip. The SM-500T is also fully cast in a corrosion-resistant compound, adding an extra layer of protection in aggressive pickling environments.",
				},
				{
					q: "What output signal does the system provide, and how do I integrate it with my control system?",
					a: "The system provides two analogue output options: 0–10 Vcc voltage or 4–20 mA current loop, covering a measurement range of 0 to 400 mm from the tank floor. Both are standard industrial signals, making integration with existing PLC or SCADA systems straightforward.",
				},
				{
					q: "What happens if the strip gets too close to — or too far from — the tank floor?",
					a: "The MAP-3HL alarms module continuously supervises the system and triggers digital relay alarms for both low and high strip level thresholds, which are programmable. Three relay outputs are available: two linked to the low/high level alarms and one related to overall system status, allowing immediate response at the line control level.",
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
			body: "C&S controles y sistemas SRL designs and manufactures industrial sensors for the steel industry.",
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
				messagePlaceholder:
					"Tell us about your application, measuring range, quantity…",
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
				"Sensor magnético de posición sin contacto, diseñado para líneas de decapado de acero. Inmune al ácido. Probado en planta.",
			primaryCta: "Solicitar cotización",
			secondaryCta: "Cómo funciona",
			imageAlt: "MAGNAPOSI SM-500T instalado sobre un tanque de decapado",
		},
		problem: {
			kicker: "El problema",
			title:
				"Controlar la profundidad de decapado es difícil — y equivocarse sale caro.",
			body: "En el decapado de acero, la bobina debe sumergirse a una profundidad precisa. Los sensores de contacto se corroen, los flotantes se traban y el sobre-decapado genera scrap. Hacía falta una medición que no toque el ácido y no falle.",
			bullets: ["El ambiente corrosivo destruye los sensores de contacto"],
		},
		how: {
			kicker: "Cómo funciona",
			title: "Tres partes. Sin contacto con el baño.",
			steps: [
				{
					n: "01",
					title: "Sensor SM-500T",
					body: "El sensor magnético cilíndrico se instala dentro del tanque de ácido y detecta la distancia al fondo del tanque. Completamente colado en compuesto resistente a la corrosión y conectado mediante un cable de 5 metros.",
				},
				{
					n: "02",
					title: "Unidad de medición y control (MGP-10V-P)",
					body: "El módulo electrónico central que acondiciona las señales del sensor, procesa la medición y entrega el resultado analógico.",
				},
				{
					n: "03",
					title: "Módulo de alarmas (MAP-3HL)",
					body: "La unidad microprocesadora que supervisa todo el sistema — monitoreando alimentación, configuración del sensor, integridad del lazo de corriente, y activando alarmas de relé por niveles bajos/altos de la banda o fallas del sistema.",
				},
			],
		},
		benefits: {
			kicker: "Por qué MAGNAPOSI",
			title: "Diseñado para el rincón más hostil de la planta.",
			items: [
				{
					title: "Sin contacto",
					body: "El sensor nunca toca el ácido. Sin corrosión, sin suciedad acumulada.",
				},
				{
					title: "Sin mantenimiento",
					body: "Sin partes móviles ni sellos que reemplazar. Instalá y olvidate.",
				},
				{
					title: "Gabinete inmune al ácido",
					body: "Carcasa industrial apta para atmósferas de líneas de decapado.",
				},
				{
					title: "Salida estándar",
					body: "Señal analógica 4–20 mA, se integra con cualquier sistema de control moderno.",
				},
			],
		},
		specs: {
			kicker: "Especificaciones técnicas",
			title: "MAGNAPOSI SM-500T",
			rows: [
				[
					"Principio de medición",
					"Magnético, sin contacto (sin contacto con el ácido ni con la banda de acero)",
				],
				[
					"Rango de medición",
					"0 a 400 mm de distancia desde el fondo del tanque",
				],
				["Salida analógica", "0 a 10 Vcc o lazo de corriente 4–20 mA"],
				[
					"Requerimientos de alimentación",
					"110V (220V) Vac, 50Hz (60Hz), 750 VA",
				],
				[
					"Sensor (SM-500T)",
					"Cuerpo cilíndrico, 97 mm de diámetro, 960 mm de largo, completamente colado en compuesto resistente a la corrosión",
				],
				[
					"Cable del sensor",
					"5 metros de longitud para interconexión con la unidad electrónica",
				],
				[
					"Gabinete de control",
					"Gabinete metálico IP65, color RAL7035, dimensiones 600mm (An) × 800mm (Al) × 300mm (P)",
				],
				[
					"Opción doble sensor",
					"Dos sensores activos con electrónica independiente, que permiten medir la posición lateral de la banda respecto a la línea central",
				],
			] as const,
			note: "Especificaciones completas, esquemas de cableado y planos de instalación en el folleto del producto.",
			brochureCta: "Descargar folleto (PDF)",
		},
		applications: {
			kicker: "Aplicaciones",
			title:
				"Hecho para decapado. Diseñado para cualquier ambiente de inmersión corrosivo.",
			items: [
				"Líneas de decapado continuo (CPL)",
				"Líneas de decapado push-pull",
				"Cualquier medición de posición donde los sensores de contacto fallan",
			],
			imageAlt: "Línea de decapado de acero en operación",
		},
		faq: {
			kicker: "FAQ",
			title: "Respuestas antes de preguntar.",
			items: [
				{
					q: "¿El sensor entra en contacto con el ácido o con la banda de acero?",
					a: "No. El sistema MAGNAPOSI es completamente sin contacto — el principio de medición magnético permite que el sensor nunca toque ni el baño de ácido ni la banda. El SM-500T está además completamente colado en compuesto resistente a la corrosión, aportando una capa extra de protección en ambientes de decapado agresivos.",
				},
				{
					q: "¿Qué señal de salida entrega el sistema y cómo lo integro con mi sistema de control?",
					a: "El sistema ofrece dos opciones de salida analógica: tensión 0–10 Vcc o lazo de corriente 4–20 mA, cubriendo un rango de medición de 0 a 400 mm desde el fondo del tanque. Ambas son señales industriales estándar, lo que hace que la integración con PLC o SCADA existentes sea directa.",
				},
				{
					q: "¿Qué ocurre si la banda se acerca demasiado — o se aleja demasiado — del fondo del tanque?",
					a: "El módulo de alarmas MAP-3HL supervisa continuamente el sistema y activa alarmas de relé digitales para los umbrales de nivel bajo y alto de la banda, que son programables. Hay tres salidas de relé disponibles: dos vinculadas a las alarmas de nivel bajo/alto y una relacionada con el estado general del sistema, permitiendo una respuesta inmediata a nivel del control de línea.",
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
			body: "C&S controles y sistemas SRL diseña y fabrica sensores industriales para la industria del acero.",
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
				messagePlaceholder:
					"Contanos sobre tu aplicación, rango de medición, cantidad…",
				submit: "Contactame",
				botFieldLabel: "No llenes esto si sos humano:",
			},
		},
		footer: {
			rights: "Todos los derechos reservados.",
			tagline:
				"Medición de posición magnética sin contacto para decapado de acero.",
		},
	},
};
