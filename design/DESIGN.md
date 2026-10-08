# DESIGN.md

## Personal Portfolio: About Page

### 1. Objective

Build a polished, minimalist About page for Yohanes, a software engineer from Indonesia. The page should feel personal, editorial, and slightly playful without becoming cluttered. It should match the existing portfolio's ivory-and-black, two-tone visual language and lead visitors naturally from introduction to personal story, professional experience, and collaboration.

This brief covers **the About page only**. Experience details may link to a separate route, but do not build those pages as part of this task.

### 2. Technology

- Next.js App Router, TypeScript
- Tailwind CSS for styling; avoid custom CSS unless a specific visual effect cannot be achieved cleanly with utilities
- Framer Motion (Motion for React) for scroll reveals and subtle motion
- Lucide React for interface icons
- `next/image` for optimized photographs and illustrations
- `next/font` for typography

### 3. Visual Direction

**Style:** minimalist editorial portfolio, warm monochrome, playful human details.

**Colors**
| Token | Hex | Usage |
| --- | --- | --- |
| Background | `#F8F7F3` | Main warm ivory canvas |
| Foreground | `#111111` | Primary text, CTA, dark accents |
| Secondary text | `#777570` | Paragraphs, dates, muted labels |
| Border | `#E8E6E0` | Subtle outlines and dividers |
| Surface | `#FFFFFF` | Optional subtle cards/photo frames |

The Indonesian flag and photographic content may introduce natural colors; otherwise keep UI colors limited to ivory, black, and neutral gray.

**Typography**

- Use **Geist** or a similarly clean modern grotesk for headings and body.
- Headings: heavy weight, tight tracking, compact line height.
- Body: regular weight, readable line height, restrained width.
- Small section labels: uppercase, spaced letters, muted tone.
- Handwritten photo annotations: a casual handwriting font, used sparingly only for doodle notes.

**Shapes and spacing**

- Desktop content width: `max-w-7xl`, generous horizontal gutters.
- Rounded CTA buttons: full pill shape.
- Cards: subtle borders, `rounded-2xl` or `rounded-3xl`.
- Photographs: moderately rounded corners, small rotations, varied sizes.
- Large section spacing; do not turn every section into a bento grid.
- Avoid strong shadows, gradients, neon colors, glassmorphism, and heavy decoration.

### 4. Navigation

Consistent with the rest of the portfolio.

- Left: bold `yohanesrioirsan` wordmark, links to `/`.
- Center/right: `Home`, `Projects`, `Blog`, `About`.
- Current page: `About` with a small black dot below its label.
- Right: black pill CTA `Let's Collab` with arrow-up-right icon, linking to the existing contact destination.
- Mobile: compact navigation with an accessible menu and the CTA where space permits.
- Keep the navigation simple, airy, and consistent across routes.

### 5. Page Sections

#### Section A: About Hero

**Layout:** two-column desktop composition. Text on the left; a large tilted illustrated avatar card on the right. Stack vertically on mobile.

**Eyebrow:** `ABOUT ME` in a small outlined pill with a minimal icon.

**Headline:**

> Just a guy  
> who loves  
> building things.

**Description:**

> I'm Yohanes, a software engineer from Indonesia. I enjoy turning ideas into real products, working on web apps, tools, and random projects that solve real problems.

**Supporting text:**

> I'm always open to new opportunities, collaborations, or just a casual chat about tech.

**Avatar treatment:**

- Use a **user-supplied personal emoji/avatar image**; do not invent a realistic likeness.
- Place the avatar inside a large black rounded square, rotated approximately 5–7 degrees.
- Keep the avatar as the visual focal point of the right column.
- Add a few tiny hand-drawn rays, an arrow, and the handwritten words `Build / Explore / Learn / Repeat` beside the card.
- Use image assets or SVG doodles, not emojis as substitutes for the user's photo asset.

**Quick stats strip:** four equal, lightly outlined cards below the hero:

