import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Noto_Color_Emoji } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { themeInitScript } from "@/components/layout/theme-toggle";
import { content } from "@/data/content";
import { pageMetadata, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});
const notoEmoji = Noto_Color_Emoji({
  weight: "400",
  subsets: ["emoji"],
  variable: "--font-emoji",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ["Yohanes Rio Irsan", "yohanesrioirsan", "software engineer", "frontend developer", "web developer", "Indonesia", "Next.js", "Laravel", "portfolio"],
  ...pageMetadata({ path: "/" }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/favicon.svg" },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  // Updated to the dark color by ThemeToggle when dark mode is on. color-scheme is set in CSS per theme.
  themeColor: "#F8F7F3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline script may add the `dark` class before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${caveat.variable} ${notoEmoji.variable} overflow-x-clip font-sans antialiased`}
      >
        <SmoothScroll />
        <LoadingScreen />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ivory focus:p-4"
        >
          Skip to content
        </a>
        <Navbar contactUrl={content.contactUrl} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
