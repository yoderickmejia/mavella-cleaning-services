"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          node.textContent = `${Math.round(obj.n)}${suffix}`;
        },
        scrollTrigger: { trigger: node, start: "top 90%", once: true },
      });
    }, node);

    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
