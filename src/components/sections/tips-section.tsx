import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { tips } from "@/lib/site";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

export function TipsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="shell container-px">
        <SectionIntro label="Cleaning Tips" title={tips.heading} description={tips.description} />

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {tips.articles.map((a) => (
            <Link
              key={a.slug}
              href={`/cleaning-tips#${a.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                <BookOpen className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold leading-snug text-ink">
                {a.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-muted">{a.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                Read the tips
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
