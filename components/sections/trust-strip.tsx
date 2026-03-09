import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function TrustStrip() {
  return (
    <Section className="py-8 sm:py-10">
      <Reveal>
        <div className="surface-muted grid gap-3 rounded-[28px] p-4 sm:grid-cols-2 lg:grid-cols-5 lg:p-5">
          {siteConfig.trustSignals.map((item) => (
            <div
              key={item}
              className="rounded-[20px] border border-white/60 bg-white/70 px-4 py-4 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-ink/10 hover:bg-white/90 hover:shadow-panel"
            >
              <p className="text-sm leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
