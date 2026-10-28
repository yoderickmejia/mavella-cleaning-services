import type { Metadata } from "next";
import { howItWorks } from "@/lib/site";
import { PageHeader } from "@/components/sections/page-header";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Four simple steps to a fresher space with Mavella Cleaning Services: tell us what you need, get your quote, leave the cleaning to us, and enjoy the difference.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        crumb="How It Works"
        label="How It Works"
        title={howItWorks.heading}
        description="Getting a cleaner, fresher space is simple. Here's exactly what to expect from your first message to the moment you come home to the difference."
      />
      <HowItWorks withIntro={false} />
      <BeforeAfterSection />
      <ContactCta />
    </>
  );
}
