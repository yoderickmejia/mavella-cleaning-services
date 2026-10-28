import { site, services, serviceArea } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    telephone: site.contact.phoneHref,
    email: site.contact.email,
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logos/mavella-logo.svg`,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Seattle", address: { "@type": "PostalAddress", addressRegion: "WA", addressCountry: "US" } },
      ...serviceArea.neighborhoods.map((name) => ({ "@type": "Place", name: `${name}, Seattle, WA` })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${site.url}/services#${s.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
