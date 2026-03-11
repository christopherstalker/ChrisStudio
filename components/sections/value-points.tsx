import { getIcon } from "@/lib/icon-map";
import { valuePoints } from "@/data/page-content";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function ValuePoints() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Why ChrisStudio"
            title="Built with the discipline of a product team, not the tempo of a commodity freelancer."
            description="The goal is to help serious clients ship strong software with less friction, clearer decisions, and a much higher trust bar than generic contract work usually delivers."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {valuePoints.map((item, index) => {
            const Icon = getIcon(item.icon);

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="surface h-full p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-ink/12 hover:bg-white/90 hover:shadow-floating">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
