'use client';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useEffect } from 'react';

/**
 * Site-wide Lenis smooth scrolling. Renders nothing.
 * - Wheel only: touch keeps native momentum (syncTouch off), which is smoother and cheaper on phones.
 * - Honors prefers-reduced-motion (Lenis default) — scroll then tracks input 1:1.
 * - autoToggle pauses Lenis whenever <html> gets overflow: hidden (loading screen, mobile menu).
 * - anchors smooth-scroll in-page links and respect the CSS scroll-padding-top under the sticky navbar.
 * - Inner scroll areas opt out with data-lenis-prevent; allowNestedScroll covers any others.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      autoToggle: true,
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
