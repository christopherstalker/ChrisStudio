import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type HeroPanelItem = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  panelTitle: string;
  panelDescription?: string;
  panelItems: HeroPanelItem[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  badge,
  panelTitle,
  panelDescription,
  panelItems,
}: PageHeroProps) {
  return (
    <Section className="pb-12 pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">{eyebrow}</p>
          </Reveal>
          {badge ? (
            <Reveal delay={0.04}>
              <Badge variant="accent" className="mb-5">
                {badge}
              </Badge>
            </Reveal>
          ) : null}
          <Reveal delay={0.08}>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-[4.5rem] lg:leading-[0.98]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">{description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="max-w-3xl">
            <div className="surface p-6 sm:p-8">
              <div>
                <Reveal y={14}>
                  <p className="eyebrow mb-4">What to expect</p>
                </Reveal>
                <Reveal delay={0.04} y={14}>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                    {panelTitle}
                  </h2>
                </Reveal>
                {panelDescription ? (
                  <Reveal delay={0.08} y={14}>
                    <p className="mt-3 text-sm leading-6">{panelDescription}</p>
                  </Reveal>
                ) : null}
                <div className="mt-8 space-y-4">
                  {panelItems.map((item, index) => (
                    <Reveal key={item.label} delay={0.12 + index * 0.04} y={14}>
                      <div className="surface-muted flex items-center justify-between gap-5 rounded-[22px] p-4">
                        <p className="text-sm text-muted">{item.label}</p>
                        <p className="text-right text-sm font-medium text-ink">{item.value}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
