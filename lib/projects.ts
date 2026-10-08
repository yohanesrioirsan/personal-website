import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { publicFileExists } from '@/lib/public-file';

/**
 * Projects live in /content/projects/<slug>.md.
 * Frontmatter holds the structured fields; the markdown body becomes the detail page write-up.
 * Everything is read at build time (static export), so a bad file fails the build with a clear message.
 */

export const PROJECT_CATEGORIES = ['Web App', 'Company Web', 'Tools', 'Fun Project', 'Open Source'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  description: string;
  url: string | null;
  sourceUrl: string | null;
  type: string;
  year: string | null;
  stack: string[];
  status: string;
  categories: ProjectCategory[];
  tags: string[];
  theme: 'dark' | 'light';
  accent: string;
  /** Resolved logo path, or null when the file is missing (an initial-letter tile is shown instead). */
  logo: string | null;
  /** Gallery with missing files already removed. The first image is the cover. */
  gallery: ProjectImage[];
  features: string[];
  featured: boolean;
  order: number;
  /** Rendered markdown body. Source files are authored in this repo, so the HTML is trusted. */
  html: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects');

const str = (value: unknown) => (typeof value === 'string' && value.trim() ? value.trim() : null);
const list = (value: unknown) => (Array.isArray(value) ? value.map(String).map((v) => v.trim()).filter(Boolean) : []);

function parse(file: string): Project {
  const slug = file.replace(/\.md$/, '');
  const { data, content } = matter(readFileSync(path.join(CONTENT_DIR, file), 'utf8'));
  const fail = (message: string): never => {
    throw new Error(`content/projects/${file}: ${message}`);
  };

  const name = str(data.name) ?? fail('`name` is required');
  const description = str(data.description) ?? fail('`description` is required');

  const categories = list(data.categories);
  const unknown = categories.filter((c) => !PROJECT_CATEGORIES.includes(c as ProjectCategory));
  if (unknown.length) fail(`unknown categories ${JSON.stringify(unknown)}; use ${PROJECT_CATEGORIES.join(', ')}`);

  const gallery = (Array.isArray(data.gallery) ? data.gallery : [])
    .map((item: unknown, index: number) => {
      const image = item as { src?: unknown; alt?: unknown };
      const src = str(image?.src) ?? fail(`gallery[${index}].src is required`);
      return { src, alt: str(image?.alt) ?? fail(`gallery[${index}].alt is required`) };
    })
    .filter((image: ProjectImage) => publicFileExists(image.src));

  return {
    slug,
    name,
    description,
    url: str(data.url),
    sourceUrl: str(data.sourceUrl),
    type: str(data.type) ?? 'Web App',
    year: data.year == null ? null : String(data.year),
    stack: list(data.stack),
    status: str(data.status) ?? 'Live',
    categories: categories as ProjectCategory[],
    tags: list(data.tags),
    theme: data.theme === 'dark' ? 'dark' : 'light',
    accent: str(data.accent) ?? '#111111',
    logo: publicFileExists(str(data.logo)) ? str(data.logo) : null,
    gallery,
    features: list(data.features),
    featured: data.featured === true,
    order: typeof data.order === 'number' ? data.order : 999,
    html: marked.parse(content, { async: false }),
  };
}

let cache: Project[] | null = null;

export function getProjects(): Project[] {
  cache ??= readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md'))
    .map(parse)
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  return cache;
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
