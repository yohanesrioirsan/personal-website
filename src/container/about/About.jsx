import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: 0.5 });
    }
  }, [controls, inView]);

  return (
    <section className="container px-4">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full mt-40"
      >
        <motion.div className="flex justify-center items-center flex-col gap-3">
          <div className="flex flex-col gap-1">
            <div className="w-full lg:w-[638px] bg-[#B6D168] p-6 rounded-t-lg rounded-b-md lg:rounded-t-2xl lg:rounded-b-lg drop-shadow-xl">
              <h1 className="text-[#4F601F] text-4xl lg:text-6xl font-semibold">
                About Me
              </h1>
            </div>
            <div className="w-full lg:w-[638px] bg-[#FFFFFF] p-6 rounded-b-lg rounded-t-md lg:rounded-b-2xl lg:rounded-t-lg drop-shadow-xl">
              <h1 className="text-[#343434] text-xl lg:text-2xl font-semibold">
                {
                  "My name is Yohanes Rio Irsan. I am a web developer who familiar with front end technologies with a passion for clean, user-friendly design."
                }
              </h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
