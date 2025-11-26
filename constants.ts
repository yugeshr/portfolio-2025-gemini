import { Project, ExperienceItem, SocialLink, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const CLIENTS = [
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Texas Instruments', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Texas_Instruments_logo_-_stacked.svg/1200px-Texas_Instruments_logo_-_stacked.svg.png' },
  { name: 'Grepsr', logo: 'https://assets.grepsr.com/grepsr-logo-dark.svg' }, // Fallback text if needed
  { name: 'Ramco', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Ramco_Systems_logo.svg' },
  { name: 'Indiamart', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Indiamart_logo.svg' },
  { name: 'Ducen', logo: 'https://ducenit.com/images/logo-light.png' }, // Placeholder
];

export const PERSONAL_GALLERY = [
  { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', alt: 'Mountains' },
  { id: 2, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop', alt: 'Nature' },
  { id: 3, url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop', alt: 'Travel' },
  { id: 4, url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop', alt: 'Photography' },
  { id: 5, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', alt: 'Landscape' },
  { id: 6, url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop', alt: 'Adventure' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Auzmor Learn Mentorship System',
    role: 'Product Designer',
    timeline: '6 Months',
    tags: ['UX Strategy', 'Enterprise SaaS', 'Zero-to-One'],
    description: 'Expanding the LMS ecosystem to support scalable, goal-driven relationships between employees.',
    challenge: 'Auzmor Learn needed to expand its LMS ecosystem to support scalable, goal-driven relationships between employees. The existing experience lacked a structured way for organizations to facilitate mentorship, resulting in informal, untracked, and often ineffective coaching.',
    solution: 'I led the end-to-end design of a comprehensive Mentorship System. I identified the need for Admin-assigned and Self-volunteered pairing models, created a "Goal & Milestone" framework, and designed tools for content sharing and feedback loops.',
    outcome: 'Successfully rolled out to enterprise clients as a core LMS feature with high adoption rates. Admins reported significantly reduced setup time for launching new mentorship programs.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: '2',
    title: 'Ramco Systems Legacy Redesign',
    role: 'UI Designer',
    timeline: '6 Months',
    tags: ['Legacy Modernization', 'Design Systems', 'Visual Design'],
    description: 'Transforming a 13-year-old legacy platform into a modern, approachable interface without losing data density capabilities.',
    challenge: 'Ramco’s platform suffered from "data clutter" and high-density forms with poor hierarchy, leading to significant user friction.',
    solution: 'I crafted a next-generation visual experience using an Atomic Design System as "Lego blocks" for consistency. I implemented a free-flowing 8-point grid system to improve scanability and shifted the aesthetic to a modern interface.',
    outcome: 'Improved user comprehension through better visual hierarchy and established a scalable design language that the dev team could reuse for future modules.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
  },
  {
    id: '3',
    title: 'UI & Concept Exploration',
    role: 'Visual Designer',
    tags: ['Spatial UI', 'Prototyping', 'Mobile App'],
    description: 'A collection of forward-thinking concepts exploring the future of interfaces, from Vision Pro spatial UI to minimal utility apps.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000',
    isGallery: true
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Product Designer',
    company: 'Confidential / Enterprise',
    period: 'Present',
    description: 'Leading UX strategy for complex enterprise software, focusing on scalable design systems and legacy modernization.'
  },
  {
    id: '2',
    role: 'Product Designer',
    company: 'Auzmor',
    period: 'Previous',
    description: 'Led end-to-end design for LMS features including the Mentorship System. Collaborated closely with engineering to ship zero-to-one products.'
  },
  {
    id: '3',
    role: 'UI Designer',
    company: 'Ramco Systems',
    period: 'Previous',
    description: 'Worked on modernizing legacy ERP systems, creating atomic design libraries, and improving visual hierarchy for high-density data interfaces.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Yugesh is a hardworking and proactive professional who consistently goes the extra mile. His expertise from building a website to creating Design Systems is in-depth. I'm happy to recommend him for his future endeavors.",
    author: "Former Manager",
    role: "Senior Design Lead"
  },
  {
    id: '2',
    quote: "Working with him was nothing short of professional. He is very good at UI design and can work independently or as part of a team.",
    author: "Client",
    role: "Teleradiology Company"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yugeshralli', label: 'LinkedIn' },
  { platform: 'Dribbble', url: 'https://dribbble.com/yugeshralli', label: 'Dribbble' },
  { platform: 'Email', url: 'mailto:hello@yugeshralli.in', label: 'Email' },
];

export const CORE_COMPETENCIES = [
  {
    title: "Enterprise UX",
    desc: "Simplifying complex B2B workflows."
  },
  {
    title: "Design Systems",
    desc: "Atomic & molecular design for consistency."
  },
  {
    title: "Prototyping",
    desc: "High-fidelity interactions & Spatial UI."
  },
  {
    title: "Collaboration",
    desc: "Cross-functional leadership."
  }
];