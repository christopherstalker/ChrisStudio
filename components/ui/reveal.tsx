"use client";

import { useEffect, useRef, useState } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

import { motionTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  className,
  children,
  delay = 0,
  y = 20,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [animateOnMount, setAnimateOnMount] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      setIsReady(true);
      setIsVisible(true);
      setAnimateOnMount(false);
      return undefined;
    }

    if (shouldReduceMotion) {
      setIsReady(true);
      setIsVisible(true);
      setAnimateOnMount(false);
      return undefined;
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const rect = element.getBoundingClientRect();
    const isInitiallyVisible =
      rect.top <= viewportHeight * 0.9 && rect.bottom >= viewportHeight * 0.1;

    if (isInitiallyVisible) {
      setIsReady(true);
      setIsVisible(true);
      setAnimateOnMount(true);
      return undefined;
    }

    setIsVisible(false);
    setIsReady(true);
    setAnimateOnMount(false);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(className)}
      initial={false}
      animate={
        shouldReduceMotion || !isReady
          ? { opacity: 1, y: 0 }
          : animateOnMount && isVisible
            ? { opacity: [0.88, 1], y: [Math.min(y * 0.55, 12), 0] }
            : isVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y }
      }
      transition={motionTransition.reveal(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
