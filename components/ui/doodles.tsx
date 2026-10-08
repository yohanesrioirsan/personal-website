/** Small hand-drawn SVG doodles. All decorative. */

export function Rays({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 50 65" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M28 30 15 12M36 27 34 7M20 39 4 32" />
    </svg>
  );
}

/** Curved arrow. `direction` is where the arrowhead points. */
export function CurvedArrow({ direction = 'up', className = '' }: { direction?: 'up' | 'down' | 'left' | 'right'; className?: string }) {
  const rotate = { up: '', down: 'rotate-180', left: '-rotate-90', right: 'rotate-90' }[direction];
  return (
    <svg aria-hidden="true" className={`${rotate} ${className}`} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 46C40 28 32 14 14 8m0 0 4 10M14 8l11-1" />
    </svg>
  );
}
