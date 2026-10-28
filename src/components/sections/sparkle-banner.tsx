import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { promo } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/anim/reveal";
import { Pill } from "./section-intro";

export function SparkleBanner() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="shell container-px">
        <Reveal className="relative overflow-hidden rounded-card-lg bg-band shadow-lift">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
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

            {/* Visual with honest circular seal */}
            <div className="relative hidden min-h-64 lg:block">
              <Image
                src="/images/promo.webp"
                alt="A friendly Mavella professional in a blue uniform giving a thumbs up"
                fill
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-contain object-bottom"
              />
              <div className="absolute bottom-8 right-8 flex size-24 flex-col items-center justify-center rounded-full bg-gold-400 text-center text-ink shadow-card">
                <span className="font-display text-sm font-extrabold leading-none">Free</span>
                <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider">Quote</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
