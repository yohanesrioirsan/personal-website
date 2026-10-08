import test from 'node:test';
import assert from 'node:assert/strict';
import { eyes, pupilOffset, smoothPupil } from '../components/eye-tracking-math.mjs';

test('pupils stay within the calibrated ellipse for viewport edges and center', () => {
  assert.deepEqual(pupilOffset(0, 0), { x: 0, y: 0 });
  for (const dx of [-10000, -100, 0, 100, 10000]) {
    for (const dy of [-10000, -100, 0, 100, 10000]) {
      const { x, y } = pupilOffset(dx, dy);
      assert.ok((x / 12) ** 2 + (y / 8) ** 2 <= 1 + Number.EPSILON * 2);
      assert.ok(Number.isFinite(x) && Number.isFinite(y));
      assert.equal(Math.sign(x), Math.sign(dx));
      assert.equal(Math.sign(y), Math.sign(dy));
    }
  }
  assert.equal(eyes.length, 2);
});

test('smoothing is consistent at 60 and 120 Hz and returns without overshooting', () => {
  const target = { x: 12, y: -8 };
  const run = frames => {
    let position = { x: 0, y: 0 };
    for (let frame = 0; frame < frames; frame++) {
      position = smoothPupil(position, target, 1000 / frames);
      assert.ok(position.x >= 0 && position.x <= 12);
      assert.ok(position.y <= 0 && position.y >= -8);
    }
    return position;
  };
  const slow = run(60), fast = run(120);
  assert.ok(Math.abs(slow.x - fast.x) < 1e-10);
  assert.ok(Math.abs(slow.y - fast.y) < 1e-10);
  const returning = smoothPupil(slow, { x: 0, y: 0 }, 16);
  assert.ok(returning.x > 0 && returning.x < slow.x);
  assert.ok(returning.y < 0 && returning.y > slow.y);
  assert.deepEqual(smoothPupil(target, target, 16), target);
});
