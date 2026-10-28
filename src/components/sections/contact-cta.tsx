import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { contact, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/anim/reveal";

export function ContactCta() {
  return (
    <section className="bg-mist py-16 md:py-20">
      <div className="shell container-px">
        <Reveal className="flex flex-col items-center gap-6 rounded-blob border border-line bg-white px-6 py-12 text-center shadow-card sm:px-12">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="max-w-xl text-pretty text-muted sm:text-lg">{contact.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/quote">
                Get a Free Quote
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${site.contact.phoneHref}`}>
                <Phone />
                {site.contact.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
