import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkle } from "@/components/anim/sparkle";

export default function NotFound() {
  return (
    <section className="bg-mesh bg-foam-gradient relative flex min-h-[70vh] items-center overflow-hidden">
      <Sparkle className="animate-twinkle absolute left-[18%] top-1/4 size-6 text-sky-400/70" />
      <Sparkle className="animate-twinkle absolute right-[20%] top-1/3 size-4 text-brand-300 [animation-delay:1s]" />
      <div className="shell container-px relative text-center">
        <p className="font-display text-7xl font-extrabold text-brand-600 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          This page took the day off.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          to a fresher start.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/quote">
              Get a Free Quote
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
