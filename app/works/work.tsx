import BoxMsg from "../components/BoxMsg";
import LabelMsg from "../components/LabelMsg";
import WorkListing from "./list";

export default function WorkHome() {
  return (
    <section className="animate-fadeIn">
      <LabelMsg label1="works" label2="msg:" />
      <BoxMsg>
        <p className="text-white">
          I like tinkering with things and turning my ideas into reality.
        </p>

        <p className="mt-6">
          Here are a few projects that I’ve made, both for fun and for my
          clients.
        </p>
      </BoxMsg>
      <LabelMsg
        label1="works"
        label2="date-format::DD-MM-YYY"
        className="mt-1"
      />
      <WorkListing />
    </section>
  );
}
