import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../blog/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import emoji from "../../assets/img/Emoji.png";

function Article() {
  const { slug } = useParams();
  const article = posts.find((post) => post.slug === slug);

  useEffect(() => {
    if (article?.meta?.title) {
      document.title = article.meta.title + " - My Blog";
    }
  }, [article]);

  return (
    <article className="min-h-[85vh] container pt-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {!article ? (
        <div className="text-black/70 text-center">Sorry. Blog Not Found.</div>
      ) : (
        <div className="flex flex-col justify-center max-w-4xl mx-auto">
          <div className="mb-5">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
              {article.meta.title}
            </h1>

            <div className="flex gap-1 items-center mt-3">
              <img className="w-6 h-4" src={emoji} alt="emoji" />
              <h2 className="text-sm sm:text-md text-[#747474]">
                Yohanes Rio Irsan · {article.meta.date}
              </h2>
            </div>
          </div>

          <div
            className="
                    prose prose-sm sm:prose-base lg:prose-lg max-w-none
                    prose-p:text-black
                    prose-li:text-black
                    prose-li:marker:text-black
                    prose-strong:text-black
                    prose-headings:text-black
                    prose-a:text-black
                    prose-p:my-3
                    prose-headings:my-4
                    prose-h2:mt-6 prose-h2:mb-3
                    prose-img:mx-auto
                    prose-img:block
                    prose-img:rounded-lg
                    "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </article>
  );
}

export default Article;
