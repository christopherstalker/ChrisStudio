import { services } from "@/data/services";
import { getIcon } from "@/lib/icon-map";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const detailSections = [
  { key: "includes", label: "Included" },
  { key: "benefits", label: "Business benefits" },
  { key: "useCases", label: "Ideal use cases" },
  { key: "deliverables", label: "Deliverables" },
] as const;

export function ServicesGrid() {
  return (
    <Section className="pt-6">
      <div className="grid gap-6">
        {services.map((service, index) => {
          const Icon = getIcon(service.icon);

          return (
            <Reveal key={service.slug} delay={index * 0.04}>
              <Card className="overflow-hidden p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
                  <Reveal y={16}>
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="accent" className="mt-6">
                        Service
                      </Badge>
                      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-[2.15rem]">
                        {service.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-base leading-7">{service.description}</p>
                    </div>
                  </Reveal>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {detailSections.map((section, sectionIndex) => (
                      <Reveal
                        key={section.key}
                        delay={0.04 + sectionIndex * 0.04}
                        y={16}
                      >
                        <div className="surface-muted surface-muted-interactive rounded-[24px] p-5">
                          <p className="eyebrow mb-4">{section.label}</p>
                          <ul className="space-y-3">
                            {service[section.key].map((item) => (
                              <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
