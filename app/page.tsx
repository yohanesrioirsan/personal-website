import BoxMsg from "./components/BoxMsg";
import LabelMsg from "./components/LabelMsg";

export default function Home() {
  return (
    <section>
      <LabelMsg label1="home" label2="msg:" />
      <BoxMsg>
        <p className="text-white">Hi there!</p>
        <p className="text-white">
          I&apos;m Rio <span className="text-green-500">{":^)"}</span>, a
          software engineer building, breaking, and shipping web things from{" "}
          <span className="text-red-500">Indonesia</span>.
        </p>

        <p className="mt-6">Welcome to my website.</p>
      </BoxMsg>
      <LabelMsg label1="home" label2="about-me:" className="mt-1" />
      <BoxMsg>
        <p>
          My name is Yohanes Rio Irsan. I&apos;m a software engineer focused on
          front-end development, building, breaking, and shipping web things to
          use. I care about the details, from the way something looks to the way
          it responds under your cursor. I do backend development too,
          "sometimes" hehe. Outside of code, I&apos;m usually running on coffee
          and humbling high-rank VAL/CS lobbies by night
          <span className="inline-block h-4 w-2 cursor-blink bg-[#D9D9D9E5] align-[-2px]" />
        </p>
      </BoxMsg>
    </section>
  );
}
