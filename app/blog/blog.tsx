import BoxMsg from "../components/BoxMsg";
import LabelMsg from "../components/LabelMsg";
import BlogListing from "./list";

export default function BlogHome() {
  return (
    <section className="animate-fadeIn">
      <LabelMsg label1="blog" label2="msg:" />
      <BoxMsg>
        <p className="text-white">Do people even blog nowadays?</p>
        <p className="text-white">No? Thought so.</p>

        <p className="mt-6">
          Here are all the random writings that I’ve written during my off-time.
        </p>
        <p>Do be warned, it’s a wild wild west down there.</p>
      </BoxMsg>
      <LabelMsg
        label1="blog"
        label2="date-format::DD-MM-YYY"
        className="mt-1"
      />
      <BlogListing />
    </section>
  );
}
