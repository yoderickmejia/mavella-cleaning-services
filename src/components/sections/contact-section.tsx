import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contact, site } from "@/lib/site";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

const details = [
  { icon: Phone, label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phoneHref}` },
  { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: MapPin, label: "Service Area", value: site.contact.serviceArea },
  { icon: Clock, label: "Business Hours", value: site.contact.hours },
];

export function ContactSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="shell container-px">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Info */}
          <div>
            <SectionIntro align="left" label="Get in Touch" title={contact.heading} description={contact.description} />
            <Reveal stagger className="mt-8 flex flex-col gap-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-card border border-line bg-mist/60 p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-white">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-muted">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="font-display text-base font-bold text-ink hover:text-brand-700">
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-display text-base font-bold text-ink">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Form */}
          <Reveal>
            <div className="rounded-blob border border-line bg-white p-6 shadow-card sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
