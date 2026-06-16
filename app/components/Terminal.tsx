"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type OutputLine =
  | { type: "command"; text: string }
  | { type: "text"; text: string }
  | { type: "error"; text: string }
  | { type: "redirect"; text: string }
  | { type: "table"; rows: { label: string; value: string }[] };

const SOCIALS: Record<string, { label: string; url: string }> = {
  "-ig": { label: "instagram", url: "https://instagram.com/yohanesrioirsan" },
  "-yt": { label: "youtube", url: "https://youtube.com/@yohanesrioirsan" },
  "-th": { label: "threads", url: "https://threads.net/@yohanesrioirsan" },
  "-tw": { label: "twitter", url: "https://twitter.com/rioirsan31" },
};

const COMMANDS: Record<string, () => OutputLine[]> = {
  "--help": () => [
    { type: "text", text: "available commands:" },
    { type: "text", text: "  socials: find me on the internet" },
    { type: "text", text: "  skills: tech stack i work with" },
    { type: "text", text: "  tools: things in my daily workflow" },
    { type: "text", text: "  ai: AI tools i use" },
    { type: "text", text: "  clear: clear terminal" },
  ],
  socials: () => [
    { type: "text", text: "socials/" },
    {
      type: "table",
      rows: [
        { label: "instagram", value: "https://instagram.com/yohanesrioirsan" },
        { label: "youtube  ", value: "https://youtube.com/@yohanesrioirsan" },
        { label: "threads  ", value: "https://threads.net/@yohanesrioirsan" },
        { label: "twitter  ", value: "https://twitter.com/rioirsan31" },
      ],
    },
  ],
  skills: () => [
    { type: "text", text: "skills/" },
    {
      type: "table",
      rows: [
        {
          label: "laravel      ",
          value: "PHP framework: backend & full-stack",
        },
        { label: "codeigniter  ", value: "PHP framework: lightweight MVC" },
        {
          label: "reactjs      ",
          value: "UI library: component-driven frontends",
        },
        {
          label: "nextjs       ",
          value: "React framework: SSR, routing, and more",
        },
      ],
    },
  ],
  tools: () => [
    { type: "text", text: "tools/" },
    {
      type: "table",
      rows: [
        { label: "git    ", value: "version control" },
        { label: "vscode ", value: "primary editor" },
        { label: "wsl    ", value: "linux on windows" },
        { label: "notion ", value: "notes & planning" },
      ],
    },
  ],
  ai: () => [
    { type: "text", text: "ai/" },
    {
      type: "table",
      rows: [
        {
          label: "claude code",
          value: "agentic coding assistant by Anthropic",
        },
        { label: "codex      ", value: "OpenAI coding model" },
      ],
    },
  ],
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<OutputLine[]>([
    { type: "text", text: "" },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const handleFocus = () => inputRef.current?.focus();

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const echoLine: OutputLine = { type: "command", text: `> ${raw}` };

    if (!cmd) {
      setOutput((prev) => [...prev, echoLine]);
      return;
    }

    if (cmd === "clear" || cmd === "you-found-me") {
      setOutput([]);
      return;
    }

    const parts = cmd.split(/\s+/);
    if (parts[0] === "socials" && parts[1]) {
      const flag = parts[1];
      const social = SOCIALS[flag];
      if (social) {
        setOutput((prev) => [
          ...prev,
          echoLine,
          {
            type: "redirect",
            text: `redirecting to my ${social.label} in a sec...`,
          },
        ]);
        setTimeout(() => window.open(social.url, "_blank"), 1200);
        return;
      } else {
        setOutput((prev) => [
          ...prev,
          echoLine,
          {
            type: "error",
            text: `unknown flag: ${flag} — try "socials" to see options`,
          },
        ]);
        return;
      }
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      setOutput((prev) => [...prev, echoLine, ...handler()]);
    } else {
      setOutput((prev) => [
        ...prev,
        echoLine,
        { type: "error", text: `command not found: ${cmd} — try "--help"` },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input;
      setHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);
      runCommand(cmd);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = historyIndex + 1;
      if (next < history.length) {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setInput("you-found-me");
      inputRef.current?.focus();
    }, 50);
  }, []);

  const spaceIndex = input.indexOf(" ");
  const inputPrefix = spaceIndex !== -1 ? input.slice(0, spaceIndex) : input;
  const inputSuffix = spaceIndex !== -1 ? input.slice(spaceIndex) : "";
  const hasSpace = spaceIndex !== -1;

  return (
    <section
      className="font-mono text-sm text-white/70 cursor-text min-h-20 outline-none animate-fadeIn"
      onClick={handleFocus}
      tabIndex={-1}
    >
      {output.map((line, i) => {
        if (line.type === "command") {
          return (
            <div key={i} className="text-white/40 mb-1">
              {line.text}
            </div>
          );
        }
        if (line.type === "error") {
          return (
            <div key={i} className="text-red-400 mb-1">
              {line.text}
            </div>
          );
        }
        if (line.type === "redirect") {
          return (
            <div key={i} className="text-green-500 mb-1">
              {line.text}
            </div>
          );
        }
        if (line.type === "table") {
          return (
            <div key={i} className="mb-2 ml-2">
              {line.rows.map((row, j) => (
                <div key={j} className="flex gap-4">
                  <span className="text-green-500 min-w-25">{row.label}</span>
                  <span className="text-white/60">{row.value}</span>
                </div>
              ))}
            </div>
          );
        }
        return (
          <div key={i} className="mb-1">
            {line.text}
          </div>
        );
      })}

      <div className="flex items-center gap-2 mt-1">
        <span className="text-white/40">{">"}</span>
        <div className="relative flex-1 flex items-center">
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <span
              className={hasSpace ? "text-green-500" : "text-white/70"}
              style={{ whiteSpace: "pre" }}
            >
              {inputPrefix}
            </span>
            {hasSpace && (
              <span className="text-white/70" style={{ whiteSpace: "pre" }}>
                {inputSuffix}
              </span>
            )}
          </div>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ outline: "none", boxShadow: "none", border: "none" }}
            className="bg-transparent text-transparent w-full caret-transparent"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />

          <span
            className="absolute top-0 bottom-0 flex items-center pointer-events-none"
            style={{ left: `${input.length}ch` }}
          >
            <span className="inline-block w-2 h-4 bg-[#D9D9D9E5] cursor-blink" />
          </span>
        </div>
      </div>
      <div ref={bottomRef} />
    </section>
  );
}
