import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { about } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="shell container-px">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* Copy */}
          <div>
            <SectionIntro align="left" label="About Mavella" title={about.heading} />
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

          {/* Visual */}
          <Reveal>
            <div className="relative overflow-hidden rounded-card-lg shadow-lift ring-1 ring-line">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/hero.webp"
                  alt="A Mavella professional caring for a bright, freshly cleaned home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
