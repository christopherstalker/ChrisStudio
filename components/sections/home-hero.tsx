import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function HomeHero() {
  return (
    <Section className="pb-12 pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <Reveal>
            <Badge variant="accent">{siteConfig.availability}</Badge>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.07em] sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]">
              Software that looks refined, feels fast, and is built to{" "}
              <span className="font-serif text-warm">scale cleanly</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">
              ChrisStudio helps founders and ambitious teams ship premium web
              applications, SaaS platforms, dashboards, automation systems, and
              conversion-focused product sites with product-grade execution.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" trailingIcon>
                Start a Project
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary" trailingIcon>
                View Work
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {siteConfig.heroMetrics.map((item) => (
                <div key={item.label} className="surface-muted rounded-[22px] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-accent/10 blur-3xl sm:block" />
            <div className="absolute -bottom-8 right-8 hidden h-40 w-40 rounded-full bg-warm/10 blur-3xl sm:block" />
            <div className="surface relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-hero-grid bg-grid opacity-[0.05]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-3">Engagement snapshot</p>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                      Senior execution without agency drag
                    </h2>
                  </div>
                  <div className="rounded-full border border-line/80 bg-white/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    Build mode
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="surface-muted rounded-[24px] p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      What gets handled
                    </p>
                    <p className="mt-3 text-base font-medium leading-7 text-ink">
                      Product direction, interface systems, frontend engineering,
                      delivery structure, launch readiness.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="surface-muted rounded-[24px] p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                        Release rhythm
                      </p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-ink">
                        Weekly checkpoints
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        Visible progress, scoped decisions, no dead air.
                      </p>
                    </div>
                    <div className="surface-muted rounded-[24px] p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                        Strong fit
                      </p>
                      <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-ink">
                        SaaS, ops, revenue surfaces
                      </p>
                      <p className="mt-2 text-sm leading-6">
                        Best for products that need both polish and structure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] bg-ink p-6 text-panel shadow-floating">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-panel/60">
                        Recent outcomes
                      </p>
                      <p className="mt-3 text-xl font-semibold tracking-[-0.04em]">
                        Faster reporting, cleaner internal tooling, better-performing product sites.
                      </p>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-panel/70">
                      Results
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