1. `3+` / `Years Experience`
2. `20+` / `Projects Built`
3. `Open` / `For Opportunities`
4. `Indonesia 🇮🇩` / `Based In`

**Important:** The numbers are visual placeholders from the reference mockup. Store stats in a content object and confirm their accuracy before publishing.

#### Section B: My Story

**Eyebrow:** `01. MY STORY`

**Headline:**

> From curiosity  
> to building  
> real stuff.

**Body copy:**

> I started my journey with simple curiosity, just exploring how things work. Over time, it turned into a passion for building useful products, learning new tech, and solving real problems.
>
> Now, I spend most of my time working on web apps, tools, and side projects. I enjoy the process of turning ideas into something people can actually use.

**CTA:** black rounded `Let's Collab` button with arrow icon.

**Desktop layout:**

- Left 45%: section label, large heading, two paragraphs, CTA.
- Right 55%: a deliberately scattered photo collage.

**Collage concept:**

- One tall dominant photograph of a real workspace or coding desk.
- One smaller city/Indonesia photograph near its lower-left corner.
- One small close-up of a laptop/keyboard near its lower-right corner.
- Slight rotations (`-rotate-6`, `rotate-3`, etc.), layered positioning, rounded corners, and natural overlap.
- Handwritten notes: `My current workspace` and `Indonesia, always home`, with subtle curved arrow doodles.
- The images should appear intentionally placed, not as a uniform image grid.

Use local images under `/public/images/about/` and meaningful `alt` descriptions. Until real photos are provided, use clearly replaceable placeholders.

#### Section C: Experience

**Eyebrow:** `02. EXPERIENCE`

**Headline:**

> The journey  
> so far.

**Intro:**

> Companies and experiences that have shaped my journey as a software engineer. Each place taught me something valuable, from technical skills to how real-world teams work.

**Desktop section layout:**

- Top row: large heading on left and compact supporting text on right.
- Underneath: a vertical timeline, with role details toward the left and an expressive photo collage toward the right.
- The timeline has a thin, muted vertical line and small black circular milestones.
- Each experience should feel like a spacious editorial section, not a conventional résumé card.

**First entry: CKL Cargo**

- Company: `CKL Cargo`
- Date: `2024 – Present`
- Role: `Frontend Web Developer`
- Description (editable draft): `Worked on internal and client-facing web applications supporting logistics and cargo operations. Built responsive interfaces, improved frontend usability, and collaborated with the team to deliver features supporting day-to-day workflows.`
- Tech tags (verify before publishing): `Next.js`, `TypeScript`, `Tailwind CSS`, `API Integration`
- Action: `View More ↗` linking to `/experience/ckl-cargo`.

**CKL Cargo photo collage:**

- Large photograph of the workplace/building as the anchor.
- Smaller photo of a laptop displaying a development workspace.
- Smaller photo of the team or office.
- Smaller photo related to logistics/cargo operations.
- Photos should overlap at varied angles and heights, with a handwritten annotation `CKL IT Department Team 💖` and a curved arrow.
- Use genuine user-provided or properly licensed photos. Do not present generated or stock photos as actual CKL Cargo premises or colleagues.

**Additional entries:**
The reference mockup shows earlier employment and freelance work, but those details have not been confirmed. **Do not fabricate employers, titles, dates, or career history.** Implement an experience data array so additional verified entries can be added later. If only CKL Cargo is confirmed, render only that entry and keep the timeline visually balanced.

**Suggested data structure:**

```ts
type Experience = {
  slug: string;
  company: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  photos: { src: string; alt: string; className?: string }[];
  annotation?: string;
};
```

#### Section D: Collaboration CTA

A wide, dark rounded rectangle near the bottom, matching the other portfolio pages.

- Left eyebrow: `LET'S WORK TOGETHER`
- Left heading: `Have an idea or project in mind?`
- Right text: `I'm always open to new opportunities, collaborations, or just a casual chat about tech.`
- Right button: ivory pill `Let's Collab ↗`.
- Desktop: two columns with generous internal padding.
- Mobile: stacked text and button.

