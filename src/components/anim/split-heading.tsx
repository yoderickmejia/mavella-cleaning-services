"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Number of trailing words to render in the brand accent color. */
  accentLast?: number;
};

/**
 * Hero headline revealed line-by-line / word-by-word with SplitText.
 * Falls back to plain text with reduced motion. The last `accentLast`
 * words are colored in the brand accent (matching the design reference).
 */
export function SplitHeading({ text, as, className, delay = 0.1, accentLast = 0 }: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = (as ?? "h1") as ElementType;

  const words = text.trim().split(/\s+/);
  const accentFrom = accentLast > 0 ? words.length - accentLast : words.length;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      node.style.opacity = "1";
      return;
    }

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(node, {
        type: "lines,words",
        linesClass: "split-line",
      });
      gsap.set(node, { opacity: 1 });
      gsap.from(split.words, {
        yPercent: 118,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.055,
        delay,
      });
    }, node);

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, [text, delay]);

  return (
    <Tag
      ref={ref}
      className={cn("[&_.split-line]:overflow-hidden [&_.split-line]:pb-[0.08em]", className)}
      style={{ opacity: 0 }}
    >
      {words.map((w, i) => (
        <span key={i} className={i >= accentFrom ? "text-brand-500" : undefined}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
