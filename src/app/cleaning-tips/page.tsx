import type { Metadata } from "next";
import { Check } from "lucide-react";
import { tips } from "@/lib/site";
import { PageHeader } from "@/components/sections/page-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/anim/reveal";
import { Sparkle } from "@/components/anim/sparkle";

export const metadata: Metadata = {
  title: "Cleaning Tips",
  description: tips.description,
  alternates: { canonical: "/cleaning-tips" },
};

/**
 * NOTE: The client text file provides each article's title and excerpt only.
 * The short practical tip lists below are general, authored supporting content
 * (not client copy) so the page is genuinely useful. See docs/REPORTE_FINAL.md.
 */
const tipLists: Record<string, string[]> = {
  "cleaner-between-visits": [
    "Do a quick 10-minute tidy each evening so messes never pile up.",
    "Keep a small caddy of go-to supplies on each floor.",
    "Wipe high-touch surfaces — handles, switches, remotes — a few times a week.",
    "Deal with spills right away before they set in.",
  ],
  "kitchen-fresh-start": [
    "Wipe counters and the stovetop down after cooking, while they're still warm.",
    "Run an empty hot cycle with a cleaner to freshen the dishwasher.",
    "Empty and wipe the fridge weekly before new groceries go in.",
    "Deodorize the sink drain with baking soda and a hot-water rinse.",
  ],
  "time-for-a-deep-clean": [
    "Dust and buildup keep returning soon after your usual clean.",
    "Grout, baseboards, and vents look dull no matter the routine.",
    "You're moving in or out, or wrapping up a renovation.",
    "It simply hasn't had a thorough, top-to-bottom clean in months.",
  ],
};

export default function CleaningTipsPage() {
  return (
    <>
      <PageHeader
        crumb="Cleaning Tips"
        label="Cleaning Tips"
        title={tips.heading}
        description={tips.description}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="shell container-px flex flex-col gap-8">
          {tips.articles.map((a, i) => (
            <Reveal key={a.slug}>
              <article
                id={a.slug}
                className="relative scroll-mt-28 overflow-hidden rounded-blob border border-line bg-mist/50 p-7 shadow-soft sm:p-10"
              >
                <Sparkle className="absolute right-8 top-8 size-5 text-sky-400/60" />
                <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
                  <div>
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
                      Tip {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-balance font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      {a.title}
                    </h2>
                    <p className="mt-3 text-pretty text-base leading-relaxed text-muted sm:text-lg">
                      {a.excerpt}
                    </p>
                  </div>
                  <ul className="flex flex-col justify-center gap-3 rounded-card border border-line bg-white p-6 shadow-soft">
                    {tipLists[a.slug].map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-[0.95rem] leading-relaxed text-ink-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
