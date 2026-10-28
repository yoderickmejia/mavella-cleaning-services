"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      id={service.slug}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-card border border-line bg-white shadow-card"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">
          {service.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-brand-600">Request a quote</span>
          <Link
            href="/quote"
            aria-label={`Request ${service.title}`}
            className="flex size-11 items-center justify-center rounded-full border border-line text-brand-600 transition-all duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
