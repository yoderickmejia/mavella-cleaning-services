import Link from "next/link";
import { Phone, Sparkles } from "lucide-react";
import { services, servicesIntro, site } from "@/lib/site";
import { ServiceCard } from "./service-card";
import { Reveal } from "@/components/anim/reveal";
import { Pill } from "./section-intro";
import { Button } from "@/components/ui/button";

export function ServicesSection({ withIntro = true }: { withIntro?: boolean }) {
  return (
    <section id="services" className="scroll-mt-24 bg-mist">
      {/* Dark brand band holds the header; cards overlap onto the light bg */}
      <div className="bg-band text-white">
        <div className="shell container-px pt-16 pb-36 md:pt-20 lg:pb-44">
          {withIntro ? (
            <Reveal stagger className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div>
                <Pill tone="dark">What We Offer</Pill>
                <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-[2.5rem]">
                  {servicesIntro.heading}
                </h2>
              </div>
              <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
                <p className="max-w-md text-pretty leading-relaxed text-white/75">
                  {servicesIntro.description}
                </p>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="inline-flex items-center gap-3 font-semibold text-white"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-sky-300 ring-1 ring-white/15">
                    <Phone className="size-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-xs font-normal text-white/55">Call us anytime</span>
                    {site.contact.phone}
                  </span>
                </a>
              </div>
            </Reveal>
          ) : (
            <Reveal className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-sky-300 ring-1 ring-white/15">
                <Sparkles className="size-5" />
              </span>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {servicesIntro.heading}
              </h2>
            </Reveal>
          )}
        </div>
      </div>

      <div className="shell container-px relative -mt-28 pb-20 md:pb-24 lg:-mt-32 lg:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        {!withIntro && (
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
