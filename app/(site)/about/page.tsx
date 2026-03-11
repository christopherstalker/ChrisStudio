import type { Metadata } from "next";

import { AboutStory } from "@/components/sections/about-story";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { aboutPanelItems } from "@/data/page-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About ChrisStudio: product-oriented software engineering, thoughtful frontend architecture, and a calm delivery style built for serious client work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        badge="Calm, senior execution"
        title="A development studio shaped around product thinking, design discipline, and clean implementation."
        description="The work is intentionally lean: fewer layers, stronger judgment, and a standard of execution that respects both the business outcome and the future maintainability of the product."
        panelTitle="What drives the work"
        panelDescription="The core approach is simple: understand the business context, protect the product quality bar, and build in a way the next phase can actually grow from."
        panelItems={aboutPanelItems}
      />
      <AboutStory />
      <FinalCta />
    </>
  );
}
