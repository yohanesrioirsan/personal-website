"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { BrandIcon } from "@/components/ui/brand-icon";
import { PillButton } from "@/components/ui/pill-button";
import { content } from "@/data/content";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blogs" },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export function Navbar({ contactUrl }: { contactUrl: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const menuButton = useRef<HTMLButtonElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const isActive = (href: string) =>
    href === pathname || (href !== "/" && pathname.startsWith(href + "/"));
  const cta = contactUrl || "#contact";
  const socials = content.socials.filter((social) => social.href);

  // Frosted background once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the full-screen menu is open: lock page scroll, close on Escape or when
  // resizing to desktop, and keep Tab focus inside the menu.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") return setOpen(false);
      if (event.key !== "Tab" || !overlay.current) return;
      const focusable = overlay.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-300 ${
          // Frosted bar on desktop only; on mobile just the centered Menu pill floats over the page.
          scrolled
            ? "md:border-line/80 md:bg-ivory/70 md:backdrop-blur-xl md:backdrop-saturate-150 md:supports-[not(backdrop-filter:blur(1px))]:bg-ivory/95"
            : ""
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-end px-5 py-3 md:justify-between md:px-12 md:py-5 lg:px-16">
          {/* Logo is desktop-only; on mobile the header is just the Menu button at the top right. */}
          <Link
            href="/"
            className="hidden text-lg font-extrabold tracking-[-0.05em] md:block md:text-xl"
            aria-label="Yohanes home"
          >
            yohanesrioirsan
          </Link>
          <div className="hidden items-center gap-6 md:flex lg:gap-12">
            <nav aria-label="Main navigation" className="flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="relative py-2 text-sm transition-opacity hover:opacity-60"
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ink" />
                  )}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle className="h-10 w-10" />
              <PillButton href={cta} size="sm">
                Let’s Collab
              </PillButton>
            </div>
          </div>
          <ThemeToggle className="mr-2 md:hidden" />
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex min-h-11 items-center gap-2.5 rounded-full border border-line bg-ivory px-5 text-sm font-medium md:hidden"
          >
            <Menu size={17} aria-hidden="true" />
            Menu
          </button>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed layer inside it. */}
      <AnimatePresence onExitComplete={() => menuButton.current?.focus()}>
        {open && (
          <motion.div
            ref={overlay}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={reduced ? { opacity: 0 } : { y: "-100%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            exit={reduced ? { opacity: 0 } : { y: "-100%" }}
            transition={{ duration: reduced ? 0.2 : 0.6, ease: EASE }}
            data-lenis-prevent
            className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-ivory px-5 py-3 md:hidden"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                autoFocus
                className="flex min-h-11 items-center gap-2.5 rounded-full bg-ink px-5 text-sm font-medium text-ivory"
              >
                <X size={17} aria-hidden="true" />
                Close
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="my-auto py-10">
              <ul className="flex flex-col items-center gap-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={reduced ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: reduced ? 0 : 0.3 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`relative flex min-h-14 items-center px-4 text-[clamp(2.75rem,13vw,4rem)] font-extrabold leading-none tracking-[-0.06em] transition-colors ${
                        isActive(link.href) ? "" : "text-ink/45 hover:text-ink"
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-ink" aria-hidden="true" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: reduced ? 0 : 0.55 }}
              className="flex flex-col items-center gap-5 pb-6"
            >
              <PillButton href={cta} className="w-full max-w-xs justify-between">
                Let’s Collab
              </PillButton>
              {socials.length > 0 && (
                <ul className="flex items-center gap-2" aria-label="Social profiles">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} (opens in a new tab)`}
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink hover:text-ivory"
                      >
                        <BrandIcon name={social.icon} className="h-[18px] w-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
