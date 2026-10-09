/** Keycap logo: a dark key with a lighter, dished top face and the legend "y" in the bottom-left corner,
 *  like a modifier key. Colors are theme tokens, so it flips to a light key in dark mode.
 *  The top face presses down when a parent `.group` is hovered. Decorative; label the parent link. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-block h-9 w-9 shrink-0 rounded-[10px] bg-ink shadow-[0_1px_2px_rgb(0_0_0/0.18)] ${className}`}
    >
      <span className="absolute inset-x-[3px] bottom-[6px] top-[3px] rounded-[7px] bg-gradient-to-b from-ivory/[0.16] to-ivory/[0.05] ring-1 ring-inset ring-ivory/10 transition-transform duration-150 ease-out motion-safe:group-hover:translate-y-[2px] motion-safe:group-active:translate-y-[3px]">
        <span className="absolute bottom-[5px] left-[6px] text-[13px] font-bold leading-none text-ivory">y</span>
      </span>
    </span>
  );
}
