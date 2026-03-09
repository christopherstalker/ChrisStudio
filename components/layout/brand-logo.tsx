import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/brand-mark";

type BrandLogoProps = {
  className?: string;
  subtitle?: boolean;
  markWrapperClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function BrandLogo({
  className,
  subtitle = true,
  markWrapperClassName,
  titleClassName,
  subtitleClassName,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/90",
          markWrapperClassName,
        )}
      >
        <BrandMark className="text-ink" />
      </div>
      <div>
        <div
          className={cn(
            "text-sm font-semibold tracking-[-0.03em] text-ink",
            titleClassName,
          )}
        >
          {siteConfig.name}
        </div>
        {subtitle ? (
          <div
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.24em] text-muted",
              subtitleClassName,
            )}
          >
            Software studio
          </div>
        ) : null}
      </div>
    </div>
  );
}
