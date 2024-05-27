import { motion } from "framer-motion";
import BlogThumbnail from "../../components/card/BlogThumbnail";
import Aritcles from "../../json/DummyArticle.json";

function Blog() {
  const CountArticles = Aritcles.length % 2 !== 0;

  return (
    <motion.section
      className="h-screen container px-4"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="animate-squeeze w-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="w-full lg:w-[638px] bg-[#DDBF53] p-6 rounded-t-lg rounded-b-md lg:rounded-t-2xl lg:rounded-b-lg drop-shadow-xl">
              <h1 className="text-[#6C5E2A] text-4xl lg:text-6xl font-semibold">
                Blogs...?
              </h1>
            </div>
            <div className="w-full lg:w-[638px] bg-[#FFFFFF] p-6 rounded-b-lg rounded-t-md lg:rounded-b-2xl lg:rounded-t-lg drop-shadow-xl">
              <h1 className="text-[#343434] text-xl lg:text-2xl font-semibold">
                {
                  "Do some people even blog nowadays? No? Thought so. Here are all the random writings that I’ve  written during my off-time. Do be warned, it’s a wild wild west down there."
                }
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[638px] bg-[#CECECE] p-4 rounded-t-lg rounded-b-md lg:rounded-t-2xl lg:rounded-b-lg drop-shadow-xl mt-4">
          <div className="w-full grid grid-cols-2 gap-3">
            {Aritcles.map((article, i) => (
              <BlogThumbnail
                key={i}
                title={article.title}
                id={article.id}
                date={article.date}
                content={article.content}
              />
            ))}
            {CountArticles && (
              <div className="flex items-center justify-center p-6">
                <h2 className="text-[#A3A3A3] text-xl lg:text-2xl font-semibold text-center">
                  {"No More Post:("}
                </h2>
              </div>
            )}
          </div>
          <div className="w-full grid grid-cols-2 gap-3 mt-3"></div>
        </div>
      </div>
    </motion.section>
  );
}

export default Blog;
