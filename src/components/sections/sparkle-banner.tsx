import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { promo } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/anim/reveal";
import { Sparkle } from "@/components/anim/sparkle";
import { Pill } from "./section-intro";

/* Photo-free decorative seal: a rotating gold "Free Quote" badge framed by
   concentric rings and sparkles — echoes the brand's circular badges. */
function FreeQuoteSeal() {
  return (
    <div className="relative hidden min-h-72 items-center justify-center lg:flex">
      {/* soft gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(22rem 18rem at 60% 50%, rgba(243,196,74,0.18), transparent 65%)",
        }}
      />
      {/* concentric rings */}
      <div aria-hidden className="absolute size-80 rounded-full border border-white/10" />
      <div aria-hidden className="absolute size-64 rounded-full border border-white/15" />

      {/* rotating seal */}
      <div className="relative flex size-44 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-400 shadow-lift ring-8 ring-white/10">
        <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full">
          <defs>
            <path id="free-quote-ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-ink/70 text-[7.5px] font-bold uppercase tracking-[0.22em]">
            <textPath href="#free-quote-ring" startOffset="0%">
              MAVELLA CLEANING • FREE QUOTE •&nbsp;
            </textPath>
          </text>
        </svg>
        <div className="flex flex-col items-center text-center text-ink">
          <Star className="size-5 fill-ink/85 text-ink/85" strokeWidth={0} />
          <span className="mt-1 font-display text-2xl font-extrabold leading-none">Free</span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-[0.2em]">Quote</span>
        </div>
      </div>

      <Sparkle className="animate-twinkle absolute left-10 top-10 size-6 text-sky-300" />
      <Sparkle className="animate-twinkle absolute bottom-12 right-12 size-4 text-gold-300 [animation-delay:1.1s]" />
      <Sparkle className="animate-twinkle absolute right-16 top-16 size-3 text-white/70 [animation-delay:0.6s]" />
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

            {/* Decorative visual — no photo */}
            <FreeQuoteSeal />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
