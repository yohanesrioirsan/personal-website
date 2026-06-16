// Home page
"use client";

import { useState, useEffect } from "react";
import BoxMsg from "./components/BoxMsg";
import LabelMsg from "./components/LabelMsg";
import Terminal from "./components/Terminal";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    let last = "";
    const handler = (e: KeyboardEvent) => {
      last += e.key;
      if (last.slice(-2) === "//") {
        setShowTerminal(true);
        last = "";
      }
      if (last.length > 10) last = last.slice(-10);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="animate-fadeIn">
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
          use.
        </p>
        <p>
          I care about the details, from the way something looks to the way it
          responds under your cursor. I do backend development too, "sometimes"
          hehe.
        </p>
        <p>
          Outside of code, I&apos;m usually running on coffee and humbling
          high-rank VAL/CS lobbies by night
          {!showTerminal ? (
            <span className="inline-block h-4 w-2 cursor-blink bg-[#D9D9D9E5] align-[-2px]" />
          ) : (
            "."
          )}
        </p>
      </BoxMsg>
      {showTerminal ? (
        <>
          <LabelMsg label1="home" label2="terminal:" className="mt-1" />
          <BoxMsg>
            <p className="text-white/20 mb-3">
              use --help to see available commands
            </p>
            <Terminal />
          </BoxMsg>
        </>
      ) : (
        <BoxMsg>
          <div>
            <p className="opacity-5">// try me</p>
          </div>
        </BoxMsg>
      )}
    </section>
  );
}
