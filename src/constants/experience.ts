import { marked } from 'marked';
import type { Experience, Education } from '@/types';
import NextJS from '@/components/icons/NextJS.astro';
import TypeScript from '@/components/icons/TypeScript.astro';
import Tailwind from '@/components/icons/Tailwind.astro';

function parseMarkdownSync(md: string): string {
  return marked.parse(md) as string;
}

export const experience: Experience[] = [
  {
    date: 'October 2024 - Present',
    title: 'Frontend Engineer at LinkAmericaLabs',
    company: 'Project: Heart Beam',
    description: parseMarkdownSync(`
**Objective:** Advanced patient monitoring platform.

**Key Achievements:**
- Real-time data optimization and medical service synchronization.
- Redesigned React architecture, improving interactivity and reducing render time by 45%.
- Migration to React Server Components for better performance.
    `),
    link: 'https://linkamericalabs.com',
    stack: [
      { name: 'Next.js', icon: NextJS },
      { name: 'TypeScript', icon: TypeScript },
      { name: 'Tailwind', icon: Tailwind },
    ],
  },
  {
    date: 'October 2024 - December 2024',
    title: 'Frontend Engineer at LinkAmericaLabs',
    company: 'Project: Sagicor',
    description: parseMarkdownSync(`
**Objective:** Automated data analysis solution.

**Key Achievements:**
- Scalable architecture, increasing efficiency by 70%.
- CI/CD with GitHub Actions for continuous deployment.
- UX/UI improvements, reducing errors and onboarding time.
    `),
    link: 'https://linkamericalabs.com',
    stack: [
      { name: 'Next.js', icon: NextJS },
      { name: 'TypeScript', icon: TypeScript },
      { name: 'Tailwind', icon: Tailwind },
    ],
  },
];

export const education: Education[] = [
  {
    date: '2025 - 2028',
    title: "Bachelor's Degree in Computer Engineering",
    company: 'ULACIT',
    description: 'Focus on software engineering, algorithms, and systems design. Developed strong foundations in computer science and participated in tech clubs and hackathons.'
  },
  {
    date: '2019 - 2024',
    title: 'Technical High School in Web Development',
    company: 'Don Bosco Technical High School',
    description: 'Specialized in web development, learning HTML, CSS, JavaScript, and backend basics. Built several web projects and collaborated in team environments.'
  },
];