#### Section E: Footer

- Left: `yohanesrioirsan` wordmark.
- Center: `© 2026 Yohanes Rio Irsan ·  All rights reserved.`
- Right: GitHub, Discord, X icons, linking to verified personal profiles.
- Use subtle hover feedback and accessible icon labels.

### 6. Motion and Interaction

- On initial load, reveal the hero text with a small upward fade; avatar rotates subtly into place.
- Section headings and body content reveal once as they enter the viewport.
- Photos can stagger into view with short, gentle translations and slight rotation.
- Timeline milestones can fade in as the user scrolls through the experience section.
- CTA buttons have restrained hover lift or arrow movement.
- Avoid large parallax shifts, long entrance delays, bouncing animations, or scroll hijacking.
- Honor `prefers-reduced-motion` by disabling decorative animation.
- Use a consistent 200–600 ms duration range and smooth easing.

### 7. Responsive Rules

**Desktop (1024px and above):**

- Hero and story sections use two columns.
- Experience details and collage sit side by side.
- Four quick-stat cards share one row.

**Tablet (768–1023px):**

- Reduce heading size and image overlap.
- Use two columns for stats if necessary.
- Keep photo collage within its container.

**Mobile (below 768px):**

- Stack hero text and avatar.
- Use a 2×2 stat grid.
- Put story text before its photo collage.
- Stack each experience's information before its photographs.
- Use fewer photos and less rotation to avoid visual crowding.
- Keep buttons touch-friendly and never allow horizontal scrolling.
- Handwritten notes may be repositioned or hidden when they obscure content.

### 8. Suggested Components

```text
app/
  about/
    page.tsx
components/
  layout/
    navbar.tsx
    footer.tsx
  about/
    about-hero.tsx
    about-stats.tsx
    my-story.tsx
    scattered-photo-collage.tsx
    experience-section.tsx
    experience-timeline-item.tsx
    collaboration-cta.tsx
  ui/
    section-eyebrow.tsx
    pill-button.tsx
    reveal.tsx
data/
  experiences.ts
public/
  images/
    about/
      avatar.png
      workspace.webp
      indonesia.webp
      desk-detail.webp
      ckl-building.png
      ckl-workspace.webp
      ckl-team.jpg
      ckl-logistics.jpg
```

Image filenames are proposed placeholders, not existing assets. Components may be shared with other portfolio pages where practical.

### 9. Accessibility and Quality

- Semantic headings in correct order, with one `<h1>`.
- Meaningful alternative text for photographs; decorative doodles use `aria-hidden`.
- Visible keyboard focus indicators and sufficient text contrast.
- Responsive image sizes and lazy loading below the fold.
- Prevent cumulative layout shift by providing image dimensions or stable aspect ratios.
- Use real links for navigation and CTAs; no dead buttons.
- Keep layout readable without JavaScript-driven animation.
- Make copy, experience history, tech tags, images, and links easy to edit from structured data.

### 10. Implementation Checklist

- [ ] Match the existing site's navbar, footer, palette, and typography.
- [ ] Build the two-column About hero with personal avatar.
- [ ] Build the four quick-stat cards.
- [ ] Build the editorial My Story section with overlapping photographs.
- [ ] Build the Experience timeline with CKL Cargo as the verified entry.
- [ ] Link CKL Cargo's `View More` button to its future detail route.
- [ ] Build the dark collaboration CTA and footer.
- [ ] Add subtle scroll reveals and reduced-motion support.
- [ ] Check desktop, tablet, and mobile layouts.
- [ ] Replace placeholder images and confirm any unverified copy before publishing.

### 11. Non-Goals

- Do not redesign the Home, Projects, Blog, or Project Detail pages.
- Do not build the experience detail route in this task.
- Do not add unnecessary bento grids, flashy effects, or new accent colors.
- Do not invent past companies or personal career claims.

**Design principle:** Make the page feel like a personal story told through typography, space, and photographs, not a résumé pasted into cards.
