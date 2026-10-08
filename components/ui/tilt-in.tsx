'use client';

import { motion, useReducedMotion } from 'motion/react';

/** Rotates a card from `from` to `to` degrees on load. Static at `to` under reduced motion. */
export function TiltIn({ children, className = '', from = 1, to = 6 }: { children: React.ReactNode; className?: string; from?: number; to?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ rotate: reduced ? to : from }}
      animate={{ rotate: to }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
