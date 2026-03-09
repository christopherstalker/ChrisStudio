import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const fitChecklist = [
  "Projects where product quality matters to revenue, trust, or operations",
  "Teams that want clarity on scope and tradeoffs before code starts",
  "Businesses ready to invest in a maintainable foundation instead of shortcuts",
];

export function ContactPanel() {
  return (
      <div className="space-y-5">
        <Reveal delay={0.08}>
          <Card className="p-6 sm:p-8">
            <Reveal y={16}>
              <p className="eyebrow mb-4">Best fit</p>
            </Reveal>
            <Reveal delay={0.04} y={16}>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                The strongest projects usually start with a clear problem and enough ambition to solve it properly.
              </h2>
            </Reveal>
            <Reveal delay={0.08} y={16}>
              <ul className="mt-6 space-y-3">
                {fitChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Card>
        </Reveal>

        <Reveal delay={0.14}>
          <Card className="p-6 sm:p-8">
            <Reveal y={16}>
              <p className="eyebrow mb-4">Alternate contact</p>
            </Reveal>
            <div className="space-y-4">
              <Reveal delay={0.04} y={16}>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block text-sm text-muted hover:text-ink"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.08} y={16}>
                <div>
                  <p className="text-sm font-semibold text-ink">Location</p>
                  <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
                </div>
              </Reveal>

              <Reveal delay={0.12} y={16}>
                <div>
                  <p className="text-sm font-semibold text-ink">Social</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {siteConfig.socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-muted-interactive rounded-full border border-line bg-white/80 px-4 py-2 text-sm text-muted hover:text-ink"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Card>
        </Reveal>
      </div>
  );
}
