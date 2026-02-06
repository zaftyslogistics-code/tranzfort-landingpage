import type { Variants } from "framer-motion";

// Shared easing curves
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
  snappy: [0.25, 0.46, 0.45, 0.94] as const,
};

// Stagger container — wrap children that use fadeUp/fadeLeft/etc.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fade up — most common reveal
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// Fade down
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.smooth },
  },
};

// Fade left
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// Fade right
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// Scale in — for cards, icons
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.smooth },
  },
};

// Blur in — for hero text
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

// Slide up from bottom — for modals, toasts
export const slideUp: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.3 },
  },
};

// Page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25 },
  },
};

// Hover helpers (use with whileHover on motion elements)
export const hoverLift = {
  y: -4,
  transition: { duration: 0.25, ease: easings.smooth },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.25, ease: easings.smooth },
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(0,240,255,0.15)",
  transition: { duration: 0.3 },
};

// Tap helper
export const tapShrink = { scale: 0.97 };

// Glow-in — for neon elements
export const glowIn: Variants = {
  hidden: { opacity: 0, filter: "blur(20px) brightness(2)" },
  visible: {
    opacity: 1,
    filter: "blur(0px) brightness(1)",
    transition: { duration: 0.8, ease: easings.smooth },
  },
};

// Counter reveal — for stat numbers
export const counterReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easings.smooth },
  },
};
