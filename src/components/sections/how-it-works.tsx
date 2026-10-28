import { ArrowRight } from "lucide-react";
import { howItWorks } from "@/lib/site";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

export function HowItWorks({ withIntro = true }: { withIntro?: boolean }) {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="shell container-px">
        {withIntro && <SectionIntro label="Why Choose Us" title={howItWorks.heading} />}

        <div className="relative mt-20">
          {/* connecting arrows between steps (desktop) */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-5 hidden lg:block">
            {[25, 50, 75].map((pct) => (
              <span
                key={pct}
                className="absolute -translate-x-1/2 text-brand-300"
                style={{ left: `${pct}%` }}
              >
                <ArrowRight className="size-5" />
              </span>
            ))}
          </div>

          <Reveal stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {howItWorks.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative mt-7 rounded-card border border-line bg-white px-6 pb-7 pt-12 shadow-card"
              >
                <span className="absolute -top-7 left-6 flex size-14 items-center justify-center rounded-full bg-brand-600 font-display text-xl font-extrabold text-white shadow-soft ring-4 ring-mist">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
