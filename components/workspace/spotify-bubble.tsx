'use client';

import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { siSpotify } from 'simple-icons';

/** Favorite song from each band on the laptop stickers. Lengths are approximate. */
const tracks = [
  { title: 'Untuk Apa / Untuk Apa', artist: 'Hindia', length: 254, cover: '/images/band/hindia.webp' },
  { title: 'Hanya Kau', artist: 'The Adams', length: 221, cover: '/images/band/the-adams.webp' },
  { title: 'Gemilang', artist: 'Perunggu', length: 243, cover: '/images/band/perunggu.webp' },
  { title: 'Sectumsempra', artist: '.Feast', length: 236, cover: '/images/band/feast.webp' },
];

const time = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

/** Fake Spotify "now playing" card. Progress ticks locally and advances through `tracks`. */
export function SpotifyBubble() {
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(47);
  const [playing, setPlaying] = useState(true);
  const track = tracks[index];

  const skip = (step: number) => {
    setIndex((current) => (current + step + tracks.length) % tracks.length);
    setElapsed(0);
  };

  useEffect(() => {
    if (!playing) return;
    const tick = setInterval(() => setElapsed((seconds) => seconds + 1), 1000);
    return () => clearInterval(tick);
  }, [playing]);

  useEffect(() => {
    if (elapsed >= track.length) skip(1);
  }, [elapsed, track.length]);

  return (
    <div className="rounded-[22px] bg-ink p-3.5 text-ivory shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#1DB954]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d={siSpotify.path} />
        </svg>
        {playing ? 'Listening on Spotify' : 'Paused on Spotify'}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Image src={track.cover} alt={`${track.artist} cover`} width={48} height={48} className="h-12 w-12 shrink-0 rounded-lg bg-ivory/10 object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-tight">{track.title}</p>
          <p className="truncate text-xs text-ivory/60">{track.artist}</p>
        </div>
        <span className={`flex h-4 items-end gap-[2px] ${playing ? '' : 'opacity-40'}`} aria-hidden="true">
          {[0, 1, 2, 3].map((bar) => (
            <span key={bar} className="eq-bar w-[3px] rounded-full bg-[#1DB954]" style={{ animationDelay: `${bar * -0.27}s`, animationPlayState: playing ? 'running' : 'paused' }} />
          ))}
        </span>
      </div>
      <div className="mt-3">
        <div className="h-1 overflow-hidden rounded-full bg-ivory/15" role="progressbar" aria-label="Track progress" aria-valuemin={0} aria-valuemax={track.length} aria-valuenow={elapsed}>
          <div className="h-full rounded-full bg-ivory transition-[width] duration-1000 ease-linear" style={{ width: `${(elapsed / track.length) * 100}%` }} />
        </div>
        <div className="mt-1 flex justify-between text-[10px] tabular-nums text-ivory/50">
          <span>{time(elapsed)}</span>
          <span>{time(track.length)}</span>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-center gap-5">
        <button type="button" onClick={() => skip(-1)} aria-label="Previous track" className="text-ivory/70 transition hover:text-ivory">
          <SkipBack className="h-4 w-4" fill="currentColor" />
        </button>
        <button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause' : 'Play'} className="grid h-8 w-8 place-items-center rounded-full bg-ivory text-ink transition hover:scale-105">
          {playing ? <Pause className="h-3.5 w-3.5" fill="currentColor" /> : <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />}
        </button>
        <button type="button" onClick={() => skip(1)} aria-label="Next track" className="text-ivory/70 transition hover:text-ivory">
          <SkipForward className="h-4 w-4" fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
