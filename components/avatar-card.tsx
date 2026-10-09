'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useEffect, useId, useRef, useState } from 'react';
import { EyeTrackingAvatar } from '@/components/eye-tracking-avatar';
import { CurvedArrow, Rays } from '@/components/ui/doodles';
import { TiltIn } from '@/components/ui/tilt-in';
import { EditorBubble } from '@/components/workspace/editor-bubble';
import { SpotifyBubble } from '@/components/workspace/spotify-bubble';

// three.js is heavy, so the lanyard ships in its own chunk and only loads once it drops.
const Lanyard = dynamic(() => import('@/components/ui/lanyard'), { ssr: false });

/** Large black rounded card holding the eye-tracking avatar, tilted ~6°, with hand-drawn notes.
 *  Clicking the avatar pops up "what I'm doing while working" bubbles: Spotify and a code editor.
 *  With `lanyard`, an ID badge drops from the bottom of the avatar on the first scroll. */
export function AvatarCard({ words, lanyard = false }: { words: string[]; lanyard?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const workspaceId = useId();

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  const pop = (rotate: number, delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, scale: 0.3, rotate: 0 },
    animate: { opacity: 1, scale: 1, rotate, transition: reduced ? { duration: 0.15 } : { type: 'spring' as const, stiffness: 420, damping: 22, delay } },
    exit: reduced ? { opacity: 0 } : { opacity: 0, scale: 0.4, transition: { duration: 0.15 } },
  });

  return (
    <div ref={root} className="group relative mx-auto w-full max-w-[460px] px-8 py-10 md:pr-14">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={workspaceId}
        aria-label={open ? 'Hide what I’m doing while working' : 'Show what I’m doing while working'}
        className="pointer-events-none relative z-30 block w-full rounded-[36px] text-left"
      >
        <TiltIn from={1} to={6} className="overflow-hidden rounded-[36px] px-1 pb-2 pt-10">
          {/* Counter-rotate so the avatar itself stays upright inside the tilted card.
              Rotate/scale go through motion (not Tailwind classes) because whileTap writes an inline
              transform that would otherwise wipe the counter-rotation and expose the lanyard's top end.
              The clip-path traces the avatar's silhouette (verified to contain every opaque pixel of
              emoji.webp) so its transparent corners let clicks through to the bubbles behind it. */}
          <motion.div className="pointer-events-auto cursor-pointer" style={{ clipPath: avatarSilhouette, rotate: -6, scale: 1.06 }} whileTap={reduced ? undefined : { scale: 1.02 }}>
            <EyeTrackingAvatar />
          </motion.div>
        </TiltIn>
      </button>
      <Rays className="absolute left-0 top-6 h-14 w-11 -rotate-12" />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-14 top-2 -rotate-6 font-hand text-xl text-muted transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
      >
        psst, click me
      </span>
      <div aria-hidden="true" className="absolute -right-1 bottom-6 rotate-[8deg] font-hand text-2xl leading-[1.05] md:-right-6 md:text-[28px]">
        <CurvedArrow direction="up" className="-ml-1 mb-1 h-10 w-10" />
        {words.map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </div>
      <div id={workspaceId} role="region" className="contents" aria-label="What I’m doing while working">
        <AnimatePresence>
          {open && (
            <motion.div key="spotify" {...pop(-4, 0)} className="absolute -left-2 -top-10 z-0 w-[220px] origin-bottom-right md:-left-10 md:-top-8">
              <SpotifyBubble />
              <BubbleTail className="-bottom-1.5 right-10" />
            </motion.div>
          )}
          {open && (
            <motion.div key="editor" {...pop(3, 0.08)} className="absolute -bottom-32 -right-2 z-0 w-[250px] origin-top-left md:-right-10 md:bottom-auto md:top-10 md:origin-bottom-left">
              <BubbleTail className="-top-1.5 left-12 bg-[#141417] md:hidden" />
              <EditorBubble />
              <BubbleTail className="-bottom-1.5 left-10 bg-[#1b1b1f] max-md:hidden" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {lanyard && <DroppingLanyard />}
    </div>
  );
}

/** Badge hanging from just behind the laptop. It mounts (and plays its drop-in) only after the user
 *  scrolls with the avatar's bottom on screen. It overlays the next section but ignores the pointer
 *  except over the card itself, and stays under the avatar (z-30) so the strap comes from behind the laptop. */
function DroppingLanyard() {
  const frame = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLDivElement>(null);
  const [dropped, setDropped] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const check = () => {
      const top = frame.current?.getBoundingClientRect().top;
      if (top === undefined || top >= window.innerHeight) return;
      setDropped(true);
      window.removeEventListener('scroll', check);
    };
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <div ref={frame} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[calc(100%-3.5rem)] z-20 h-[520px] w-[min(1000px,100vw)] -translate-x-1/2 md:left-[calc(50%-12px)]">
      {/* Blurred caption painted under the canvas, split around the swinging card: "It's me," on the
          left (upper half), the name on the right, dropped toward the card's bottom. Each side starts 6px
          outside the card's edge so the words stay whole at rest; the card still swings over them. Position and the live card size (--card-w/--card-h) are written straight
          to the DOM every frame instead of going through state. */}
      <div ref={caption} className="absolute left-0 top-0 will-change-transform">
        <div className={`text-ink blur-[2.5px] transition-[opacity,scale] duration-500 ease-out ${hovered ? 'scale-100 opacity-80' : 'scale-90 opacity-0'}`}>
          <span className="absolute right-[calc(var(--card-w)/2+6px)] top-[calc(var(--card-h)*-0.2)] -translate-y-1/2 whitespace-nowrap font-hand text-[clamp(1.6rem,4vw,2.75rem)] leading-none">It’s me,</span>
          <span className="absolute left-[calc(var(--card-w)/2+6px)] top-[calc(var(--card-h)*0.3)] -translate-y-1/2 whitespace-nowrap text-[clamp(1.5rem,4.2vw,3.25rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">
            Yohanes
            <br />
            Rio Irsan
          </span>
        </div>
      </div>
      {dropped && (
        <Lanyard
          frontImage="/assets/lanyard.webp"
          size={0.45}
          className="pointer-events-none"
          onHoverChange={setHovered}
          onCardMove={(x, y, width, height) => {
            const el = caption.current;
            if (!el) return;
            el.style.transform = `translate(${x}px, ${y}px)`;
            el.style.setProperty('--card-w', `${width}px`);
            el.style.setProperty('--card-h', `${height}px`);
          }}
        />
      )}
    </div>
  );
}

const avatarSilhouette = 'polygon(21% 29%, 23.9% 14.9%, 34.7% 5.3%, 50.7% 2.6%, 68.7% 7.9%, 78.1% 20.2%, 81.8% 35.1%, 81% 58%, 83.2% 72.1%, 89% 80.8%, 89.7% 100%, 10.9% 100%, 11.6% 80.8%, 18.1% 72.1%, 18.8% 58%, 19.5% 36.9%)';

/** Small rotated square that makes a card read as a speech bubble pointing at the avatar. */
function BubbleTail({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute h-3.5 w-3.5 rotate-45 rounded-[3px] bg-ink ${className}`} />;
}
