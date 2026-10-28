"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Lenis smooth scroll wired into the GSAP ScrollTrigger ticker.
 * Disabled entirely when the user prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Let anchor links hand off to Lenis.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -88 });
      }
    };
    document.addEventListener("click", onAnchorClick);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 400);

    return () => {
      gsap.ticker.remove(onTick);
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      lenis.destroy();
    };
  }, []);

  return null;
}
