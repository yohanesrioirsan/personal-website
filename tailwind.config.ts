import type { Config } from 'tailwindcss';

export default {
  // data/ is scanned because collage positions live in the content files.
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.ts'],
  theme: {
    extend: {
      colors: { ivory: '#F8F7F3', ink: '#111111', muted: '#68665F', line: '#E8E6E0', surface: '#FFFFFF' },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
