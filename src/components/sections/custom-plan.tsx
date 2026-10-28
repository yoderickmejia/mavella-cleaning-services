import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomPlan() {
  return (
    <section className="bg-white">
      <div className="shell container-px">
        <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-card bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-8 text-center shadow-soft sm:flex-row sm:justify-between sm:px-10 sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-brand-950 sm:text-[1.7rem]">
              Need a Custom Cleaning Plan?
            </h2>
            <p className="mt-1.5 font-medium text-brand-950/80">
              Have a specific cleaning need? Tell us what your space needs and we&apos;ll help you
              find the right solution.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="shrink-0 bg-brand-950 text-white hover:bg-brand-900"
          >
            <Link href="/contact">
              Contact Us Now
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
