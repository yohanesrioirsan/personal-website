'use client';

import { motion, useReducedMotion } from 'motion/react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Use small values (≤ 0.3) for staggering. */
  delay?: number;
};

/**
 * Fades content up once as it enters the viewport.
 * Renders in its final state without JS (initial={false}), and does nothing under reduced motion.
 * Motion writes `transform` on this element, so put Tailwind rotations on a child, not on Reveal itself.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.6, 1], y: [16, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
