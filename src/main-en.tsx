import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "@/components/landing/landing-page";
import { dictionaries } from "@/i18n";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage dict={dictionaries.en} />
  </StrictMode>,
);
