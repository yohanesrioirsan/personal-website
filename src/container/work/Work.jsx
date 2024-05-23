/* eslint-disable react/no-unescaped-entities */
import Card from "../../components/card/Card";
import WorkList from "../../json/WorkList.json";

function Work() {
  var CountWorkList = WorkList.length % 2 !== 0;

  // console.log(CountWorkList);
  return (
    <section className="w-full gap-3 mt-40 flex justify-center items-center flex-col">
      <div className="flex flex-col gap-1">
        <div className="w-full lg:w-[638px] bg-[#B6D168] p-6 rounded-t-lg rounded-b-md lg:rounded-t-2xl lg:rounded-b-lg drop-shadow-xl">
          <h1 className="text-[#4F601F] text-4xl lg:text-6xl font-semibold">
            My Work
          </h1>
        </div>
        <div className="w-full lg:w-[638px] bg-[#FFFFFF] p-6 rounded-b-lg rounded-t-md lg:rounded-b-2xl lg:rounded-t-lg drop-shadow-xl">
          <h1 className="text-[#343434] text-xl lg:text-2xl font-semibold">
            {
              "I like tinkering things and turning my ideas into reality. Here are a few projects that I’ve made, both for fun and for my clients."
            }
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-[638px] bg-[#CECECE] p-4 rounded-t-lg rounded-b-md lg:rounded-t-2xl lg:rounded-b-lg drop-shadow-xl mt-4">
        <div className="w-full grid grid-cols-2 gap-3">
          {WorkList.map((work, i) => (
            <Card key={i} image={work.image} title={work.title} />
          ))}
          {CountWorkList && (
            <div className="flex items-center justify-center p-6">
              <h2 className="text-[#A3A3A3] text-xl lg:text-2xl font-semibold text-center">
                Let's work together!
              </h2>
            </div>
          )}
        </div>
        <div className="w-full grid grid-cols-2 gap-3 mt-3"></div>
      </div>
    </section>
  );
}

export default Work;
