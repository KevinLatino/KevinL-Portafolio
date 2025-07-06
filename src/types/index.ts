// Project types
export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  tags: Tag[];
}

// Community project types
export interface CommunityProject {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  tags: string[];
}

// Experience types
export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
}

// Education types
export interface Education {
  date: string;
  title: string;
  company: string;
  description?: string;
}

// Tag types
export interface Tag {
  name: string;
  class: string;
  icon: any; // Astro component type
}

// Social link types
export interface SocialLink {
  href: string;
  icon: any; // Astro component type
  label: string;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
