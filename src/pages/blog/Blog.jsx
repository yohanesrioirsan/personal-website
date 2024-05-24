import { motion } from "framer-motion";

function Blog() {
  return (
    <motion.section
      className="h-screen container px-4"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="animate-squeeze w-full flex justify-center items-center">
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
      </div>
    </motion.section>
  );
}

export default Blog;
