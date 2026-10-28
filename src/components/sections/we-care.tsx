import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { whyChoose } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Pill } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";
import { CircleBadge } from "@/components/anim/circle-badge";

export function WeCare() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(40rem 24rem at 90% -6%, rgba(82,185,236,0.18), transparent 62%), radial-gradient(34rem 22rem at 0% 110%, rgba(31,78,137,0.55), transparent 60%)",
        }}
      />
      <div className="shell container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Pill className="border-white/15 bg-white/10 text-sky-200">Experience the Difference</Pill>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-[2.6rem]">
              {whyChoose.heading}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-brand-100">{whyChoose.description}</p>

            <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChoose.items.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-white">{item.title}</span>
                </div>
              ))}
            </Reveal>

            <div className="mt-9">
              <Button asChild size="lg" variant="white">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-blob border border-white/15 shadow-lift">
                <Image
                  src="/images/team.webp"
                  alt="A Mavella cleaning team ready to deliver a careful, detailed clean"
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="h-auto w-full object-cover"
                />
              </div>
              <CircleBadge
                text="100% SATISFACTION • CARE IN EVERY DETAIL • "
                className="absolute -bottom-6 -right-4 sm:-right-8"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
