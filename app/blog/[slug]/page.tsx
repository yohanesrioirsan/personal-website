import { getAllPosts, getPostBySlug } from "@/app/lib/markdown";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return {
      title: "0xhdz@blog/" + post.slug + " ",
      description: post.description ?? post.title,
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <div className="min-h-screen text-white overflow-x-hidden w-screen animate-fadeIn">
        <div className="w-full px-5 py-16 sm:px-8">
          <header className="mx-auto mb-14 max-w-3xl">
            <h1 className="text-balance text-2xl sm:text-4xl font-semibold leading-tight tracking-tight text-white">
              {post.title}
            </h1>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              0xhdz@{post.date}
            </p>

            <div className="mt-6 h-px w-full bg-white/10" />
          </header>

          <article
            style={{ overflowWrap: "anywhere" }}
            className="
          prose prose-invert mx-auto max-w-3xl wrap-break-word

          prose-p:my-6
          prose-p:text-[15px]
          prose-p:leading-8
          prose-p:text-white/70

          prose-strong:text-white
          prose-strong:font-semibold

          prose-a:text-[#8ab4ff]
          prose-a:no-underline
          hover:prose-a:underline

          [&_ul]:my-6
          [&_ul]:ml-0
          [&_ul]:list-inside
          [&_ul]:list-disc
          [&_ul]:space-y-2

          [&_ol]:my-6
          [&_ol]:ml-0
          [&_ol]:list-inside
          [&_ol]:list-decimal
          [&_ol]:space-y-2

          [&_li]:pl-0
          [&_li]:leading-8
          [&_li]:text-white/70

          [&_li::marker]:text-white/50

          prose-img:max-w-full
          prose-img:h-auto
          prose-img:w-full
          [&_img]:max-w-full!
          [&_img]:w-full!
          [&_img]:h-auto

          [&_pre]:overflow-x-auto
          [&_pre]:max-w-full
          [&_table]:block
          [&_table]:overflow-x-auto
        "
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
