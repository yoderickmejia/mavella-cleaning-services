import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { promo } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/anim/reveal";
import { Pill } from "./section-intro";

const perks = [
  "Free, no-obligation quote",
  "Fast, friendly response",
  "Flexible scheduling that fits you",
];

/* Photo-free benefits card — what to expect when you request a quote. */
function FreeQuoteCard() {
  return (
    <div className="hidden items-center justify-center p-8 lg:flex lg:py-14 lg:pr-14">
      <div className="w-full max-w-sm rounded-card-lg bg-white p-7 shadow-lift">
        <div className="flex items-center gap-2 text-brand-600">
          <Sparkles className="size-5" />
          <span className="text-xs font-bold uppercase tracking-[0.18em]">Free Quote</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-extrabold text-ink">
          Here&apos;s what to expect
        </h3>
        <ul className="mt-5 space-y-3.5">
          {perks.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-ink-700">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SparkleBanner() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="shell container-px">
        <Reveal className="relative overflow-hidden rounded-card-lg bg-band shadow-lift">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Copy */}
            <div className="max-w-xl p-8 sm:p-12 lg:py-14 lg:pl-14">
              <Pill tone="dark">A Fresh Start</Pill>
              <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl md:text-[2.5rem]">
                {promo.heading}
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
                {promo.description}
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="gold">
                  <Link href={promo.cta.href}>
                    {promo.cta.label}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Benefits card — no photo */}
            <FreeQuoteCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
