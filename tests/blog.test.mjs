import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { getBlogPosts, getBlogPost, parseBlogPost } from '../lib/blog.ts';

test('the article produces dated content, section links, and nine reserved-size screenshots', async () => {
  const posts = await getBlogPosts();
  const post = posts.find(post => post.slug === 'my-first-vibe-code');
  assert.ok(post);
  assert.equal(post.date, '2026-08-30');
  assert.equal(post.dateLabel, 'Aug 30, 2026');
  assert.ok(post.readingMinutes > 0);
  assert.equal((post.html.match(/<img /g) ?? []).length, 9);
  assert.equal((post.html.match(/loading="lazy"/g) ?? []).length, 9);
  assert.equal((post.html.match(/width="\d+" height="\d+"/g) ?? []).length, 9);
  for (const heading of post.headings) assert.ok(post.html.includes(`id="${heading.id}"`));
  assert.equal(await getBlogPost('does-not-exist'), undefined);
});

test('invalid dates and mismatched slugs fail with the source filename', async () => {
  const source = readFileSync('content/blog/my-first-vibe-code.md', 'utf8');
  await assert.rejects(parseBlogPost(source.replace('30-08-2026', '31-02-2026'), 'my-first-vibe-code'), /my-first-vibe-code.md: date/);
  await assert.rejects(parseBlogPost(source, 'another-slug'), /frontmatter slug must match/);
});

test('duplicate headings receive unique working anchor IDs', async () => {
  const post = await parseBlogPost('---\ntitle: Example\ndescription: Example post\ndate: 2026-08-30\n---\n\n## Same heading\n\nOne.\n\n## Same heading\n\nTwo.', 'example');
  assert.deepEqual(post.headings.map(heading => heading.id), ['same-heading', 'same-heading-2']);
});

test('all imported posts have valid covers, image dimensions, and newest-first ordering', async () => {
  const posts = await getBlogPosts();
  assert.deepEqual(posts.map(post => post.slug), [
    'my-first-vibe-code', 'windows-tweak', 'custom-terminal-ui',
    'custom-spotify-client', 'faceit-stats-widget', 'hello-world',
  ]);
  for (const post of posts) {
    assert.ok(!post.html.includes('src="/blog/'));
    const screenshots = post.html.match(/<img [^>]+>/g) ?? [];
    for (const image of screenshots) assert.match(image, /width="\d+" height="\d+"/);
    if (screenshots.length) assert.ok(post.cover?.startsWith('/images/blog/'));
    for (const heading of post.headings) assert.ok(post.html.includes(`id="${heading.id}"`));
  }
  assert.equal((await getBlogPost('hello-world')).headings.length, 0);
});
