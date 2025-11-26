export interface Project {
  id: string;
  title: string;
  role: string;
  timeline?: string;
  tags: string[];
  description: string; // Brief overview
  overview?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  imageUrl: string;
  link?: string;
  isGallery?: boolean; // For the Concept Exploration project
  problemPoints?: { title: string; description: string }[];
  goals?: string[];
  outcomeDetails?: { title: string; description: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}
