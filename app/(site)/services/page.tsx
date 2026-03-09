import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Custom web development, SaaS product work, dashboards, internal tools, API integrations, automation systems, performance optimization, and frontend modernization.",
  path: "/services",
});

const servicePanelItems = [
  { label: "Engagement model", value: "Discovery, architecture, interface direction, build, launch" },
  { label: "Best fit", value: "Teams that need polished execution and a maintainable codebase" },
  { label: "Typical scope", value: "New builds, focused rebuilds, product expansion, modernization" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        badge="Product-grade delivery"
        title="Services designed to solve business problems, not pad a scope doc."
        description="Each engagement is shaped around a concrete outcome: launching a product, improving a critical workflow, modernizing a weak frontend, or turning a messy process into reliable software."
        panelTitle="How the work is structured"
        panelDescription="The best projects balance product judgment, frontend rigor, and enough technical planning that the build remains easy to extend after launch."
        panelItems={servicePanelItems}
      />
      <ServicesGrid />
      <FinalCta />
    </>
  );
}
