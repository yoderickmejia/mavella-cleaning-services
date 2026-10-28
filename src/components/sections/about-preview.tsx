import Link from "next/link";
import { Check } from "lucide-react";
import { about } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";
import { BookServiceForm } from "@/components/forms/book-service-form";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="shell container-px">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* Copy */}
          <div>
            <SectionIntro align="left" label="About Company" title={about.heading} />
            <Reveal stagger className="mt-6 space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-ink-700">{v.title}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-9">
              <Button asChild size="lg">
                <Link href={about.cta.href}>{about.cta.label}</Link>
              </Button>
            </Reveal>
          </div>

          {/* Book a Service form card */}
          <Reveal>
            <div className="relative rounded-card-lg border border-line bg-white p-6 shadow-card sm:p-8">
              <h3 className="font-display text-xl font-bold text-ink">Book a Service</h3>
              <p className="mt-1.5 text-sm text-muted">
                Share a few details and we&apos;ll be in touch with your free quote.
              </p>
              <div className="mt-6">
                <BookServiceForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
