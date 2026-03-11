import { caseStudies } from "@/data/case-studies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function FeaturedWork() {
  const featuredStudy = caseStudies.find((study) => study.featured);
  const supportingStudies = caseStudies.filter((study) => !study.featured).slice(0, 2);

  if (!featuredStudy) {
    return null;
  }

  return (
    <Section id="work">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies built around outcomes, not portfolio filler."
            description="Each project is framed around a real operational or growth problem, then executed with the kind of frontend rigor that improves trust and usability."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Button href="/portfolio" variant="secondary" trailingIcon>
            View All Case Studies
          </Button>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="h-full overflow-hidden p-8 hover:-translate-y-1 hover:border-ink/15 hover:bg-white/90 hover:shadow-floating lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">{featuredStudy.industry}</Badge>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Featured case study
              </span>
            </div>
            <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              {featuredStudy.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7">{featuredStudy.summary}</p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="surface-muted rounded-[24px] p-5">
                <p className="eyebrow mb-3">Core challenge</p>
                <p className="text-sm leading-6 text-ink">{featuredStudy.challenge}</p>
              </div>
              <div className="surface-muted rounded-[24px] p-5">
                <p className="eyebrow mb-3">Solution</p>
                <p className="text-sm leading-6 text-ink">{featuredStudy.solution}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 border-t border-line/70 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {featuredStudy.stack.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-white/70 px-3 py-2 text-sm text-muted">
                    {item}
                  </span>
                ))}
              </div>
              <div className="rounded-[22px] bg-ink px-5 py-4 text-panel">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-panel/60">
                  Result
                </p>
                <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                  {featuredStudy.metric}
                </p>
              </div>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-5">
          {supportingStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.08}>
              <Card className="h-full p-6 hover:-translate-y-1 hover:border-ink/15 hover:bg-white/90 hover:shadow-floating">
                <div className="flex items-center justify-between gap-4">
                  <Badge>{study.industry}</Badge>
                  <span className="text-sm font-medium text-accent">{study.metric}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-6">{study.summary}</p>
                <div className="mt-6 grid gap-4">
                  <div>
                    <p className="eyebrow mb-2">Challenge</p>
                    <p className="text-sm leading-6 text-ink">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Result</p>
                    <p className="text-sm leading-6 text-ink">{study.result}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
