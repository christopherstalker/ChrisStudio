import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function CaseStudiesGrid() {
  const featured = caseStudies.find((study) => study.featured);
  const remaining = caseStudies.filter((study) => !study.featured);

  return (
    <Section className="pt-6">
      {featured ? (
        <Reveal>
          <Card className="mb-6 overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <Reveal y={16}>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="accent">{featured.industry}</Badge>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      Featured case study
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.04} y={16}>
                  <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] sm:text-[3rem]">
                    {featured.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.08} y={16}>
                  <p className="mt-4 max-w-2xl text-base leading-7">{featured.summary}</p>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Reveal delay={0.12} y={16}>
                    <div className="surface-muted surface-muted-interactive rounded-[24px] p-5">
                      <p className="eyebrow mb-3">Core challenge</p>
                      <p className="text-sm leading-6 text-ink">{featured.challenge}</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.16} y={16}>
                    <div className="surface-muted surface-muted-interactive rounded-[24px] p-5">
                      <p className="eyebrow mb-3">Solution</p>
                      <p className="text-sm leading-6 text-ink">{featured.solution}</p>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="space-y-4">
                <Reveal delay={0.14} y={16}>
                  <div className="surface-muted surface-muted-interactive rounded-[24px] p-5">
                    <p className="eyebrow mb-3">Result</p>
                    <p className="text-base leading-7 text-ink">{featured.result}</p>
                    <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-accent">
                      {featured.metric}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.18} y={16}>
                  <div className="surface-muted surface-muted-interactive rounded-[24px] p-5">
                    <p className="eyebrow mb-3">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {featured.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-white/80 px-3 py-2 text-sm text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </Card>
        </Reveal>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {remaining.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.05}>
            <Card className="h-full p-6">
              <div className="flex items-center justify-between gap-4">
                <Badge>{study.industry}</Badge>
                <span className="text-sm font-medium text-accent">{study.metric}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-ink">
                {study.title}
              </h3>
              <p className="mt-3 text-sm leading-6">{study.summary}</p>
              <div className="mt-6 grid gap-4">
                <div>
                  <p className="eyebrow mb-2">Challenge</p>
                  <p className="text-sm leading-6 text-ink">{study.challenge}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">Solution</p>
                  <p className="text-sm leading-6 text-ink">{study.solution}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">Result</p>
                  <p className="text-sm leading-6 text-ink">{study.result}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-line/70 pt-5">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/70 px-3 py-2 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
