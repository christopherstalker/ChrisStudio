import type { IconName } from "@/lib/icon-map";

type Service = {
  slug: string;
  icon: IconName;
  homeTitle: string;
  title: string;
  description: string;
  includes: string[];
  benefits: string[];
  useCases: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "product-discovery",
    icon: "sparkles",
    homeTitle: "Product discovery and scope shaping",
    title: "Product discovery and scope shaping",
    description: "Translate business goals into an execution-ready roadmap.",
    includes: ["Stakeholder interviews", "Feature prioritization", "Technical constraints mapping"],
    benefits: ["Fewer expensive pivots", "Clear milestone planning", "Aligned stakeholder expectations"],
    useCases: ["New product initiatives", "Stalled delivery pipelines", "Unclear MVP definition"],
    deliverables: ["Scope brief", "Milestone roadmap", "Architecture assumptions"],
  },
  {
    slug: "saas-builds",
    icon: "rocket",
    homeTitle: "SaaS application development",
    title: "SaaS application development",
    description: "Build and ship polished web apps designed for ongoing growth.",
    includes: ["Core product architecture", "Design system patterns", "Feature implementation"],
    benefits: ["Faster shipping velocity", "Higher UX trust", "Maintainable codebase"],
    useCases: ["B2B SaaS platforms", "Subscription products", "Admin-heavy products"],
    deliverables: ["Production web app", "Reusable UI primitives", "Technical handoff notes"],
  },
  {
    slug: "dashboards",
    icon: "dashboard",
    homeTitle: "Dashboards and operational portals",
    title: "Dashboards and operational portals",
    description: "Create high-signal interfaces for teams that rely on daily decisions.",
    includes: ["Information architecture", "Data visualization UX", "Role-based workflows"],
    benefits: ["Reduced operational friction", "Faster decision cycles", "Cleaner reporting"],
    useCases: ["Ops dashboards", "Analytics portals", "Internal reporting systems"],
    deliverables: ["Dashboard UI", "State management patterns", "Interaction specs"],
  },
  {
    slug: "automation",
    icon: "workflow",
    homeTitle: "Automation and workflow tooling",
    title: "Automation and workflow tooling",
    description: "Replace repetitive manual processes with durable internal software.",
    includes: ["Workflow mapping", "API integrations", "Queue/job architecture"],
    benefits: ["Time savings", "Lower error rates", "Predictable operations"],
    useCases: ["Back-office workflows", "Lead routing", "Data synchronization"],
    deliverables: ["Automation portal", "Integration adapters", "Monitoring checklist"],
  },
  {
    slug: "performance",
    icon: "gauge",
    homeTitle: "Performance and frontend modernization",
    title: "Performance and frontend modernization",
    description: "Improve speed, consistency, and maintainability in aging frontend systems.",
    includes: ["Bundle/perf audit", "Rendering strategy fixes", "Refactor planning"],
    benefits: ["Better conversion and UX", "Lower maintenance burden", "Stronger Core Web Vitals"],
    useCases: ["Legacy Next.js apps", "Bloated marketing sites", "Scaling products"],
    deliverables: ["Optimization plan", "Refactored surfaces", "Perf benchmarks"],
  },
  {
    slug: "platform-hardening",
    icon: "shield",
    homeTitle: "Production hardening and launch support",
    title: "Production hardening and launch support",
    description: "Prepare products for reliable launch and post-launch operations.",
    includes: ["Release-readiness review", "Error handling improvements", "Observability setup"],
    benefits: ["Safer releases", "Faster issue response", "Higher stability"],
    useCases: ["Imminent launches", "High-stakes releases", "Team transition periods"],
    deliverables: ["Launch runbook", "Risk register", "Post-launch action list"],
  },
];
