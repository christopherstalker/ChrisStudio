import {
  aboutStats,
  collaborationPoints,
  principles,
  whoIWorkWith,
} from "@/data/about";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function AboutStory() {
  return (
    <Section className="pt-6">
      <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-8 lg:p-10">
            <Reveal y={16}>
              <p className="eyebrow mb-4">Professional positioning</p>
            </Reveal>
            <Reveal delay={0.04} y={16}>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                I build digital products with the standard expected from strong product teams.
              </h2>
            </Reveal>
            <Reveal delay={0.08} y={16}>
              <div className="mt-6 space-y-5 text-base leading-7">
                <p>
                  ChrisStudio sits between freelance flexibility and product-team
                  rigor. The work combines UX judgment, frontend architecture, and
                  delivery discipline so the end result feels credible to both users
                  and the team responsible for maintaining it.
                </p>
                <p>
                  That usually means helping clients shape scope early, protect the
                  integrity of the interface, and make technical decisions that reduce
                  friction later rather than pushing it into the future.
                </p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-4">
              {aboutStats.map((item, index) => (
                <Reveal key={item.value} delay={0.12 + index * 0.04} y={16}>
                  <div className="surface-muted surface-muted-interactive rounded-[22px] p-5">
                    <p className="text-lg font-semibold tracking-[-0.03em] text-ink">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05}>
            <Card className="p-6 sm:p-8">
              <Reveal y={16}>
                <p className="eyebrow mb-4">Philosophy</p>
              </Reveal>
              <div className="grid gap-5">
                {principles.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 + index * 0.04} y={16}>
                    <div className="surface-muted surface-muted-interactive rounded-[22px] p-5">
                      <h3 className="text-xl font-semibold tracking-[-0.04em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <Card className="h-full p-6">
                <p className="eyebrow mb-4">How collaboration works</p>
                <ul className="space-y-3">
                  {collaborationPoints.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.15}>
              <Card className="h-full p-6">
                <p className="eyebrow mb-4">Who I work with</p>
                <ul className="space-y-3">
                  {whoIWorkWith.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
