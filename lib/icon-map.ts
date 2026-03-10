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
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  blocks: Blocks,
  bot: Bot,
  dashboard: LayoutDashboard,
  gauge: Gauge,
  message: MessageSquare,
  rocket: Rocket,
  settings: Settings2,
  shield: ShieldCheck,
  spark: Sparkle,
  sparkles: Sparkles,
  stack: Layers3,
  workflow: Workflow,
};

export type IconName = keyof typeof iconMap;

export function getIcon(iconName: IconName): LucideIcon {
  return iconMap[iconName] ?? Sparkles;
}
