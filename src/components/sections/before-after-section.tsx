import { SectionIntro } from "./section-intro";
import { Reveal } from "@/components/anim/reveal";
import { BeforeAfter } from "@/components/anim/before-after";

export function BeforeAfterSection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="shell container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionIntro
            align="left"
            label="See the Difference"
            title="Drag to See a Mavella Clean."
            description="The real difference is in what you notice after. Slide across to reveal how a space feels once every surface, corner, and detail has been properly taken care of."
          />
          <Reveal>
            <BeforeAfter
              beforeSrc="/images/before.webp"
              afterSrc="/images/after.webp"
              beforeAlt="A space before a professional clean"
              afterAlt="The same space after a Mavella clean — bright and spotless"
            />
            <p className="mt-3 text-center text-xs text-muted">
              Illustrative before/after. Drag the handle or use arrow keys.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
