"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger direct children instead of the element itself. */
  stagger?: boolean;
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * Subtle scroll reveal: elements rest at their final position and only lift in.
 * Honors prefers-reduced-motion by rendering fully visible with no animation.
 */
export function Reveal({
  children,
  as,
  className,
  stagger = false,
  delay = 0,
  y = 26,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) return;

    const targets = stagger ? Array.from(node.children) : [node];
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y, filter: "blur(6px)" });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.12 : 0,
        scrollTrigger: {
          trigger: node,
          start: "top 86%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, node);

    return () => ctx.revert();
  }, [stagger, delay, y, once]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
