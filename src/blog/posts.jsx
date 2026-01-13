import { Buffer } from "buffer";
window.Buffer = Buffer;

import matter from "gray-matter";

const modules = import.meta.glob("./*.md", {
  eager: true,
  as: "raw",
});

export const posts = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = matter(raw);

  return {
    slug: path.replace("./", "").replace(".md", ""),
    meta: data,
    content,
  };
});
