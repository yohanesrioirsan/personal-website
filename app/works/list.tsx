import Link from "next/link";
import { getAllWorks } from "../lib/work-markdown";

export default function WorkListing() {
  const posts = getAllWorks() as Array<{
    id: number;
    thumbnail?: string;
    slug: string;
    title: string;
    date: string;
    description: string;
    github?: string;
    site?: string;
  }>;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden bg-[#2c2c2c]"
            >
              <div className="flex flex-1 items-stretch min-h-35">
                <div className="flex-1 px-6 py-5 flex flex-col justify-start">
                  <h2 className="text-base font-semibold text-white mb-0.5">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#888] mb-4">@{post.date}</p>
                  <p className="text-sm text-[#ccc] leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {post.thumbnail ? (
                  <div className="shrink-0 w-48 md:w-64 self-stretch hidden md:block">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
              </div>

              <div className="relative z-10 flex items-center justify-between bg-black px-6 py-2.5 text-sm lowercase tracking-wider text-white/50">
                <div className="flex items-center gap-4">
                  {post.github ? (
                    <a
                      href={post.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 transition-colors hover:text-white!"
                    >
                      github
                    </a>
                  ) : null}

                  {post.github && post.site ? (
                    <span className="text-[#444]">|</span>
                  ) : null}

                  {post.site ? (
                    <a
                      href={post.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 transition-colors hover:text-white!"
                    >
                      visit-site
                    </a>
                  ) : null}
                </div>

                <Link
                  href={`/works/${post.slug}`}
                  className="text-white/50 transition-colors hover:text-white!"
                >
                  view-more
                </Link>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
