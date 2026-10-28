import { Search, Heart, SlidersHorizontal, Smile } from "lucide-react";
import { whyChoose } from "@/lib/site";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

const icons = [Search, Heart, SlidersHorizontal, Smile];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="shell container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <SectionIntro
            align="left"
            label="Why Choose Mavella"
            title={whyChoose.heading}
            description={whyChoose.description}
          />

          <Reveal stagger className="grid gap-4 sm:grid-cols-2">
            {whyChoose.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.title}
                  className="group relative rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
