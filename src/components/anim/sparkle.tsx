import { cn } from "@/lib/utils";

/** Four-point brand sparkle used as a decorative "freshness" accent. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("text-sky-400", className)}
    >
      <path
        d="M12 0c.6 5.7 2.3 9.4 12 12-9.7 2.6-11.4 6.3-12 12-.6-5.7-2.3-9.4-12-12C9.7 9.4 11.4 5.7 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** A soft cluster of twinkling sparkles for hero / banner corners. */
export function SparkleCluster({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <Sparkle className="animate-twinkle absolute left-0 top-0 size-6 opacity-90" />
      <Sparkle className="animate-twinkle absolute left-7 top-6 size-3.5 text-sky-300 [animation-delay:0.8s]" />
      <Sparkle className="animate-twinkle absolute left-1 top-9 size-2.5 text-brand-300 [animation-delay:1.6s]" />
    </div>
  );
}
