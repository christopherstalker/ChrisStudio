import { services } from "@/data/services";
import { getIcon } from "@/lib/icon-map";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function ServicesPreview() {
  return (
    <Section id="services">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Services"
            title="Built for teams that need more than a pretty frontend."
            description="The work spans product strategy, UI architecture, frontend systems, and the connected backend flows that make the software useful in practice."
          />
          <div className="mt-8">
            <Button href="/services" variant="secondary" trailingIcon>
              Explore Services
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.slice(0, 6).map((service, index) => {
            const Icon = getIcon(service.icon);

            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Card className="h-full p-6 hover:-translate-y-1 hover:border-ink/15 hover:bg-white/90 hover:shadow-floating">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-6">{service.homeTitle}</CardTitle>
                  <CardDescription className="mt-3">{service.description}</CardDescription>
                  <ul className="mt-6 space-y-3">
                    {service.includes.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
