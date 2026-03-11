import type { IconName } from "@/lib/icon-map";

export const valuePoints: Array<{ icon: IconName; title: string; description: string }> = [
  {
    icon: "stack",
    title: "Clean architecture from the start",
    description:
      "The foundation is set up to support future work instead of forcing a rewrite after the first successful release.",
  },
  {
    icon: "shield",
    title: "Business-minded technical decisions",
    description:
      "Tradeoffs are explained in terms of speed, leverage, risk, and maintainability rather than vague engineering preferences.",
  },
  {
    icon: "message",
    title: "Fast, direct communication",
    description:
      "You get clarity on progress, blockers, and next steps without unnecessary layers or overproduced status theater.",
  },
  {
    icon: "spark",
    title: "Attention to UX and performance",
    description:
      "Interfaces are tuned for trust, responsiveness, and ease of use because those details shape how the product is perceived.",
  },
];

export const servicePanelItems = [
  { label: "Engagement model", value: "Discovery, architecture, interface direction, build, launch" },
  { label: "Best fit", value: "Teams that need polished execution and a maintainable codebase" },
  { label: "Typical scope", value: "New builds, focused rebuilds, product expansion, modernization" },
];

export const portfolioPanelItems = [
  { label: "Project types", value: "SaaS, dashboards, internal tools, product sites, automation" },
  { label: "What is shown", value: "Challenge, solution, stack, and measurable result" },
  { label: "Delivery standard", value: "Premium UI, clean architecture, practical business focus" },
];

export const aboutPanelItems = [
  { label: "Positioning", value: "Freelance flexibility with product-team standards" },
  { label: "Focus", value: "Performance, UX clarity, maintainable systems, direct collaboration" },
  { label: "Best clients", value: "Founders and teams who care how the work is built" },
];

export const contactPanelItems = [
  { label: "Response window", value: "Usually within one business day" },
  { label: "Best inquiries", value: "Clear scope, meaningful business problem, real urgency" },
  { label: "Conversation style", value: "Direct, practical, and focused on fit" },
];
