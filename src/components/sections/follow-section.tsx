import { follow, socials } from "@/lib/site";
import { Reveal } from "@/components/anim/reveal";
import { Pill } from "./section-intro";

type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.75v8h3.25Z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const links = [
  { label: "Follow on Facebook", icon: FacebookIcon, href: socials.facebook },
  { label: "Follow on Instagram", icon: InstagramIcon, href: socials.instagram },
];

export function FollowSection() {
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
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <Pill tone="dark">{follow.eyebrow}</Pill>
            <h2 className="mt-4 text-balance font-display text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              {follow.heading}
            </h2>
            <p className="mt-3 text-pretty text-brand-100">{follow.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-btn bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700"
                >
                  <l.icon className="size-5" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
