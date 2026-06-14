import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "0xhdz@yohanesrioirsan/home ",
  description:
    "Welcome to the personal website of Yohanes Rio Irsan, a passionate and dedicated software engineer from Indonesia. Explore his portfolio, projects, and insights into web development and design.",
  icons: {
    icon: "/0xhdzicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative isolate grid min-h-dvh grid-rows-[auto_1fr_auto] overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed -left-87.5 -top-87.5 z-0 h-200 w-200 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(17,17,17,0) 65%)",
              filter: "blur(50px)",
            }}
          />

          <Nav />
          <main className="relative z-10 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
