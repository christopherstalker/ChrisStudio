const ease = [0.22, 1, 0.36, 1] as const;

export const motionTransition = {
  navPill: {
    type: "spring",
    stiffness: 480,
    damping: 36,
    mass: 0.7,
  },
  menu: {
    duration: 0.28,
    ease,
  },
  page: {
    duration: 0.5,
    ease,
  },
  reveal: (delay = 0) => ({
    delay,
    duration: 0.55,
    ease,
  }),
};
