import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function TestimonialsSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="Feedback that sounds like real client work because it is written that way."
          description="Believable testimonials do more for trust than inflated praise. The emphasis here is on structure, execution quality, and the experience of working together."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <div className="surface h-full p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-ink/12 hover:bg-white/90 hover:shadow-floating sm:p-7">
              <p className="text-base leading-7 text-ink">&quot;{item.quote}&quot;</p>
              <div className="mt-8 border-t border-line/70 pt-5">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
