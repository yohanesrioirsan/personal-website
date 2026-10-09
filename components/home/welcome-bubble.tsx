'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

/** `lang` lets the browser pick the right fallback font for each script. */
const greetings = [
  { text: 'Welcome', lang: 'en' },
  { text: 'Selamat datang', lang: 'id' },
  { text: 'ようこそ', lang: 'ja' },
  { text: '欢迎', lang: 'zh-CN' },
  { text: 'Добро пожаловать', lang: 'ru' },
  { text: 'ยินดีต้อนรับ', lang: 'th' },
  { text: 'स्वागत है', lang: 'hi' },
];

/** Speech bubble beside the hero photo, cycling "Welcome" through seven languages.
 *  Decorative (aria-hidden) so the h1 still reads "Hi, I'm Yohanes". */
export function WelcomeBubble() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % greetings.length), 2200);
    return () => clearInterval(timer);
  }, []);

  const greeting = greetings[index];

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] right-0 z-10 font-sans text-base font-semibold leading-none tracking-normal md:bottom-auto md:left-[calc(100%+1rem)] md:right-auto md:top-1/2 md:-translate-y-1/2"
    >
      <motion.span
        layout={!reduced}
        transition={{ type: 'spring', stiffness: 500, damping: 38 }}
        className="relative inline-flex overflow-hidden rounded-2xl bg-ink px-4 py-2.5 text-ivory shadow-[0_10px_24px_-10px_rgba(0,0,0,0.45)]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={greeting.lang}
            lang={greeting.lang}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: reduced ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block whitespace-nowrap"
          >
            {greeting.text}
          </motion.span>
        </AnimatePresence>
      </motion.span>
      {/* Tail: points down at the photo on phones, left at it from md up. */}
      <span className="absolute -bottom-1 right-6 h-3 w-3 rotate-45 rounded-[2px] bg-ink md:-left-1 md:bottom-auto md:right-auto md:top-1/2 md:-translate-y-1/2" />
    </span>
  );
}
