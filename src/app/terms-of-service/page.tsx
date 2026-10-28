import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalLayout, type LegalSection } from "@/components/sections/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} website and request our services.`,
  alternates: { canonical: "/terms-of-service" },
};

const sections: LegalSection[] = [
  {
    heading: "Using This Website",
    body: [
      "By accessing this website you agree to use it lawfully and not to misuse its content or forms. Information on this site is provided for general purposes and may change without notice.",
    ],
  },
  {
    heading: "Quotes & Services",
    body: [
      "Requesting a quote does not create a booking. Quotes are estimates based on the details you share and may be adjusted once the scope of work is confirmed. Services are delivered subject to a separate agreement between you and Mavella Cleaning Services.",
    ],
  },
  {
    heading: "Scheduling & Cancellations",
    body: [
      "We'll do our best to accommodate your preferred dates. Please give us reasonable notice of any changes or cancellations so we can adjust our schedule.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the extent permitted by law, Mavella Cleaning Services is not liable for indirect or incidental damages arising from use of this website. Nothing here limits rights you have under applicable law.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms? Email us at ${site.contact.email}.`],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      crumb="Terms of Service"
      updated="2026"
      intro={`These terms apply to your use of the ${site.name} website. Please read them carefully.`}
      sections={sections}
    />
  );
}
