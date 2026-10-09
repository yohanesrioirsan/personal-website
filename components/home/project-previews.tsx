import { Cat, Gamepad2, Music, Volume2 } from "lucide-react";

/** Illustrative mock of the faceitobs stream overlay (not a screenshot). */
export function FaceitPreview({
  className = "mt-8 h-44",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] [background-image:linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [background-size:28px_28px] ${className}`}
    >
      <div className="absolute bottom-6 left-6 w-[min(270px,80%)] rounded-xl border border-white/10 bg-[#111111]/95 p-4 text-ivory">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-3 w-4 rounded-[3px] bg-gradient-to-b from-[#E6382E] from-50% to-white to-50%" />
          hadezje
        </p>
        <div className="mt-3 flex items-end justify-between gap-4">
          {[
            ["2450", "ELO"],
            ["1.24", "K/D"],
            ["54%", "HS"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-base font-bold leading-none">{value}</p>
              <p className="mt-1 text-[10px] text-[#9A978F]">{label}</p>
            </div>
          ))}
          <svg viewBox="0 0 64 28" className="h-7 w-16" fill="none">
            <path
              d="M2 24 14 18l8 3 10-9 8 4 10-10 10 4"
              stroke="#FF5500"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 24 14 18l8 3 10-9 8 4 10-10 10 4V28H2Z"
              fill="#FF5500"
              opacity="0.18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const keys = [
  { content: "W", dark: false, tilt: "-rotate-6" },
  {
    content: <Cat size={20} strokeWidth={2} className="text-[#F5C542]" />,
    dark: true,
    tilt: "rotate-3 -translate-y-2",
  },
  {
    content: <Volume2 size={18} strokeWidth={2.2} />,
    dark: false,
    tilt: "-rotate-2 translate-y-1",
  },
  {
    content: <Music size={18} strokeWidth={2.2} />,
    dark: false,
    tilt: "rotate-6 -translate-y-1",
  },
  {
    content: <Gamepad2 size={18} strokeWidth={2.2} />,
    dark: false,
    tilt: "-rotate-3",
  },
];

/** Illustrative keycaps for boardsfx (not a screenshot). */
export function BoardsfxPreview({
  className = "mt-8 h-44",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-2.5 rounded-2xl bg-sunken px-4 sm:gap-4 ${className}`}
    >
      {keys.map((key, index) => (
        <span
          key={index}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-semibold text-ink shadow-[0_5px_0_#00000014] sm:h-14 sm:w-14 ${key.tilt} ${
            key.dark ? "bg-ink text-ivory" : "border border-line bg-surface"
          } ${index > 3 ? "hidden sm:flex" : ""}`}
        >
          {key.content}
        </span>
      ))}
    </div>
  );
}

/** Illustrations used when a project has no screenshot yet, keyed by slug. */
export const illustrativePreviews: Record<
  string,
  (props: { className?: string }) => React.ReactNode
> = {
  faceitobs: FaceitPreview,
  boardsfx: BoardsfxPreview,
};
