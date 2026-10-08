export type SocialIcon = 'github' | 'linkedin' | 'instagram' | 'threads' | 'discord' | 'x';
export type TechIcon = 'nextjs' | 'typescript' | 'nodejs' | 'tailwind' | 'postgresql' | 'docker' | 'php' | 'laravel' | 'git';

export const content = {
  contactUrl: 'mailto:rioirsan8@gmail.com',

  projectsUrl: '/projects',

  // TODO(verify before publishing): "3+" and "20+" are placeholder numbers from the mockup.
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Built' },
    { value: 'Open', label: 'For Opportunities' },
    { value: 'Indonesia', flag: '🇮🇩', label: 'Based In' },
  ] as { value: string; label: string; flag?: string }[],

  techStack: [
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Docker', icon: 'docker' },
    { name: 'PHP', icon: 'php' },
    { name: 'Laravel', icon: 'laravel' },
    { name: 'Git', icon: 'git' },
  ] as { name: string; icon: TechIcon }[],

  currently: ['Building cool projects', 'Open for opportunities', 'Exploring new tech', 'Gaming sometimes'],

  // Add verified profile URLs. Icons with an empty href are not rendered.
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/yohanesrioirsan' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/yohanes-rio-irsan-872689206/' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/yohanesrioirsan' },
    { label: 'Threads', icon: 'threads', href: 'https://www.threads.com/@yohanesrioirsan' },
  ] as { label: string; icon: SocialIcon; href: string }[],
};
