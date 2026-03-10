"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

import { motionTransition } from "@/lib/motion";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [animatePageIn, setAnimatePageIn] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setAnimatePageIn(false);
      return;
    }

    setAnimatePageIn(true);
  }, [pathname, shouldReduceMotion]);

  return (
    <motion.div
      key={pathname}
      className={className}
      initial={false}
      animate={
        shouldReduceMotion || !animatePageIn
          ? { opacity: 1, y: 0 }
          : { opacity: [0.96, 1], y: [12, 0] }
      }
      transition={motionTransition.page}
    >
      {children}
    </motion.div>
  );
}
