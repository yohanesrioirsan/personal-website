import type { Config } from 'tailwindcss';

/** Theme colors are CSS variables (RGB channels, see app/globals.css) so they flip with the
 *  `dark` class on <html> and still support Tailwind opacity modifiers like `bg-ink/40`. */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  // data/ is scanned because collage positions live in the content files.
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.ts'],
  theme: {
    extend: {
      colors: { ivory: token('ivory'), ink: token('ink'), muted: token('muted'), line: token('line'), surface: token('surface'), sunken: token('sunken') },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
