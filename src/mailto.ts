import { CONTACT_EMAIL } from "./i18n";

export function buildMailto(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  const qs = params.toString().replace(/\+/g, "%20");
  return `mailto:${CONTACT_EMAIL}?${qs}`;
}
