"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LOADING_TEXTS, LOADING_TIMING, lockScroll, nextTextIndex, whenReady } from "@/lib/loading-screen";

const AVATAR = "/assets/emoji.webp"; // 1382 × 1138, same asset as the hero avatar
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-viewport loading overlay for the initial page load.
 *
 * - Server-rendered visible (no hydration mismatch: first render is identical on server and client,
 *   all changes happen in effects), so it covers the page from the first paint.
 * - Leaves when fonts + avatar are ready (min 600 ms, max 3.5 s), then fades out; scroll is restored
 *   only after the exit animation completes and the overlay is unmounted.
 * - Lives in the root layout, so client-side navigation never shows it again.
 * - Without JavaScript it is hidden by <noscript>; if hydration ever fails, a CSS failsafe hides it.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [avatarShown, setAvatarShown] = useState(false);
  // `useReducedMotion` can differ between the server and the first client render, so only use it
  // after mount; until then the markup is identical everywhere.
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();
  const reduced = mounted && !!prefersReduced;
  const avatarRef = useRef<HTMLImageElement>(null);
  const unlockRef = useRef<(() => void) | null>(null);

  // Lock scroll while mounted; restore on exit (or on unmount as a safety net).
  useEffect(() => {
    setMounted(true);
    unlockRef.current = lockScroll(document.documentElement, document.body);
    return () => unlockRef.current?.();
  }, []);

  // Decide when to leave.
  useEffect(() => {
    const img = avatarRef.current;
    let avatarReady: Promise<unknown>;
    if (!img) avatarReady = Promise.resolve();
    else if (img.complete) {
      // Already finished before hydration: loaded (decode) or failed (don't wait for an event that already fired).
      avatarReady = img.naturalWidth > 0 ? Promise.resolve(img.decode?.()) : Promise.reject(new Error("avatar failed"));
    } else {
      avatarReady = new Promise<void>((resolve, reject) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => reject(new Error("avatar failed")), { once: true });
      }).then(() => img.decode?.());
    }
    let active = true;
    avatarReady.then(() => active && setAvatarShown(true), () => {});
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const cancel = whenReady([avatarReady, fontsReady], () => setVisible(false), {
      minMs: LOADING_TIMING.minMs,
      maxMs: LOADING_TIMING.maxMs,
      timers: { setTimeout: (fn, ms) => window.setTimeout(fn, ms), clearTimeout: (id) => window.clearTimeout(id as number) },
    });
    return () => {
      active = false;
      cancel();
    };
  }, []);

  // Text loop, only while visible.
  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => setTextIndex((i) => nextTextIndex(i)), LOADING_TIMING.textIntervalMs);
    return () => window.clearInterval(id);
  }, [visible]);

  return (
    <>
      <noscript>
        <style>{"[data-loading-screen]{display:none!important}"}</style>
      </noscript>
      <AnimatePresence onExitComplete={() => unlockRef.current?.()}>
        {visible && (
          <motion.div
            key="loading-screen"
            data-loading-screen=""
            role="status"
            aria-live="polite"
            aria-label="Loading"
            initial={false}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.25 : 0.55, ease: EASE, delay: reduced ? 0 : 0.15 }}
            className="loading-failsafe fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ivory px-6 text-ink"
          >
            {/* Exit: avatar + bubble lift and shrink slightly while the overlay fades. */}
            <motion.div
              initial={false}
              exit={reduced ? { opacity: 0 } : { scale: 0.92, y: -14, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="relative w-[min(58vw,280px)]"
            >
              {/* Gentle float (avatar and bubble move together, so the bubble stays attached). */}
              <motion.div
                animate={mounted && !reduced ? { y: [0, -10, 0] } : undefined}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Soft placeholder in the avatar's reserved box while the image is still loading. */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-[20%] bottom-[4%] top-[6%] rounded-[45%_45%_28%_28%] bg-sunken transition-opacity duration-300 ${
                    avatarShown ? "opacity-0" : "opacity-100 motion-safe:animate-pulse"
                  }`}
                />
                {/* Plain <img> so we can await decode(); `images.unoptimized` is on, so next/image would add nothing. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={avatarRef}
                  src={AVATAR}
                  alt=""
                  width={1382}
                  height={1138}
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                  className="relative h-auto w-full select-none"
                />
                <ChatBubble text={LOADING_TEXTS[textIndex]} reduced={reduced} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Bubble anchored to the avatar's top-right. Its size is set by an invisible copy of every text
 * stacked in one grid cell, so the bubble is always as wide as the longest text and never resizes.
 */
function ChatBubble({ text, reduced }: { text: string; reduced: boolean }) {
  return (
    <div
      aria-hidden="true"
      data-loading-bubble=""
      className="absolute bottom-[80%] left-[66%] rounded-2xl rounded-bl-md bg-ink px-4 py-2.5 text-sm font-semibold tracking-[-0.01em] text-ivory sm:text-base"
    >
      <div className="relative grid overflow-hidden">
        {LOADING_TEXTS.map((t) => (
          <span key={t} className="invisible col-start-1 row-start-1 whitespace-nowrap">
            {t}…
          </span>
        ))}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="col-start-1 row-start-1 whitespace-nowrap text-center"
          >
            {text}…
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Tail pointing down-left toward the avatar. */}
      <span className="absolute -bottom-1.5 left-2 h-3 w-3 rotate-45 rounded-[2px] bg-ink" />
    </div>
  );
}
