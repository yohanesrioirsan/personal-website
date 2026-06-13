import type { Metadata } from "next";
import BlogHome from "./blog";

export const metadata: Metadata = {
  title: "0xhdz@yohanesrioirsan/blog",
  description:
    "A place where I write whatever’s been sitting in my head, hobbies, random thoughts, things I can share, or whatever I’m into at the moment. Read the blog if you want a peek inside my brain.",
};

export default function BlogIndex() {
  return <BlogHome />;
}
