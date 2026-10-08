/**
 * Loading-screen logic without React or DOM globals, so it can be unit tested (tests/loading-screen.test.mjs).
 */

/** Shown in this exact order, then repeated. */
export const LOADING_TEXTS = ["Loading", "Memuat", "積載", "炉料"] as const;

export const LOADING_TIMING = {
  /** Never flash the screen for less than this. */
  minMs: 600,
  /** Hard cap: the screen always starts leaving by this point, even if assets never settle. */
  maxMs: 3500,
  /** How long each text stays in the bubble (the fade/slide itself takes 0.3 s of this). */
  textIntervalMs: 500,
} as const;

export function nextTextIndex(index: number, length: number = LOADING_TEXTS.length): number {
  return (index + 1) % length;
}

type Timers = {
  setTimeout: (callback: () => void, ms: number) => unknown;
  clearTimeout: (id: unknown) => void;
};

/**
 * Calls `onReady` once, when every task has settled (resolved OR rejected) and at least `minMs`
 * have passed, or at `maxMs` at the latest. Returns a cancel function that clears all timers
 * and guarantees `onReady` is not called afterwards (e.g. on unmount).
 */
export function whenReady(
  tasks: Promise<unknown>[],
  onReady: () => void,
  { minMs, maxMs, timers }: { minMs: number; maxMs: number; timers: Timers },
): () => void {
  let done = false;
  let minElapsed = false;
  let tasksSettled = false;

  const finish = () => {
    if (done) return;
    done = true;
    timers.clearTimeout(minTimer);
    timers.clearTimeout(maxTimer);
    onReady();
  };
  const check = () => minElapsed && tasksSettled && finish();

  const minTimer = timers.setTimeout(() => {
    minElapsed = true;
    check();
  }, minMs);
  const maxTimer = timers.setTimeout(finish, maxMs);

  Promise.allSettled(tasks).then(() => {
    tasksSettled = true;
    check();
  });

  return () => {
    done = true;
    timers.clearTimeout(minTimer);
    timers.clearTimeout(maxTimer);
  };
}

type StyleTarget = { style: { overflow: string } };

/** Locks page scroll and returns a function that restores the exact previous inline values. */
export function lockScroll(root: StyleTarget, body: StyleTarget): () => void {
  const previous = [root.style.overflow, body.style.overflow];
  root.style.overflow = "hidden";
  body.style.overflow = "hidden";
  let restored = false;
  return () => {
    if (restored) return;
    restored = true;
    root.style.overflow = previous[0];
    body.style.overflow = previous[1];
  };
}
