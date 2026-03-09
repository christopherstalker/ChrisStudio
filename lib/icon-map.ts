import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  Gauge,
  LayoutDashboard,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const iconMap = {
  sparkles: Sparkles,
  rocket: Rocket,
  dashboard: LayoutDashboard,
  workflow: Workflow,
  gauge: Gauge,
  shield: ShieldCheck,
  settings: Settings2,
  bot: Bot,
  blocks: Blocks,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName] ?? Sparkles;
}
