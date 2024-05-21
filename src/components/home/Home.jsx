import Twemoji from "react-twemoji";

function Home() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="py-[20px] px-[30px] drop-shadow-lg rounded-2xl bg-white">
          <h1 className="text-2xl">
            Hi <span className="animate-swing">👋</span>, there
          </h1>
          <h1 className="text-2xl">
            I’m <span className="text-[#D5B02A]">Rio</span>, a{" "}
            <span className="text-[#D5B02A]">front-end developer</span> from
          </h1>
          <div className="flex items-center gap-2">
            <Twemoji className="w-[20px] h-[20px]">🇮🇩</Twemoji>
            <h1 className="text-2xl">Indonesia</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
