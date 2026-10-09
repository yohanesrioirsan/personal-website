import type {
  CollageNote,
  CollagePhoto,
} from "@/components/about/scattered-photo-collage";

export type Experience = {
  slug: string;
  company: string;
  period: string;
  location?: string;
  role: string;
  description: string;
  /** Company website, shown as the "Visit Company Website" button. */
  url?: string;
  technologies: string[];
  /** Leave empty for remote roles; the entry then renders without the photo collage. */
  photos: CollagePhoto[];
  annotation?: CollageNote;
};

// Only verified entries. Do not add employers, titles, or dates that have not been confirmed.
// TODO(verify before publishing): CKL Cargo dates, description, and tags come from the design brief.
export const experiences: Experience[] = [
  {
    slug: "ckl-cargo",
    company: "CKL Cargo",
    period: "Feb 2024 – Present",
    location: "Jakarta, Indonesia",
    role: "Frontend Web Developer",
    url: "https://cklcargo.com/",
    description:
      "Worked on internal and client-facing web applications supporting logistics and cargo operations. Built responsive interfaces, improved frontend usability, and collaborated with the team to deliver features supporting day-to-day workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    photos: [
      {
        src: "/images/about/ckl-building.png",
        alt: "The CKL Cargo office building",
        label: "CKL building",
        className: "left-[14%] top-0 w-[60%] aspect-[4/5]",
        rotate: "rotate-1 md:rotate-2",
      },
      {
        src: "/images/about/ckl-workspace.webp",
        alt: "Laptop showing a development workspace at CKL Cargo",
        label: "Dev workspace",
        className: "right-0 top-[10%] w-[34%] aspect-square",
        rotate: "rotate-3 md:rotate-6",
      },
      {
        src: "/images/about/ckl-team.jpg",
        alt: "The CKL Cargo team in the office",
        label: "Team / office",
        className: "left-0 bottom-[6%] w-[38%] aspect-[4/3]",
        rotate: "-rotate-2 md:-rotate-6",
        hideOnMobile: true,
      },
      {
        src: "/images/about/ckl-logistics.jpg",
        alt: "Cargo and logistics operations at CKL Cargo",
        label: "Logistics",
        className: "right-[4%] bottom-0 w-[36%] aspect-[4/3]",
        rotate: "-rotate-1 md:-rotate-3",
      },
    ],
    annotation: {
      text: "CKL IT Department Team 💖",
      className: "right-[2%] top-[54%] w-[30%]",
      arrow: "down",
    },
  },
  {
    slug: "pandora-corp",
    company: "Pandora Corp",
    period: "Jul 2025 – Sep 2025",
    location: "Remote (Makassar, Indonesia)",
    role: "Freelance Web Development Consultant",
    url: "https://pandoracorp.id/",
    description:
      "Developed the public-facing digital presence for Pandora Corp, a company operating across three core business lines: esports, event organizing, and cybercafe. Designed and built the company profile website to introduce these three lines to the public and communicate the brand clearly.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Restructuring"],
    photos: [],
  },
];
