import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutPreview } from "@/components/sections/about-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SparkleBanner } from "@/components/sections/sparkle-banner";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FollowSection } from "@/components/sections/follow-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutPreview />
      <HowItWorks />
      <SparkleBanner />
      <ServiceAreas />
      <ReviewsSection />
      <FollowSection />
      <ContactSection />
    </>
  );
}
