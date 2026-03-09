import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
  {
    variants: {
      variant: {
        neutral: "border-line bg-white/80 text-muted",
        accent: "border-accent/15 bg-accent/10 text-accent",
        dark: "border-white/10 bg-white/10 text-white/85",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

type BadgeProps = VariantProps<typeof badgeVariants> & {
  className?: string;
  children: React.ReactNode;
};

export function Badge({ className, variant, children }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}
