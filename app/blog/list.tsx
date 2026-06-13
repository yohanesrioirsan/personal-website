import Link from "next/link";
import { getAllPosts } from "../lib/markdown";

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogListing() {
  const posts = getAllPosts();

  return (
    <section>
      <div className="grid grid-cols-3 gap-px">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <article
              key={post.slug}
              className="relative overflow-hidden group bg-white/22"
            >
              <Link href={`/blog/${post.slug}`} className="block px-6 py-1.5">
                <div className="relative z-10">
                  <h2 className="text-lg font-medium text-white group-hover:text-black transition-colors duration-150">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm group-hover:text-black transition-colors duration-150">
                    <span className="group-hover:hidden">@</span>
                    <span className="text-[#DFDFDF] group-hover:text-black transition-colors duration-150">
                      <span className="group-hover:hidden">{post.date}</span>
                      <span className="hidden group-hover:inline">
                        {formatDate(post.date)}
                      </span>
                    </span>
                  </p>
                </div>
              </Link>

              <div className="absolute inset-0 z-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out" />
            </article>
          ))}
      </div>
    </section>
  );
}
