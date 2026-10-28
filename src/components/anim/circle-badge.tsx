import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Circular "seal" badge with curved text around the ring and an icon in the
 * center — a premium accent echoing the design reference's circular badges.
 * The ring rotates slowly (disabled under prefers-reduced-motion via CSS).
 */
export function CircleBadge({
  text = "MAVELLA CLEANING • FRESH & SPOTLESS • ",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex size-28 items-center justify-center rounded-full bg-white shadow-card sm:size-32",
        className,
      )}
    >
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full">
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-brand-700 text-[8.5px] font-bold uppercase tracking-[0.18em]">
          <textPath href="#badge-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-sky-500 text-white shadow-soft sm:size-14">
        <Sparkles className="size-6" />
      </span>
    </div>
  );
}
