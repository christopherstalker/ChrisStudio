import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  Gauge,
  LayoutDashboard,
  Layers3,
  MessageSquare,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkle,

  Rocket,
  Settings2,
  ShieldCheck,
 main
  Sparkles,
  Workflow,
} from "lucide-react";

const iconMap = {
  sparkles: Sparkles,
  rocket: Rocket,
  dashboard: LayoutDashboard,
  fix-build-errors-in-vercel-deployment
  stack: Layers3,
  workflow: Workflow,
  gauge: Gauge,
  shield: ShieldCheck,
  message: MessageSquare,
  spark: Sparkle,

  workflow: Workflow,
  gauge: Gauge,
  shield: ShieldCheck,
  main
  settings: Settings2,
  bot: Bot,
  blocks: Blocks,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName] ?? Sparkles;
}
