import assert from 'node:assert/strict';
import test from 'node:test';
import { LOADING_TEXTS, LOADING_TIMING, lockScroll, nextTextIndex, whenReady } from '../lib/loading-screen.ts';

/** Minimal controllable clock. */
function fakeTimers() {
  let now = 0;
  let nextId = 1;
  const pending = new Map();
  return {
    timers: {
      setTimeout: (fn, ms) => { const id = nextId++; pending.set(id, { at: now + ms, fn }); return id; },
      clearTimeout: (id) => { pending.delete(id); },
    },
    pendingCount: () => pending.size,
    async advance(ms) {
      const target = now + ms;
      for (;;) {
        const due = [...pending.entries()].filter(([, t]) => t.at <= target).sort((a, b) => a[1].at - b[1].at)[0];
        if (!due) break;
        pending.delete(due[0]);
        now = due[1].at;
        due[1].fn();
        await flush();
      }
      now = target;
      await flush();
    },
  };
}
const flush = () => new Promise((resolve) => setImmediate(resolve));
const deferred = () => { let resolve, reject; const promise = new Promise((res, rej) => { resolve = res; reject = rej; }); return { promise, resolve, reject }; };
const options = (timers) => ({ minMs: LOADING_TIMING.minMs, maxMs: LOADING_TIMING.maxMs, timers });

test('texts loop in the exact required order and wrap around', () => {
  assert.deepEqual([...LOADING_TEXTS], ['Loading', 'Memuat', '積載', '炉料']);
  const seen = [];
  let index = 0;
  for (let i = 0; i < 9; i++) { seen.push(LOADING_TEXTS[index]); index = nextTextIndex(index); }
  assert.deepEqual(seen, ['Loading', 'Memuat', '積載', '炉料', 'Loading', 'Memuat', '積載', '炉料', 'Loading']);
});

test('fast assets still wait for the minimum display time, then finish once', async () => {
  const clock = fakeTimers();
  let calls = 0;
  whenReady([Promise.resolve()], () => calls++, options(clock.timers));
  await flush();
  assert.equal(calls, 0);
  await clock.advance(LOADING_TIMING.minMs - 1);
  assert.equal(calls, 0);
  await clock.advance(1);
  assert.equal(calls, 1);
  await clock.advance(10_000);
  assert.equal(calls, 1, 'never called twice');
  assert.equal(clock.pendingCount(), 0, 'all timers cleared');
});

test('finishes as soon as slow assets settle after the minimum', async () => {
  const clock = fakeTimers();
  const avatar = deferred();
  let calls = 0;
  whenReady([avatar.promise], () => calls++, options(clock.timers));
  await clock.advance(1500);
  assert.equal(calls, 0);
  avatar.resolve();
  await flush();
  assert.equal(calls, 1);
});

test('a failing asset does not block the screen', async () => {
  const clock = fakeTimers();
  let calls = 0;
  whenReady([Promise.reject(new Error('decode failed'))], () => calls++, options(clock.timers));
  await clock.advance(LOADING_TIMING.minMs);
  assert.equal(calls, 1);
});

test('fallback: assets that never settle still finish at the maximum', async () => {
  const clock = fakeTimers();
  let calls = 0;
  whenReady([new Promise(() => {})], () => calls++, options(clock.timers));
  await clock.advance(LOADING_TIMING.maxMs - 1);
  assert.equal(calls, 0);
  await clock.advance(1);
  assert.equal(calls, 1);
  assert.equal(clock.pendingCount(), 0);
});

test('cancel (unmount) clears timers and prevents a late callback', async () => {
  const clock = fakeTimers();
  const avatar = deferred();
  let calls = 0;
  const cancel = whenReady([avatar.promise], () => calls++, options(clock.timers));
  cancel();
  assert.equal(clock.pendingCount(), 0);
  avatar.resolve();
  await clock.advance(10_000);
  assert.equal(calls, 0);
});

test('scroll lock restores the exact previous values, once', () => {
  const root = { style: { overflow: 'clip' } };
  const body = { style: { overflow: '' } };
  const unlock = lockScroll(root, body);
  assert.equal(root.style.overflow, 'hidden');
  assert.equal(body.style.overflow, 'hidden');
  unlock();
  assert.equal(root.style.overflow, 'clip');
  assert.equal(body.style.overflow, '');
  root.style.overflow = 'auto';
  unlock();
  assert.equal(root.style.overflow, 'auto', 'second call is a no-op');
});
