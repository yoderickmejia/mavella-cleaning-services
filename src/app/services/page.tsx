import type { Metadata } from "next";
import { servicesIntro } from "@/lib/site";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceDetails } from "@/components/sections/service-details";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description: servicesIntro.description,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        label="Our Services"
        title={servicesIntro.heading}
        description={servicesIntro.description}
      />
      <ServiceDetails />
      <ContactCta />
    </>
  );
}
