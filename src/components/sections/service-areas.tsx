import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { serviceArea } from "@/lib/site";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

export function ServiceAreas() {
  // Duplicated so the marquee can loop seamlessly (translateX(-50%)).
  const row = [...serviceArea.neighborhoods, ...serviceArea.neighborhoods];

  return (
    <section className="overflow-hidden bg-mist py-20 md:py-28">
      <div className="shell container-px">
        <SectionIntro
          label={serviceArea.eyebrow}
          title={serviceArea.heading}
          description={serviceArea.description}
        />
      </div>

      {/* Marquee — gentle ticker, pauses on hover, fades at the edges */}
      <div
        className="group relative mt-12 flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <ul className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= serviceArea.neighborhoods.length}>
              <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink-700 shadow-card transition-colors hover:border-brand-200 hover:text-brand-700">
                <MapPin className="size-4 shrink-0 text-brand-600" aria-hidden />
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell container-px">
        <Reveal className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-pretty text-muted">{serviceArea.note}</p>
          <Link
            href="/quote"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Check your availability
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
