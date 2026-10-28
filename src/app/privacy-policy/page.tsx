import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalLayout, type LegalSection } from "@/components/sections/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects the information you share with us.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: [
      "When you request a quote, contact us, or subscribe to our newsletter, we may collect details you choose to share — such as your name, phone number, email address, property details, and the service you're interested in.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to your request, prepare a quote, schedule and deliver services, and — if you've opted in — send you helpful tips and offers. We do not sell your personal information.",
    ],
  },
  {
    heading: "Sharing",
    body: [
      "We only share information with trusted providers that help us operate (for example, email delivery), and only to the extent needed to serve you. We may disclose information where required by law.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You can unsubscribe from marketing emails at any time, and you may ask us to access, update, or delete the information we hold about you.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about this policy? Email us at ${site.contact.email}.`],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      crumb="Privacy Policy"
      updated="2026"
      intro={`At ${site.name}, we respect your privacy and are committed to protecting the personal information you share with us.`}
      sections={sections}
    />
  );
}
