"use client";

import { useEffect, useState } from "react";

import { INTRO_SESSION_KEY, introTiming } from "@/lib/intro";

export function useIntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") {
      return undefined;
    }

    let animationFrame = 0;
    let exitTimer = 0;
    let hideTimer = 0;

    try {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      setShouldReduceMotion(reduceMotion);

      if (window.sessionStorage.getItem(INTRO_SESSION_KEY) === "1") {
        setShowIntro(false);
        setIsExiting(false);
        return undefined;
      }

      animationFrame = window.requestAnimationFrame(() => {
        setShowIntro(true);
      });

      window.sessionStorage.setItem(INTRO_SESSION_KEY, "1");

      const visibleDuration = reduceMotion
        ? introTiming.reducedVisibleDuration
        : introTiming.drawDuration + introTiming.holdDuration;
      const exitDuration = reduceMotion ? introTiming.reducedExitDuration : introTiming.exitDuration;

      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
      }, visibleDuration * 1000);

      hideTimer = window.setTimeout(() => {
        setShowIntro(false);
        setIsExiting(false);
      }, (visibleDuration + exitDuration) * 1000);
    } catch (error) {
      setShowIntro(false);
      setIsExiting(false);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, [mounted]);

  return {
    isExiting,
    mounted,
    shouldReduceMotion,
    showIntro,
  };
}
