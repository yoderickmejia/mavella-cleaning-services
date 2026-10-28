import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contact, site } from "@/lib/site";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contact.description,
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: Phone, label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phoneHref}` },
  { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: MapPin, label: "Service Area", value: site.contact.serviceArea },
  { icon: Clock, label: "Business Hours", value: site.contact.hours },
];

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hi Mavella! I'd like to ask about your cleaning services.",
  )}`;

  return (
    <>
      <PageHeader
        crumb="Contact"
        label="Contact Us"
        title={contact.heading}
        description={contact.description}
      />

      <section className="bg-mist py-16 md:py-24">
        <div className="shell container-px">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            {/* Info */}
            <Reveal stagger className="order-2 flex flex-col gap-4 lg:order-1">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-card border border-line bg-white p-5 shadow-soft"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-muted">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="font-display text-base font-bold text-ink hover:text-brand-700"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-display text-base font-bold text-ink">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.506 5.26l-.999 3.648 3.692-.969zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                {contact.whatsappLabel}
              </a>
            </Reveal>

            {/* Form */}
            <Reveal className="order-1 lg:order-2">
              <div className="rounded-blob border border-line bg-white p-6 shadow-card sm:p-9">
                <h2 className="font-display text-xl font-bold text-ink">Send us a message</h2>
                <p className="mt-1.5 text-sm text-muted">
                  We usually reply within one business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
