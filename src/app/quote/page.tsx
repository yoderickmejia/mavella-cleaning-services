import type { Metadata } from "next";
import { Phone, Mail, Clock, Check } from "lucide-react";
import { quote, howItWorks, site } from "@/lib/site";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteForm } from "@/components/forms/quote-form";
import { Reveal } from "@/components/anim/reveal";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: quote.description,
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        crumb="Request a Quote"
        label="Request a Quote"
        title={quote.heading}
        description={quote.description}
      />

      <section className="bg-mist py-16 md:py-24">
        <div className="shell container-px">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            {/* Aside */}
            <Reveal className="order-2 lg:order-1">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-display text-xl font-bold text-ink">What happens next</h2>
                <ol className="mt-5 space-y-5">
                  {howItWorks.steps.slice(0, 3).map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 rounded-card border border-line bg-white p-6 shadow-soft">
                  <p className="font-semibold text-ink">Prefer to talk it through?</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center gap-3 text-ink-700">
                      <Phone className="size-4 text-brand-500" />
                      <a href={`tel:${site.contact.phoneHref}`} className="hover:text-brand-700">
                        {site.contact.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-ink-700">
                      <Mail className="size-4 text-brand-500" />
                      <a href={`mailto:${site.contact.email}`} className="hover:text-brand-700">
                        {site.contact.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-ink-700">
                      <Clock className="size-4 text-brand-500" />
                      {site.contact.hoursShort}
                    </li>
                  </ul>
                  <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
                    <Check className="size-4 text-brand-500" strokeWidth={3} />
                    No obligation — just a friendly conversation.
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="order-1 lg:order-2">
              <div className="rounded-blob border border-line bg-white p-6 shadow-card sm:p-9">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
