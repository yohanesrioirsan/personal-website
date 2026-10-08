'use client';

import Image from 'next/image';
import { useEffect, useId, useRef } from 'react';
import { eyes, pupilOffset, smoothPupil } from './eye-tracking-math.mjs';

const eyeShapes = [
  'M516 590 C530 566 548 552 576 552 C613 550 640 577 641 616 C609 634 550 637 516 590Z',
  'M770 627 C778 595 801 563 829 562 C859 562 885 585 894 608 C884 631 852 641 821 640 C800 640 782 635 770 627Z',
];

export function EyeTrackingAvatar() {
  const container = useRef<HTMLDivElement>(null);
  const pupils = useRef<(SVGGElement | null)[]>([]);
  const id = useId().replaceAll(':', '');

  useEffect(() => {
    const avatar = container.current;
    if (!avatar) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(any-pointer: fine)');
    let idle: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    let lastTime = 0;
    let pointer: { x: number; y: number } | null = null;
    const positions = eyes.map(() => ({ x: 0, y: 0 }));
    const animate = (time: number) => {
      frame = 0;
      const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16;
      lastTime = time;
      const bounds = container.current?.getBoundingClientRect();
      let moving = false;
      eyes.forEach((eye, index) => {
        const target = pointer && bounds ? pupilOffset(
          pointer.x - (bounds.left + eye.x / 1382 * bounds.width),
          pointer.y - (bounds.top + eye.y / 1138 * bounds.height),
        ) : { x: 0, y: 0 };
        const next = smoothPupil(positions[index], target, elapsed);
        const settled = Math.hypot(next.x - target.x, next.y - target.y) < 0.01;
        positions[index] = settled ? target : next;
        pupils.current[index]?.setAttribute('transform', `translate(${positions[index].x} ${positions[index].y})`);
        moving ||= !settled;
      });
      if (moving) frame = requestAnimationFrame(animate);
      else lastTime = 0;
    };
    const start = () => { if (!frame) frame = requestAnimationFrame(animate); };
    const center = () => {
      pointer = null;
      clearTimeout(idle);
      if (reduced.matches || !finePointer.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
        positions.forEach((position, index) => {
          position.x = position.y = 0;
          pupils.current[index]?.setAttribute('transform', 'translate(0 0)');
        });
      } else start();
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !finePointer.matches || event.pointerType === 'touch') { center(); return; }
      pointer = { x: event.clientX, y: event.clientY };
      start();
      clearTimeout(idle);
      idle = setTimeout(center, 3000);
    };
    avatar.addEventListener('pointermove', move, { passive: true });
    avatar.addEventListener('pointerleave', center);
    window.addEventListener('blur', center);
    window.addEventListener('resize', center);
    reduced.addEventListener('change', center);
    finePointer.addEventListener('change', center);
    return () => {
      clearTimeout(idle);
      cancelAnimationFrame(frame);
      avatar.removeEventListener('pointermove', move);
      avatar.removeEventListener('pointerleave', center);
      window.removeEventListener('blur', center);
      window.removeEventListener('resize', center);
      reduced.removeEventListener('change', center);
      finePointer.removeEventListener('change', center);
    };
  }, []);

  return <div ref={container} className="relative aspect-[1382/1138] w-full">
    <Image src="/images/avatar-eyeless.png" alt="Yohanes’s illustrated avatar peeking over a laptop covered in developer and music stickers" fill sizes="(max-width: 768px) 85vw, 480px" priority style={{ clipPath: `url(#${id}-whites)` }} />
    <svg viewBox="0 0 1382 1138" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id={`${id}-whites`} clipPathUnits="objectBoundingBox"><path d={eyeShapes[0]} transform="scale(0.000723589 0.000878735)" /><path d={eyeShapes[1]} transform="scale(0.000723589 0.000878735)" /></clipPath>
        <mask id={`${id}-original`} maskUnits="userSpaceOnUse" x="0" y="0" width="1382" height="1138"><rect width="1382" height="1138" fill="white" />{eyeShapes.map((shape, index) => <path key={index} d={shape} fill="black" />)}</mask>
        {eyes.map((eye, index) => <g key={index}><clipPath id={`${id}-eye-${index}`}><path d={eyeShapes[index]} /></clipPath><clipPath id={`${id}-iris-${index}`}><ellipse cx={eye.x} cy={eye.y} rx={eye.rx} ry={eye.ry} /></clipPath></g>)}
      </defs>
      {/* Enlarge only the sclera texture so the generated eyelid never enters the original eye mask. */}
      {eyes.map((eye, index) => <g key={`white-${eye.x}`} clipPath={`url(#${id}-eye-${index})`}><g transform={`translate(${eye.x} ${eye.y}) scale(1.4) translate(${-eye.x} ${-eye.y})`}><image href="/images/avatar-eyeless.png" width="1382" height="1138" /></g></g>)}
      <image href="/assets/emoji.webp" width="1382" height="1138" mask={`url(#${id}-original)`} />
      {eyes.map((eye, index) => <g key={eye.x} clipPath={`url(#${id}-eye-${index})`}><g ref={node => { pupils.current[index] = node; }}><image href="/assets/emoji.webp" width="1382" height="1138" clipPath={`url(#${id}-iris-${index})`} /></g></g>)}
    </svg>
  </div>;
}
