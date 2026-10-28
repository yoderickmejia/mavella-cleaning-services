import { stats } from "@/lib/site";
import { Counter } from "@/components/anim/counter";
import { Reveal } from "@/components/anim/reveal";

export function StatsStrip() {
  return (
    <section className="relative -mt-px bg-brand-600 py-10 text-white md:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(30rem 16rem at 90% 0%, rgba(143,214,246,0.25), transparent 70%)",
        }}
      />
      <div className="shell container-px relative">
        <Reveal stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center sm:border-l sm:border-white/15 sm:first:border-l-0"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 max-w-[14rem] text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
