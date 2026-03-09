import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function FinalCta() {
  return (
    <Section>
      <Reveal>
        <div className="overflow-hidden rounded-[32px] bg-ink px-6 py-10 text-panel shadow-floating sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="eyebrow text-panel/60">Start a serious project</p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.02]">
                If the project matters, the website and software should feel like it.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-panel/72">
                The best fit is usually a team that needs product-grade delivery,
                crisp execution, and a partner who can move from strategic thinking
                into implementation without dropping the quality bar.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid gap-3">
                {siteConfig.finalChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm text-panel/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg" trailingIcon>
                  Start a Project
                </Button>
                <Button href="/portfolio" size="lg" variant="secondary" trailingIcon>
                  View Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
