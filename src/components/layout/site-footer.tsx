import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { footer, site } from "@/lib/site";
import { Logo } from "./logo";
import { Sparkle } from "@/components/anim/sparkle";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(40rem 22rem at 85% -10%, rgba(82,185,236,0.18), transparent 70%), radial-gradient(34rem 20rem at 5% 110%, rgba(37,95,166,0.35), transparent 65%)",
        }}
      />
      <Sparkle className="absolute right-[12%] top-10 size-5 text-sky-400/70 animate-twinkle" />
      <Sparkle className="absolute left-[8%] top-24 size-3 text-sky-300/60 animate-twinkle [animation-delay:1.2s]" />

      <div className="shell container-px relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Logo variant="white" />
            <p className="mt-5 font-display text-lg italic text-sky-300">{footer.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-brand-200/90">{footer.blurb}</p>
          </div>

          <FooterCol title="Quick Links" links={footer.quickLinks} />
          <FooterCol title="Our Services" links={footer.serviceLinks} />

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <ContactRow icon={<Phone className="size-4" />}>
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-white">
                  {site.contact.phone}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="size-4" />}>
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="size-4" />}>
                {site.contact.serviceArea}
              </ContactRow>
              <ContactRow icon={<Clock className="size-4" />}>{site.contact.hours}</ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-brand-200/80 md:flex-row">
          <p>{footer.copyright}</p>
          <ul className="flex items-center gap-6">
            {footer.legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-brand-200/90 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-brand-200/90">
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-300">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  );
}
