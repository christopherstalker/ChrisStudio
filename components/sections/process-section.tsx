import { processSteps } from "@/data/process";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function ProcessSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title="A workflow that keeps quality high without slowing the project down."
          description="The goal is straightforward: define the right thing, build it cleanly, and keep the engagement structured enough that decisions stay easy to make."
        />
      </Reveal>

      <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-line/80 lg:block" />
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.06}>
            <div className="surface relative h-full p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-ink/12 hover:bg-white/90 hover:shadow-floating">
              <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-accent" />
              <p className="ml-7 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Step {step.step}
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-ink">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
