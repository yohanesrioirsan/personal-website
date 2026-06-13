import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: "mailto:rioirsan8@gmail.com", label: "mail" },
    { href: "https://github.com/yohanesrioirsan", label: "github" },
    {
      href: "https://www.linkedin.com/in/yohanes-rio-irsan-872689206/",
      label: "linkedin",
    },
  ];

  return (
    <footer className="relative z-10 px-6 py-3 bg-black">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-normal transition-colors hover:text-[#c8ff57]"
        >
          <span className="font-light text-white/30">0xhdz</span>
          <span className="font-light text-white/40">|</span>
          <span className="font-light text-white/55">yohanes-rio-irsan</span>
          <span className="font-light text-white">@2026</span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-2">
            {links.map(({ href, label }) => (
              <li
                key={href}
                className="text-xs lowercase tracking-wider text-white/50 transition-colors hover:text-white"
              >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
