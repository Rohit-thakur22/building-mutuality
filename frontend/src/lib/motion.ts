export const EASE = [0.4, 0, 0.2, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const staggerParent = (stagger = 0.12) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});
