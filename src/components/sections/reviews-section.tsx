import Link from "next/link";
import { Star, Quote, MessageCircleHeart } from "lucide-react";
import { reviews } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

/**
 * The client asked to "display genuine customer reviews here once available."
 * To match the design's 3-card layout without fabricating testimonials, we show
 * three review-ready placeholder cards. Replace `placeholders` with real reviews
 * (name, role, rating, quote) when available.
 */
const placeholders = [
  { tag: "Residential cleaning", line: "Your experience with Mavella could be featured right here." },
  { tag: "Deep cleaning", line: "We're building a collection of reviews worth talking about." },
  { tag: "Commercial cleaning", line: "Been cleaned by Mavella? Tell us how your space feels." },
];

export function ReviewsSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="shell container-px">
        <SectionIntro
          label="Customer Reviews"
          title={reviews.heading}
          description={reviews.description}
        />

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((c) => (
            <div
              key={c.tag}
              className="relative flex flex-col rounded-card border border-line bg-white p-7 shadow-soft"
            >
              <Quote className="size-8 text-brand-200" />
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-ink-700">{c.line}</p>
              <div className="mt-5 flex items-center gap-1 text-gold-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-sky-500 font-display font-bold text-white">
                  ★
                </span>
                <div className="leading-tight">
                  <p className="font-display text-sm font-bold text-ink">Your review here</p>
                  <p className="text-xs text-muted">{c.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted">{reviews.placeholderNote}</p>
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              <MessageCircleHeart />
              Share Your Experience
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
