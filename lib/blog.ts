import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked, Renderer } from 'marked';
import sharp from 'sharp';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  cover: string | null;
  coverAlt: string;
  readingMinutes: number;
  headings: { id: string; text: string }[];
  html: string;
};

const directory = path.join(process.cwd(), 'content', 'blog');
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

export async function parseBlogPost(source: string, slug: string): Promise<BlogPost> {
  const { data, content } = matter(source);
  const fail = (message: string): never => { throw new Error(`content/blog/${slug}.md: ${message}`); };
  const field = (name: string): string => typeof data[name] === 'string' && data[name].trim() ? data[name].trim() : fail(`\`${name}\` is required`);
  const title = field('title');
  const description = field('description');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail('invalid filename slug');
  if (data.slug && data.slug !== slug) fail('frontmatter slug must match the filename');
  const rawDate = data.date instanceof Date && !Number.isNaN(data.date.getTime()) ? data.date.toISOString().slice(0, 10) : field('date');
  const date = /^\d{2}-\d{2}-\d{4}$/.test(rawDate) ? rawDate.split('-').reverse().join('-') : rawDate;
  const timestamp = new Date(`${date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(timestamp.getTime()) || timestamp.toISOString().slice(0, 10) !== date) fail('date must be a valid DD-MM-YYYY or YYYY-MM-DD date');

  const tokens = marked.lexer(content);
  const images = new Map<string, { width: number; height: number }>();
  const imageSources = new Set<string>();
  marked.walkTokens(tokens, token => { if (token.type === 'image') imageSources.add(token.href); });
  const cover = typeof data.cover === 'string' ? data.cover : [...imageSources][0] ?? null;
  if (cover) imageSources.add(cover);
  await Promise.all([...imageSources].map(async src => {
    if (!src.startsWith('/images/')) fail(`image must be a local /images/ path: ${src}`);
    const file = path.resolve(process.cwd(), 'public', `.${src}`);
    if (!file.startsWith(path.resolve(process.cwd(), 'public', 'images') + path.sep)) fail(`invalid image path: ${src}`);
    try {
      const { width, height } = await sharp(file).metadata();
      if (!width || !height) fail(`image has no dimensions: ${src}`);
      images.set(src, { width, height });
    } catch { fail(`image is missing or unreadable: ${src}`); }
  }));

  const headings: BlogPost['headings'] = [];
  const usedIds = new Set<string>();
  const renderer = new Renderer();
  renderer.heading = function (token) {
    const base = token.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    let id = base;
    for (let suffix = 2; usedIds.has(id); suffix++) id = `${base}-${suffix}`;
    usedIds.add(id);
    if (token.depth === 2) headings.push({ id, text: token.text });
    return `<h${token.depth} id="${id}">${this.parser.parseInline(token.tokens)}</h${token.depth}>`;
  };
  renderer.image = function (token) {
    const size = images.get(token.href)!;
    return `<img src="${escapeHtml(token.href)}" alt="${escapeHtml(token.text)}" width="${size.width}" height="${size.height}" loading="lazy" decoding="async" />`;
  };
  // Markdown is authored in this repository, matching the trusted project-content renderer.
  const html = marked.parser(tokens, { renderer });
  const words = content.replace(/!\[[^\]]*\]\([^)]*\)/g, '').trim().split(/\s+/).length;
  return {
    slug, title, description, date,
    dateLabel: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(timestamp),
    cover, coverAlt: typeof data.coverAlt === 'string' ? data.coverAlt : title,
    readingMinutes: Math.max(1, Math.ceil(words / 200)), headings, html,
  };
}

let cache: Promise<BlogPost[]> | null = null;
export function getBlogPosts(): Promise<BlogPost[]> {
  cache ??= Promise.all(readdirSync(directory).filter(file => file.endsWith('.md')).map(file => parseBlogPost(readFileSync(path.join(directory, file), 'utf8'), file.slice(0, -3)))).then(posts => posts.sort((a, b) => b.date.localeCompare(a.date)));
  return cache;
}

export async function getBlogPost(slug: string) {
  return (await getBlogPosts()).find(post => post.slug === slug);
}
