import type { Metadata } from "next";

import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { portfolioPanelItems } from "@/data/page-content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Portfolio and case studies",
  description:
    "Selected case studies across SaaS, dashboards, e-commerce rebuilds, automation portals, internal CRM tools, and startup product sites.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        badge="Selected client work"
        title="Case studies shaped around the real problem, the build approach, and the outcome."
        description="The goal is not to show a gallery of screens. It is to show how strong product and frontend execution changed the quality of the business asset being built."
        panelTitle="How to read the work"
        panelDescription="These examples are intentionally outcome-oriented. The useful signal is in the challenge, the implementation approach, and what improved afterward."
        panelItems={portfolioPanelItems}
      />
      <CaseStudiesGrid />
      <FinalCta />
    </>
  );
}
