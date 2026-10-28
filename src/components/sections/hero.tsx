import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SplitHeading } from "@/components/anim/split-heading";
import { Reveal } from "@/components/anim/reveal";
import { CircleBadge } from "@/components/anim/circle-badge";
import { Pill } from "@/components/sections/section-intro";

export function Hero() {
  return (
    <section className="bg-foam-gradient relative overflow-hidden">
      <div className="shell container-px relative grid items-center gap-12 py-14 md:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <Reveal>
            <Pill>{hero.smallHeading}</Pill>
          </Reveal>

          <SplitHeading
            text={hero.headline}
            accentLast={1}
            className="mt-6 text-pretty text-[2.6rem] font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
          />

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-[1.05rem]">
              {hero.description}
            </p>
          </Reveal>

          <Reveal
            delay={0.28}
            stagger
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </Reveal>
        </div>

        {/* Visual — arch photo + overlapping portrait + rotating seal badge (hidden on mobile) */}
        <Reveal delay={0.12} y={32} className="relative hidden md:block">
          <div className="relative mx-auto w-full max-w-md lg:mr-0 lg:max-w-[30rem]">
            <div className="mask-arch relative aspect-[5/6] overflow-hidden shadow-lift">
              <Image
                src="/images/hero.webp"
                alt="A friendly Mavella professional holding a caddy of cleaning supplies in a bright home"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping circular portrait */}
            <div className="absolute -left-4 bottom-10 size-28 overflow-hidden rounded-full border-4 border-white shadow-card sm:-left-8 sm:size-36">
              <Image
                src="/images/cleaner-portrait.webp"
                alt="Mavella team member smiling during a home visit"
                fill
                sizes="144px"
                className="object-cover object-center"
              />
            </div>

            {/* Rotating seal badge (circular badge, no fabricated figure) */}
            <CircleBadge className="absolute -right-3 top-8 sm:-right-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
