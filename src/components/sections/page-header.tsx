import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Pill } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";

export function PageHeader({
  label,
  title,
  description,
  crumb,
}: {
  label?: string;
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="bg-mesh bg-foam-gradient relative overflow-hidden border-b border-line">
      <div className="shell container-px relative py-14 md:py-20">
        <Reveal stagger className="flex max-w-3xl flex-col gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm font-medium text-muted">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-4 text-brand-300" aria-hidden />
              <li aria-current="page" className="text-brand-700">
                {crumb}
              </li>
            </ol>
          </nav>
          {label ? <Pill>{label}</Pill> : null}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
