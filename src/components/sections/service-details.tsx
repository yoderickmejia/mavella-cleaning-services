import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/anim/reveal";
import { cn } from "@/lib/utils";

/**
 * Detailed services layout: each service as a photo paired with its description,
 * alternating image/text sides down the page.
 */
export function ServiceDetails() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="shell container-px space-y-16 md:space-y-24">
        {services.map((service, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              {/* Photo */}
              <Reveal className={cn("relative", flip && "lg:order-2")}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-card-lg shadow-lift ring-1 ring-line">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                  {service.popular && (
                    <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                      Most popular
                    </span>
                  )}
                </div>
              </Reveal>

              {/* Description */}
              <Reveal className={cn(flip && "lg:order-1")}>
                <h2 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl md:text-[2rem]">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {service.description}
                </p>
                <div className="mt-7">
                  <Button asChild size="lg">
                    <Link href="/quote">
                      Request a quote
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
