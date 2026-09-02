export interface Project {
  id: string;
  title: string;
  role: string;
  timeline?: string;
  platform?: string;
  company?: string;
  tags: string[];
  description: string; // Brief overview
  overview?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  link?: string;
  ctaText?: string;
  liveUrl?: string;
  liveUrlText?: string;
  isGallery?: boolean; // For the Concept Exploration project
  problemPoints?: { title: string; description: string }[];
  userResearch?: {
    title: string;
    description: string;
    points: { title: string; description: string }[];
  };
  designSystem?: {
    title: string;
    description: string;
    points: { title: string; icon: string }[];
  };
  buildingDesignSystem?: {
    title: string;
    description: string;
    points: { title: string; icon: string }[];
    secondaryDescription: string;
  };
  atomicComponents?: {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    images: string[];
    mainImage?: string;
  };
  goalsLabel?: string;
  goalsTitle?: string;
  goalsDescription?: string;
  goals?: { title: string; description: string; imageUrl?: string }[];
  outcomeDetailsTitle?: string;
  outcomeDetailsIntro?: string;
  outcomeDetails?: { title: string; description: string }[];
  processLabel?: string;
  processTitle?: string;
  processDescription?: string;
  processSteps?: { title: string; description: string; imageUrl?: string }[];
  galleryLabel?: string;
  galleryTitle?: string;
  galleryDescription?: string;
  galleryImages?: { url: string; caption?: string }[];
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
