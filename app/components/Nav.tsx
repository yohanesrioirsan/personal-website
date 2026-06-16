"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navConfig: Record<string, { label: string; dest: string }[]> = {
  "/": [
    { label: "/blog->", dest: "/blog" },
    { label: "/works->", dest: "/works" },
  ],
  "/blog": [
    { label: "/home->", dest: "/" },
    { label: "/works->", dest: "/works" },
  ],
  "/works": [
    { label: "/home->", dest: "/" },
    { label: "/blog->", dest: "/blog" },
  ],
};

const backgrounds = ["rgba(255, 60, 54, 0.1)", "rgba(255, 197, 0, 0.1)"];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const links = navConfig[pathname] ?? navConfig["/"];

  return (
    <header className="sticky top-0 z-50">
      <div className="h-10 px-6 py-3 flex items-center bg-black">
        <Link
          href="/"
          className="text-sm font-semibold tracking-normal transition-colors hover:text-[#c8ff57]"
        >
          <span className="hidden md:inline">
            <span className="font-light text-white/30">0xhdz</span>
            <span className="font-light text-white/40">|</span>
            <span className="font-light text-white/55">yohanes-rio-irsan</span>
          </span>
          <span className="font-light text-white">
            @{isHome ? "home" : pathname.replace("/", "")}
          </span>
        </Link>
        {!isHome && (
          <div className="cursor-pointer ml-3" onClick={() => router.back()}>
            <span className="text-green-500">{"[<-]"}</span>
          </div>
        )}
      </div>
      <nav aria-label="Main navigation">
        <ul className="items-center grid grid-cols-2 gap-px">
          {links.map(({ label, dest }, i) => (
            <li key={dest} style={{ backgroundColor: backgrounds[i] }}>
              <Link
                href={dest}
                className="relative overflow-hidden px-6 py-1.5 flex items-center group w-full h-full"
              >
                <span
                  className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-150 ease-in-out"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-current group-hover:text-white transition-colors duration-150">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
