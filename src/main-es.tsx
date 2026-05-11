import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "@/components/landing/landing-page";
import { dictionaries } from "@/i18n";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/space-grotesk/wght.css";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage dict={dictionaries.es} />
  </StrictMode>,
);
