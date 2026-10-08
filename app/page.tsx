import { CollaborationCta } from '@/components/about/collaboration-cta';
import { HomeHero } from '@/components/home/home-hero';
import { HomeOverview } from '@/components/home/home-overview';
import { ProjectsSection } from '@/components/home/projects-section';
import { JsonLd } from '@/components/seo/json-ld';
import { content } from '@/data/content';
import { absoluteUrl, site } from '@/lib/site';

// Home uses the root layout metadata (default title, canonical "/", default social image).
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    image: absoluteUrl('/assets/emoji.webp'),
    jobTitle: site.jobTitle,
    description: site.description,
    email: content.contactUrl.replace(/^mailto:/, ''),
    address: { '@type': 'PostalAddress', addressCountry: 'ID' },
    knowsAbout: content.techStack.map((tech) => tech.name),
    sameAs: site.sameAs,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: 'en',
    author: { '@id': `${site.url}/#person` },
  },
];

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
      <JsonLd data={jsonLd} />
      <HomeHero />
      <HomeOverview />
      <ProjectsSection />
      <CollaborationCta />
    </main>
  );
}
