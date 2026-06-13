import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

const contentDirectory = path.join(process.cwd(), "app/content");

// Get all posts for the listing page
export function getAllPosts() {
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: data.id,
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt ?? data.description ?? "",
    };
  });
}

// Get details of a single post
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent
    .toString()
    .replace(
      /<img /g,
      '<img style="max-width:100%;width:100%;height:auto;display:block;" ',
    );

  return {
    id: data.id,
    slug,
    title: data.title,
    date: data.date,
    description: data.description ?? "",
    contentHtml,
  };
}
