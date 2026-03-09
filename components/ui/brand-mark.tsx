import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex h-full w-full items-center justify-center font-sans text-[1.35rem] font-semibold leading-none tracking-[-0.08em]",
        className,
      )}
      aria-hidden="true"
    >
      CS
    </span>
  );
}
