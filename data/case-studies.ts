export const caseStudies = [
  {
    slug: "atlas-reserve-analytics",
    featured: true,
    industry: "Finance Platform",
    title: "Atlas Reserve Analytics",
    summary:
      "A multi-role analytics workspace for an investment operations team that had outgrown spreadsheets and static reports.",
    challenge:
      "Analysts were building weekly reports manually and leadership had no reliable real-time view of portfolio health.",
    solution:
      "Designed a dashboard-driven web application with role-aware views, filtering, reporting exports, and a maintainable component system.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts"],
    metric: "68% faster weekly reporting",
    result:
      "Reporting time dropped dramatically and the operations team finally had one source of truth for account activity.",
  },
  {
    slug: "orbitops-admin",
    featured: false,
    industry: "B2B SaaS",
    title: "OrbitOps Admin",
    summary:
      "A premium admin panel for a SaaS platform handling onboarding, account governance, and customer support workflows.",
    challenge:
      "The team was juggling multiple tools and lacked a clear internal surface for account actions or escalations.",
    solution:
      "Built a centralized admin interface with audit logs, role-based permissions, guided workflows, and operational reporting.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    metric: "41% faster support resolution",
    result:
      "Support operations became faster and the product team gained a stable foundation for internal feature rollout.",
  },
  {
    slug: "northline-commerce-rebuild",
    featured: false,
    industry: "E-commerce",
    title: "Northline Commerce Rebuild",
    summary:
      "A performance-focused frontend rebuild for a growing commerce brand that needed speed without losing flexibility.",
    challenge:
      "The existing storefront was slow on mobile, hard to update, and underperforming during paid traffic bursts.",
    solution:
      "Reworked the frontend architecture, streamlined rendering paths, and introduced reusable commerce UI patterns.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    metric: "+23% mobile conversion rate",
    result:
      "The site loaded faster, converted better on mobile, and became easier for the internal team to maintain.",
  },
  {
    slug: "flowport-automation-portal",
    featured: false,
    industry: "Operations",
    title: "FlowPort Automation Portal",
    summary:
      "An internal workflow portal that replaced manual lead routing, approvals, and update tracking across three teams.",
    challenge:
      "Process ownership was unclear and dozens of repetitive tasks were being pushed through email and spreadsheets.",
    solution:
      "Built a workflow portal with triggers, queue views, role-aware routing, and transparent status tracking.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    metric: "12 hours saved per week",
    result:
      "Cross-team handoffs became structured, measurable, and significantly less error-prone.",
  },
];
