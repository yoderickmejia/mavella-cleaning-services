import { PageHeader } from "./page-header";
import { Reveal } from "@/components/anim/reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalLayout({
  title,
  crumb,
  updated,
  intro,
  sections,
}: {
  title: string;
  crumb: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader crumb={crumb} title={title} description={`Last updated: ${updated}`} />
      <section className="bg-white py-16 md:py-20">
        <div className="shell container-px">
          <Reveal className="mx-auto max-w-3xl">
            <div className="rounded-card border border-brand-100 bg-brand-50/60 p-5 text-sm text-brand-800">
              This is a general template provided for convenience. Please review and adapt it with
              your own policies and qualified legal advice before relying on it.
            </div>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted">{intro}</p>
            <div className="mt-10 flex flex-col gap-9">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-xl font-bold text-ink">{s.heading}</h2>
                  <div className="mt-3 flex flex-col gap-3">
                    {s.body.map((p, i) => (
                      <p key={i} className="text-pretty leading-relaxed text-ink-700">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
