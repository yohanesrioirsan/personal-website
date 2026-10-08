// Generates public/og.png, the default social preview image. Run: npm run og
// Uses the satori/resvg renderer bundled with Next.js and its bundled Geist font, so it works offline.
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { ImageResponse } from 'next/dist/compiled/@vercel/og/index.node.js';

const h = (type, style, children) => ({ type, props: { style, children } });

// satori does not read WebP, so convert the avatar to PNG first.
const avatar = await sharp(await readFile('public/assets/emoji.webp')).png().toBuffer();
const avatarSrc = `data:image/png;base64,${avatar.toString('base64')}`;

const image = h('div', { width: '100%', height: '100%', display: 'flex', background: '#F8F7F3', color: '#111111', padding: '72px 80px', fontFamily: 'Geist' }, [
  h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }, [
    h('div', { display: 'flex', fontSize: 30, letterSpacing: '-0.04em' }, 'yohanesrioirsan'),
    h('div', { display: 'flex', flexDirection: 'column' }, [
      h('div', { display: 'flex', fontSize: 92, lineHeight: 1, letterSpacing: '-0.06em' }, 'Yohanes Rio Irsan'),
      h('div', { display: 'flex', marginTop: 24, fontSize: 40, color: '#68665F', letterSpacing: '-0.03em' }, 'Software Engineer from Indonesia'),
    ]),
    h('div', { display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#68665F' }, [
      h('div', { display: 'flex', width: 12, height: 12, borderRadius: 6, background: '#111111' }),
      'yohanesrioirsan.is-a.dev',
    ]),
  ]),
  h('div', { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 420 }, [
    { type: 'img', props: { src: avatarSrc, width: 420, height: 346, style: { objectFit: 'contain' } } },
  ]),
]);

const response = new ImageResponse(image, { width: 1200, height: 630 });
await writeFile('public/og.png', Buffer.from(await response.arrayBuffer()));
console.log('Wrote public/og.png');
