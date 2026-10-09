'use client';

import { useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

type Token = [text: string, className?: string];

const kw = 'text-[#c792ea]';
const str = 'text-[#c3e88d]';
const fn = 'text-[#82aaff]';
const prop = 'text-[#f78c6c]';
const dim = 'text-ivory/40';

const code: Token[][] = [
  [['const ', kw], ['me', fn], [' = {']],
  [['  stack', prop], [': ['], ["'Laravel'", str], [', '], ["'React'", str], ['],']],
  [['  coffee', prop], [': '], ['true', kw], [',']],
  [['};']],
  [['while ', kw], ['(me.coffee) {']],
  [['  build', fn], ['(); '], ['deploy', fn], ['(); '], ['repeat', fn], ['();']],
  [['}']],
];

const total = code.reduce((sum, line) => sum + line.reduce((n, [text]) => n + text.length, 0) + 1, 0) - 1;

/** Fake editor window that types out a small snippet on a loop. Fully typed under reduced motion. */
export function EditorBubble() {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const shown = reduced ? total : typed;

  useEffect(() => {
    if (reduced) return;
    // Pause at the end of the snippet before starting over.
    const delay = typed >= total ? 2600 : typed === 0 ? 400 : 28 + Math.random() * 45;
    const timer = setTimeout(() => setTyped((count) => (count >= total ? 0 : count + 1)), delay);
    return () => clearTimeout(timer);
  }, [typed, reduced]);

  // Every line is always rendered (empty until reached) so the window never changes height.
  let remaining = shown;
  let cursorLine = -1;
  const lines = code.map((line, lineIndex) => {
    const length = line.reduce((n, [text]) => n + text.length, 0);
    if (cursorLine < 0 && remaining <= length) cursorLine = lineIndex;
    let budget = Math.min(remaining, length);
    const parts: Token[] = [];
    for (const [text, className] of line) {
      if (budget <= 0) break;
      parts.push([text.slice(0, budget), className]);
      budget -= text.length;
    }
    remaining = Math.max(0, remaining - length - 1);
    return parts;
  });

  return (
    <div className="overflow-hidden rounded-[18px] bg-[#1b1b1f] text-ivory shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#141417] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-ivory/70">workflow.ts</span>
      </div>
      <pre className="px-3 py-2.5 font-mono text-[10px] leading-[1.6]" aria-label="Code snippet: build, deploy, repeat while there is coffee">
        {lines.map((parts, lineIndex) => (
          <div key={lineIndex} className="flex">
            <span className="w-3 shrink-0 select-none text-right text-ivory/25">{lineIndex + 1}</span>
            <span className="ml-3 whitespace-pre">
              {parts.map(([text, className], partIndex) => (
                <span key={partIndex} className={className}>
                  {text}
                </span>
              ))}
              {lineIndex === cursorLine && <span className="caret ml-px inline-block h-[1.1em] w-[1.5px] translate-y-[2px] bg-ivory" aria-hidden="true" />}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
