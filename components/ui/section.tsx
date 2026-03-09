import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-space", className)}>
      <div className={cn("container-shell", containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-[3.4rem] lg:leading-[1.02]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
