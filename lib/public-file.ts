import { existsSync } from 'node:fs';
import path from 'node:path';

/** True when `src` (e.g. "/images/x.png") exists under /public. Runs at build time only. */
export function publicFileExists(src: string | undefined | null): src is string {
  return !!src && existsSync(path.join(process.cwd(), 'public', src));
}
