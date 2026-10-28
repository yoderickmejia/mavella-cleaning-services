"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

/* Inline brand marks (lucide dropped brand icons). Placeholder hrefs — the
   client can wire real social URLs via env/site config before launch. */
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
const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.3-5.6L6.4 21H3.3l7-8L2.6 3h6.1l3.9 5.1L17.5 3Zm-1.05 16.1h1.65L7.6 4.8H5.8l10.65 14.3Z" />
  </svg>
);

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "X (Twitter)", icon: XIcon, href: "#" },
];

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <Icon className="size-4 shrink-0 text-sky-400" />
      <span className="leading-tight">
        <span className="block text-[0.68rem] font-normal text-white/55">{label}</span>
        <span className="block text-[0.8rem] font-semibold text-white">{value}</span>
      </span>
    </span>
  );
}

function TopBar() {
  return (
    <div className="hidden bg-band text-white lg:block">
      <div className="shell container-px flex h-14 items-center justify-between gap-6">
        <div className="flex items-center gap-7">
          <a href={`tel:${site.contact.phoneHref}`} className="transition-opacity hover:opacity-80">
            <InfoBlock icon={Phone} label="Call Us Anytime" value={site.contact.phone} />
          </a>
          <span className="h-8 w-px bg-white/10" aria-hidden />
          <InfoBlock icon={Clock} label="Serving Time" value={site.contact.hoursShort} />
          <span className="h-8 w-px bg-white/10" aria-hidden />
          <InfoBlock icon={MapPin} label="Service Area" value={site.contact.serviceAreaCity} />
        </div>
        <div className="flex items-center gap-1.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex size-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "border-b border-line bg-white/90 shadow-soft backdrop-blur-xl"
            : "border-b border-line/70 bg-white/80 backdrop-blur-md",
        )}
      >
        <div className="shell container-px flex h-18 items-center justify-between gap-4 py-3">
          <LogoMark priority />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-semibold transition-colors",
                  isActive(item.href) ? "text-brand-700" : "text-ink-700 hover:text-brand-700",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-brand-700"
            >
              <Phone className="size-4 text-brand-500" />
              {site.contact.phone}
            </a>
            <Button asChild size="sm">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="sm" className="hidden xs:inline-flex">
              <Link href="/quote">Free Quote</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="flex size-11 items-center justify-center rounded-btn border border-line bg-white text-ink-700 shadow-soft transition-colors hover:bg-brand-50"
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent title="Navigation menu">
                <MobileMenu isActive={isActive} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

function MobileMenu({ isActive }: { isActive: (href: string) => boolean }) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-line px-6 pb-5 pt-6">
        <LogoMark />
      </div>
      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-5">
        <AnimatePresence>
          <ul className="flex flex-col gap-1">
            {mainNav.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors",
                      isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-mist",
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </nav>
      <div className="space-y-3 border-t border-line px-5 py-5">
        <SheetClose asChild>
          <Button asChild size="lg" className="w-full">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </SheetClose>
        <a
          href={`tel:${site.contact.phoneHref}`}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-ink-700"
        >
          <Phone className="size-4 text-brand-500" />
          {site.contact.phone}
        </a>
      </div>
    </div>
  );
}
