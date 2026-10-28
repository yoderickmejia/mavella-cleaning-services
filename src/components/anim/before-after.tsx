"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

/** Draggable before/after reveal slider (pointer + keyboard accessible). */
export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt, className }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[3/2] w-full select-none overflow-hidden rounded-card shadow-card",
        className,
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      {/* After (base) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 640px"
        className="object-cover"
      />
      {/* Before (clipped) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-brand-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 backdrop-blur">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_14px_rgba(38,163,224,0.6)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-600 shadow-card">
          <MoveHorizontal className="size-5" />
        </span>
      </div>

      {/* Accessible control */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal the clean result"
        className="absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
