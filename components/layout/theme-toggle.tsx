'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'theme';
const THEME_COLORS = { light: '#F8F7F3', dark: '#121211' };

/** Runs inline in <head> before first paint so a saved dark preference never flashes light.
 *  Light is the default; only an explicit "dark" choice switches it. */
export const themeInitScript = `try{if(localStorage.getItem('${STORAGE_KEY}')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
};
const isDark = () => document.documentElement.classList.contains('dark');

/** Live dark-mode flag for client components. False during SSR/hydration (light is the default). */
export function useIsDark() {
  return useSyncExternalStore(subscribe, isDark, () => false);
}

/** Sun/moon button that flips the `dark` class on <html> and remembers the choice. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const dark = useIsDark();

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? THEME_COLORS.dark : THEME_COLORS.light);
  }, [dark]);

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !isDark();
    const apply = () => {
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      } catch {}
    };

    // The new theme grows out of the button as a circle (View Transitions API). Unsupported
    // browsers and reduced-motion users get an instant switch.
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply();
      return;
    }
    const button = event.currentTarget.getBoundingClientRect();
    const x = button.left + button.width / 2;
    const y = button.top + button.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Dark mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`grid h-11 w-11 place-items-center rounded-full border border-line bg-ivory text-ink transition-colors hover:border-muted/50 ${className}`}
    >
      {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
