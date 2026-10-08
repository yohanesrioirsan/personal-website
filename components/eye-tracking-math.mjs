export const eyes = [
  { x: 594, y: 591, rx: 39, ry: 38 },
  { x: 819, y: 600, rx: 40, ry: 39 },
];

export function pupilOffset(dx, dy, radiusX = 12, radiusY = 8) {
  const distance = Math.hypot(dx, dy);
  if (!distance) return { x: 0, y: 0 };
  const strength = Math.min(distance / 160, 1);
  return { x: dx / distance * radiusX * strength, y: dy / distance * radiusY * strength };
}

export function smoothPupil(current, target, elapsedMs) {
  const blend = 1 - Math.exp(-Math.max(0, elapsedMs) / 90);
  return {
    x: current.x + (target.x - current.x) * blend,
    y: current.y + (target.y - current.y) * blend,
  };
}
