import { cn } from "@/lib/utils";
import { Reveal } from "@/components/anim/reveal";

/**
 * Clean uppercase eyebrow label with a short accent rule — mirrors the Figma
 * section labels ("WHAT WE OFFER", "ABOUT COMPANY"). No decorative sparkle.
 */
export function Pill({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em]",
        tone === "dark" ? "text-sky-300" : "text-brand-600",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-7",
          tone === "dark" ? "bg-sky-300/70" : "bg-gold-400",
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}

export function SectionIntro({
  label,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  titleClassName,
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal
      stagger
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {label ? <Pill tone={tone}>{label}</Pill> : null}
      <h2
        className={cn(
          "text-balance text-3xl font-extrabold leading-[1.12] sm:text-4xl md:text-[2.6rem]",
          tone === "dark" ? "text-white" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-muted",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
