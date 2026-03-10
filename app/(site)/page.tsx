import type { Metadata } from "next";

import { FeaturedWork } from "@/components/sections/featured-work";
import { FinalCta } from "@/components/sections/final-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesPreview } from "@/components/sections/services-preview";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ValuePoints } from "@/components/sections/value-points";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Premium software design and development",
  description:
    "ChrisStudio builds polished web applications, SaaS products, dashboards, automation systems, and high-conversion websites for serious businesses.",
  path: "",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedWork />
      <ProcessSection />
      <ValuePoints />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
