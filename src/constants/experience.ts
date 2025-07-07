import { marked } from 'marked';
import type { Experience, Education } from '@/types';

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
  },
];

export const education: Education[] = [
  {
    date: '2025 - 2028',
    title: "Bachelor's Degree in Computer Engineering",
    company: 'ULACIT',
  },
  {
    date: '2019 - 2024',
    title: 'Technical High School in Web Development',
    company: 'Don Bosco Technical High School',
  },
];
