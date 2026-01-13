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
    <article className="min-h-screen container pt-4 px-4 lg:px-52">
      {!article ? (
        <div className="text-black/70 text-center">Sorry. Blog Not Found.</div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="mb-5">
            <h1 className="text-[#343434] text-4xl lg:text-6xl font-bold mb-1">
              {article.meta.title}
            </h1>

            <div className="flex gap-1 items-center mt-4">
              <img className="w-7 h-5" src={emoji} alt="emoji" />
              <h2 className="text-md lg:text-lg">
                Yohanes Rio Irsan - {article.meta.date}
              </h2>
            </div>
          </div>

          <div
            className="
    prose max-w-none
    prose-p:text-black
    prose-li:text-black
    prose-li:marker:text-black
    prose-strong:text-black
    prose-headings:text-black
    prose-a:text-black
    prose-p:text-lg
    prose-p:my-3
    prose-headings:my-4
    prose-h2:mt-6 prose-h2:mb-3
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
