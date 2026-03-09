"use client";

import { motion } from "framer-motion";

import { CatLineArt } from "@/components/intro/CatLineArt";
import { useIntroAnimation } from "@/hooks/useIntroAnimation";
import { introTiming } from "@/lib/intro";

export function IntroOverlay() {
  const { isExiting, mounted, shouldReduceMotion, showIntro } = useIntroAnimation();

  if (!mounted || !showIntro) {
    return null;
  }

  const exitDuration = shouldReduceMotion ? introTiming.reducedExitDuration : introTiming.exitDuration;

  return (
    <motion.div
      data-intro-overlay="true"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[120] flex select-none items-center justify-center overflow-hidden bg-canvas px-6"
      initial={{ opacity: 0 }}
      animate={
        isExiting
          ? { opacity: 0 }
          : { opacity: 1 }
      }
      transition={{
        duration: exitDuration,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(15, 107, 115, 0.085), transparent 28%), radial-gradient(circle at top right, rgba(180, 125, 74, 0.1), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.46) 0%, rgba(255, 255, 255, 0.06) 36%)",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-40 w-40 rounded-full bg-accent/8 blur-3xl sm:h-52 sm:w-52" />
        <div className="absolute bottom-[12%] right-[8%] h-44 w-44 rounded-full bg-warm/8 blur-3xl sm:h-56 sm:w-56" />
      </div>

      <motion.div
        className="relative flex w-full max-w-[640px] items-center justify-center will-change-transform"
        initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.94, scale: 1.015, y: 8 }}
        animate={
          isExiting
            ? {
                opacity: 0,
                scale: 0.992,
                y: -12,
                filter: "blur(7px)",
              }
            : {
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }
        }
        transition={{
          duration: shouldReduceMotion ? exitDuration : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="absolute h-[min(78vw,30rem)] w-[min(78vw,30rem)] rounded-full bg-white/50 blur-3xl"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0.78, scale: 0.9 }}
          animate={
            isExiting
              ? { opacity: 0, scale: 1.04 }
              : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: shouldReduceMotion ? exitDuration : 0.62,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center sm:max-w-[470px]">
          <motion.div
            className="absolute inset-[14%] rounded-[46%] border border-white/55"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            animate={
              isExiting
                ? { opacity: 0, scale: 1.02 }
                : { opacity: 1, scale: 1 }
            }
            transition={{
              delay: shouldReduceMotion ? 0 : 0.14,
              duration: shouldReduceMotion ? exitDuration : 0.76,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <div className="absolute bottom-[17%] h-px w-24 bg-gradient-to-r from-transparent via-line/80 to-transparent" />
          <div className="absolute top-[18%] h-px w-12 bg-gradient-to-r from-transparent via-warm/45 to-transparent" />

          <CatLineArt
            className="relative z-10 w-[88%] text-ink sm:w-[86%]"
            reducedMotion={shouldReduceMotion}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
