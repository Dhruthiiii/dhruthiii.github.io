import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const floatAnimation = {
  y: [0, -15, 0],
  rotate: [0, 2, -2, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export const scaleOnHover = {
  scale: 1.05,
  y: -5,
  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
};

export const tapAnimation = {
  scale: 0.95
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
};