import {
  siDiscord,
  siDocker,
  siGit,
  siGithub,
  siInstagram,
  siLaravel,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siTailwindcss,
  siThreads,
  siTypescript,
  siX,
  type SimpleIcon,
} from 'simple-icons';
import type { SocialIcon, TechIcon } from '@/data/content';

const icons: Record<Exclude<SocialIcon | TechIcon, 'linkedin'>, SimpleIcon> = {
  github: siGithub,
  instagram: siInstagram,
  threads: siThreads,
  discord: siDiscord,
  x: siX,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  nodejs: siNodedotjs,
  tailwind: siTailwindcss,
  postgresql: siPostgresql,
  docker: siDocker,
  php: siPhp,
  laravel: siLaravel,
  git: siGit,
};

/** simple-icons removed LinkedIn at LinkedIn's request, so its glyph is kept here. */
const linkedin = {
  hex: '0A66C2',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

const isNearBlack = (hex: string) => {
  const value = Number.parseInt(hex, 16);
  return ((value >> 16) & 255) + ((value >> 8) & 255) + (value & 255) < 120;
};

/** Decorative brand glyph. Always pair it with a visible or aria label on the parent. */
export function BrandIcon({ name, colored = false, className = 'h-6 w-6' }: { name: SocialIcon | TechIcon; colored?: boolean; className?: string }) {
  const icon = name === 'linkedin' ? linkedin : icons[name];
  // Near-black brand colors (Next.js, GitHub, X…) follow the text color so they stay visible in dark mode.
  const fill = colored && !isNearBlack(icon.hex) ? `#${icon.hex}` : 'currentColor';
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden="true" focusable="false">
      <path d={icon.path} />
    </svg>
  );
}
