import type { Metadata } from "next";

import { ContactPanel } from "@/components/sections/contact-panel";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/ui/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { contactPanelItems } from "@/data/page-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with ChrisStudio for serious inquiries about web development, SaaS products, dashboards, automation systems, or frontend modernization.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        badge="Serious inquiries only"
        title="If you have a meaningful project, send the brief."
        description="The best introductions are concise and concrete: what needs to be built, what is not working today, and what a strong outcome would look like. If the fit is right, the next step will be clear."
        panelTitle="Before you reach out"
        panelDescription="A short but thoughtful brief is enough. You do not need a perfect spec, but clarity on the business problem helps move quickly."
        panelItems={contactPanelItems}
      />

      <Section className="pt-6">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <ContactPanel />
        </div>
      </Section>
    </>
  );
}
