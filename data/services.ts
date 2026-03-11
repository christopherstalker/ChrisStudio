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
    slug: "web-applications",
    icon: "blocks",
    homeTitle: "Web Applications",
    title: "Web Applications",
    description:
      "Purpose-built web products for teams that need a cleaner system than no-code tools or fragile templates can offer.",
    includes: [
      "App architecture and technical planning",
      "Responsive frontend implementation",
      "Data modeling, authentication, and permissions",
    ],
    benefits: ["Durable product foundations", "Higher team velocity", "Reliable user experiences"],
    useCases: ["Custom business platforms", "Internal operations systems", "Client-facing portals"],
    deliverables: ["Production-ready web app", "Documented architecture", "Handoff and next-phase plan"],
  },
  {
    slug: "saas-platforms",
    icon: "rocket",
    homeTitle: "SaaS Platforms",
    title: "SaaS Platforms",
    description:
      "Subscription-ready SaaS products shaped around onboarding, permissions, billing surfaces, and a roadmap that can scale.",
    includes: [
      "MVP scoping and product surface definition",
      "Multi-role account flows",
      "Billing and subscription UI integration",
    ],
    benefits: ["Faster activation", "Cleaner account governance", "Roadmap-ready architecture"],
    useCases: ["B2B SaaS launches", "Existing SaaS rebuilds", "Expansion into new customer segments"],
    deliverables: ["Core SaaS application", "Account and billing flows", "Feature-ready component system"],
  },
  {
    slug: "dashboards-admin-panels",
    icon: "dashboard",
    homeTitle: "Dashboards & Admin Panels",
    title: "Dashboards & Admin Panels",
    description:
      "Operational dashboards that help teams make decisions faster instead of digging through disconnected reports.",
    includes: [
      "Dashboard information architecture",
      "Data tables, filtering, and permissions",
      "Metrics visualization and alerts",
    ],
    benefits: ["Faster decisions", "More reliable reporting", "Improved operational visibility"],
    useCases: ["Ops dashboards", "Leadership reporting portals", "Admin control centers"],
    deliverables: ["Dashboard UI system", "Query and filter patterns", "Operational reporting surfaces"],
  },
  {
    slug: "internal-tools",
    icon: "workflow",
    homeTitle: "Internal Tools",
    title: "Internal Tools",
    description:
      "Lean internal software that removes repeat manual work and gives operations teams a system they can actually trust.",
    includes: [
      "Workflow mapping and process cleanup",
      "Custom CRUD tools and internal portals",
      "Role-specific views for teams",
    ],
    benefits: ["Time saved each week", "Lower operational error rates", "Clearer ownership across teams"],
    useCases: ["Back-office automation", "Approval systems", "Cross-team request handling"],
    deliverables: ["Internal workflow app", "Admin tooling", "Operational runbook"],
  },
  {
    slug: "automation-systems",
    icon: "sparkles",
    homeTitle: "Automation Systems",
    title: "Automation Systems",
    description:
      "Connected workflow automation for teams that need dependable triggers, queueing, and status visibility.",
    includes: [
      "Trigger and queue workflow design",
      "Third-party API integration",
      "Operational status tracking",
    ],
    benefits: ["Less manual overhead", "Predictable throughput", "Fewer handoff failures"],
    useCases: ["Lead routing", "Order/workflow orchestration", "Approval and escalation paths"],
    deliverables: ["Automation portal", "Integration adapters", "Monitoring checklist"],
  },
  {
    slug: "performance-modernization",
    icon: "gauge",
    homeTitle: "Performance Modernization",
    title: "Performance Modernization",
    description:
      "Frontend performance and architecture upgrades for products that need to load faster and convert better.",
    includes: [
      "Performance profiling and bottleneck mapping",
      "Rendering strategy improvements",
      "Incremental refactor planning",
    ],
    benefits: ["Improved Core Web Vitals", "Higher conversion potential", "Lower maintenance risk"],
    useCases: ["Aging Next.js products", "High-traffic pages", "Conversion-critical funnels"],
    deliverables: ["Optimization plan", "Refactored critical surfaces", "Before/after benchmarks"],
  },
];
