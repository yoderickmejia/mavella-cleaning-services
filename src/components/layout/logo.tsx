import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

function LogoLink({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/**
 * Full logo (brand mark + "Mavella Cleaning Services" wordmark).
 * Square lockup — used where there is vertical room (footer, etc.).
 */
export function Logo({
  variant = "color",
  className,
  imgClassName,
  priority = false,
}: {
  variant?: "color" | "white";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <LogoLink className={className}>
      <Image
        src="/logos/mavella-logo.svg"
        alt={site.name}
        width={300}
        height={297}
        priority={priority}
        className={cn(
          "h-16 w-auto sm:h-20",
          variant === "white" && "[filter:brightness(0)_invert(1)]",
          imgClassName,
        )}
      />
    </LogoLink>
  );
}

/**
 * Mark only (the "M" icon). Clickable — used in the site header, where the
 * full square lockup would render its wordmark too small to read.
 */
export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <LogoLink className={className}>
      <Image
        src="/logos/mavella-mark.svg"
        alt={site.name}
        width={120}
        height={119}
        priority={priority}
        className="h-11 w-auto sm:h-12"
      />
    </LogoLink>
  );
}

/**
 * Horizontal lockup: brand mark + wordmark text beside it ("Mavella" over
 * "Cleaning Services"). Used in the site header so the name reads clearly.
 */
export function LogoLockup({
  className,
  tone = "dark",
  priority = false,
}: {
  className?: string;
  tone?: "dark" | "white";
  priority?: boolean;
}) {
  return (
    <LogoLink className={cn("group gap-2.5", className)}>
      <Image
        src="/logos/mavella-mark.svg"
        alt=""
        width={120}
        height={119}
        priority={priority}
        className={cn(
          "h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-11",
          tone === "white" && "[filter:brightness(0)_invert(1)]",
        )}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight sm:text-[1.35rem]",
            tone === "white" ? "text-white" : "text-ink",
          )}
        >
          Mavella
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em]",
            tone === "white" ? "text-brand-200" : "text-muted",
          )}
        >
          Cleaning Services
        </span>
      </span>
    </LogoLink>
  );
}

/** Decorative mark (non-clickable) for purely visual contexts. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/mavella-mark.svg"
      alt=""
      aria-hidden="true"
      width={120}
      height={119}
      className={cn("h-auto w-full", className)}
    />
  );
}
