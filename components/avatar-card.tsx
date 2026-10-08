import { EyeTrackingAvatar } from '@/components/eye-tracking-avatar';
import { CurvedArrow, Rays } from '@/components/ui/doodles';
import { TiltIn } from '@/components/ui/tilt-in';

/** Large black rounded card holding the eye-tracking avatar, tilted ~6°, with hand-drawn notes. */
export function AvatarCard({ words }: { words: string[] }) {
  return (
    <div className="relative mx-auto w-full max-w-[460px] px-8 py-10 md:pr-14">
      <TiltIn from={1} to={6} className="overflow-hidden rounded-[36px] px-1 pb-2 pt-10">
        {/* Counter-rotate so the avatar itself stays upright inside the tilted card. */}
        <div className="-rotate-[6deg] scale-[1.06]">
          <EyeTrackingAvatar />
        </div>
      </TiltIn>
      <Rays className="absolute left-0 top-6 h-14 w-11 -rotate-12" />
      <div aria-hidden="true" className="absolute -right-1 bottom-6 rotate-[8deg] font-hand text-2xl leading-[1.05] md:-right-6 md:text-[28px]">
        <CurvedArrow direction="up" className="-ml-1 mb-1 h-10 w-10" />
        {words.map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
