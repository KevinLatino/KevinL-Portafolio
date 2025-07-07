import type { Project, Tag } from '@/types';
import NextJS from '@/components/icons/NextJS.astro';
import Tailwind from '@/components/icons/Tailwind.astro';

export const TAGS: Record<string, Tag> = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextJS,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: Tailwind,
  },
} as const;

export const projects: Project[] = [
  {
    title: 'BuildMyEvent - Event Platform',
    description:
      'No-code platform for creating event pages and selling NFT-based tickets on Base blockchain. Winner of Base LATAM Buildathon 2024.',
    link: 'https://buildmyevent.xyz',
    github: 'https://github.com/kevinlatino',
    image: '/images/BuildMyEvent.png',
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];
