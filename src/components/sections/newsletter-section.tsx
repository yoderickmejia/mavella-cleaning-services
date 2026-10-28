import { newsletter } from "@/lib/site";
import { Reveal } from "@/components/anim/reveal";
import { Sparkle } from "@/components/anim/sparkle";
import { NewsletterForm } from "@/components/forms/newsletter-form";

function EnvelopeArt() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div className="animate-float">
        <svg viewBox="0 0 220 160" className="w-full drop-shadow-xl" role="img" aria-label="Envelope">
          <rect x="10" y="26" width="200" height="128" rx="16" fill="#ffffff" />
          <path d="M10 42 L110 104 L210 42" fill="none" stroke="#b4d3f3" strokeWidth="6" strokeLinejoin="round" />
          <path d="M10 42 C10 33 17 26 26 26 L194 26 C203 26 210 33 210 42 L118 100 C113 103 107 103 102 100 Z" fill="#eef5fd" />
          <path d="M14 40 L104 96 C108 98 112 98 116 96 L206 40" fill="none" stroke="#255fa6" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
          <rect x="150" y="8" width="54" height="40" rx="10" fill="#255fa6" />
          <path d="M163 28 l8 8 16 -16" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <Sparkle className="animate-twinkle absolute -left-3 top-2 size-6 text-sky-300" />
      <Sparkle className="animate-twinkle absolute -bottom-2 right-4 size-4 text-sky-200 [animation-delay:1.1s]" />
    </div>
  );
}

export function NewsletterSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="shell container-px">
        <Reveal className="relative overflow-hidden rounded-blob bg-gradient-to-br from-brand-600 to-brand-700 px-6 py-12 shadow-lift sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(28rem 16rem at 92% 10%, rgba(143,214,246,0.35), transparent 60%)",
            }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="max-w-xl">
              <h2 className="text-balance font-display text-2xl font-extrabold text-white sm:text-3xl">
                {newsletter.heading}
              </h2>
              <p className="mt-3 text-pretty text-brand-100">{newsletter.description}</p>
              <div className="mt-7 max-w-lg">
                <NewsletterForm />
              </div>
            </div>
            <div className="hidden lg:block">
              <EnvelopeArt />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
