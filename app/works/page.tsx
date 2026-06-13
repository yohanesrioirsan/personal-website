import type { Metadata } from "next";
import WorkHome from "./work";

export const metadata: Metadata = {
  title: "0xhdz@yohanesrioirsan/works ",
  description:
    "Things I’ve built, shipped, broken, and rebuilt. Client work, and random projects I made just for fun.",
};

export default function WorkIndex() {
  return <WorkHome />;
}
