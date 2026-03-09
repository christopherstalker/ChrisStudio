import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-[-0.02em] motion-safe:transition-[transform,box-shadow,border-color,background-color,color] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-ink bg-ink text-panel motion-safe:hover:-translate-y-0.5 hover:shadow-floating hover:shadow-[0_20px_52px_rgba(18,20,23,0.18)]",
        secondary:
          "border-line bg-white/80 text-ink motion-safe:hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white/95 hover:shadow-panel",
        ghost: "border-transparent bg-transparent text-ink motion-safe:hover:-translate-y-0.5 hover:bg-white/70",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type SharedProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
  trailingIcon?: boolean;
};

type ButtonProps = SharedProps & {
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    className,
    children,
    trailingIcon = false,
    href,
    external,
    type = "button",
    disabled,
    onClick,
    target,
    rel,
  } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    const isExternal = external ?? href.startsWith("http");

    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noreferrer" : undefined)}
      >
        <span>{children}</span>
        {trailingIcon ? (
          <ArrowUpRight className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-active:translate-x-0 motion-safe:group-active:translate-y-0" />
        ) : null}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
      {trailingIcon ? (
        <ArrowUpRight className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-active:translate-x-0 motion-safe:group-active:translate-y-0" />
      ) : null}
    </button>
  );
}
