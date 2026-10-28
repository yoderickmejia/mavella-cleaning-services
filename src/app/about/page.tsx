import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { about, site } from "@/lib/site";
import { PageHeader } from "@/components/sections/page-header";
import { WhyChoose } from "@/components/sections/why-choose";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/anim/reveal";
import { Sparkle } from "@/components/anim/sparkle";
import { SectionIntro } from "@/components/sections/section-intro";

export const metadata: Metadata = {
  title: "About Us",
  description: site.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader crumb="About Us" label="About Us" title={about.heading} description={site.description} />

      <section className="bg-white py-20 md:py-28">
        <div className="shell container-px">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-blob border border-white/60 shadow-lift">
                  <Image
                    src="/images/about.webp"
                    alt="A Mavella professional carefully cleaning a bright, tidy home"
                    width={1000}
                    height={1180}
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="absolute -right-3 top-8 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:-right-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Sparkle className="size-5" />
                  </span>
                  <p className="font-display text-sm font-bold leading-tight text-ink">
                    One clean space
                    <br />
                    at a time
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionIntro
                align="left"
                label="Our Story"
                title="We Take Cleaning Seriously, So You Don't Have To."
              />
              <Reveal stagger className="mt-6 space-y-4">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted sm:text-lg">
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>

          {/* Values */}
          <Reveal stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => (
              <div
                key={v.title}
                className="rounded-card border border-line bg-mist/60 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-soft">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.detail}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <StatsStrip />
      <WhyChoose />
      <ContactCta />
    </>
  );
}
