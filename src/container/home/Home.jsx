import emoji from "../../assets/img/Emoji.png";

function Home() {
  return (
    <section id="work" className="container px-4">
      <div className="w-full h-[70vh] flex justify-center items-center">
        <div className="relative bg-white lg:w-[638px] md:w-[638px] sm:w-auto drop-shadow-xl rounded-3xl py-4 px-8 animate-slide-up-fade">
          <p className="leading-tight lg:leading-extra-loose text-3xl lg:text-5xl text-[#313131] font-semibold">
            Hi <span className="animate-wave">👋</span>, there. <br />I am
            <span className="text-[#D5B02A]"> Rio</span>, a
            <span className="text-[#D5B02A]"> front-end developer </span>
            from Indonesia.
          </p>
          <img
            className="absolute -right-14 -bottom-14 w-[200px] rotate-12 lg:-right-36 lg:-bottom-14 lg:w-96 lg:rotate-12 drop-shadow-xl hover:animate-wave"
            src={emoji}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
