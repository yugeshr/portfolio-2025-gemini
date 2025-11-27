/// <reference types="vite/client" />
import { Project, ExperienceItem, SocialLink, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// Helper to handle base path for assets
const getAssetPath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

export const CLIENTS = [
  { name: 'Intel', logo: getAssetPath('logos/intel.png') },
  { name: 'Cisco', logo: getAssetPath('logos/cisco.png') },
  { name: 'Ramco Systems', logo: getAssetPath('logos/ramco.png') },
  { name: 'Hexaware', logo: getAssetPath('logos/hexaware.png') },
  { name: 'Grepsr', logo: getAssetPath('logos/grepsr.png') },
  { name: 'Indiamart', logo: getAssetPath('logos/indiamart.png') },
  { name: 'Firstpass', logo: getAssetPath('logos/firstpass.png') },
  { name: 'Colandian', logo: getAssetPath('logos/colandian.png') },
  { name: 'Duoveo', logo: getAssetPath('logos/duoveo.png') },
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
    title: 'Auzmor Learn',
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
    title: 'Ramco Systems',
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
    company: 'Auzmor',
    period: 'Jun 2022 - Jun 2025',
    description: 'Led major design initiatives across Auzmor’s Employee Experience Suite. Rose from Associate to Senior Product Designer, contributing to the LMS platform\'s growth from zero-to-one features to enterprise scalability.'
  },
  {
    id: '2',
    role: 'Associate Senior UI/UX Designer',
    company: 'Lollypop Design Studio',
    period: 'Sep 2019 - Dec 2021',
    description: 'Delivered high-quality UI/UX solutions for diverse clients including Hexaware, Cisco, and Intel. Progressed from Associate to Associate Senior Designer, mentoring junior designers and leading project deliverables.'
  },
  {
    id: '3',
    role: 'Web Development Intern',
    company: 'Sentinel Radiology Solutions',
    period: 'Dec 2017 - Mar 2018',
    description: 'Sentinel Radiology Solutions is a Tele-healthcare startup with over 70 clients across various geographical boundaries.'
  },
  {
    id: '4',
    role: 'Creative Designer',
    company: 'IMPRESSED EVENTZ',
    period: 'Feb 2016 - Feb 2017',
    description: 'Designed creative assets for events and marketing materials.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "What I appreciated most was his ability to get it. Whether it was a vague product idea, a messy user flow, or last-minute feedback before a demo, Yugesh always came through with thoughtful designs that looked great and worked even better. No fluff, no ego; Just solid, user-first design thinking.",
    author: "Taran Anand",
    role: "Product Manager at SaaS Labs"
  },
  {
    id: '2',
    quote: "This guy is very hardworking and extremely talented individual and has demonstrated a high level of professionalism, integrity and commitment. He is very good at UI design and can work independently or as part of a team.",
    author: "Dr. Priya L",
    role: "Professor at Rajalakshmi Engineering College"
  },
  {
    id: '3',
    quote: "Yugesh is an aspiring designer, quick learner and smart worker. We have worked together in many projects. His expertise from building a website to creating Design system he is in depth. I'm happy to recommend Yugesh for his future endeavors.",
    author: "Shrivathsan G R",
    role: "Lead Product Designer at Facilio"
  },
  {
    id: '4',
    quote: "Mr. Yugesh is part of the team that developed the software for my teleradiology company. My experience of working with him was nothing short of professional. While he was a reliable and fast worker, what impressed me the most was the dedication he showed to meeting the time frame I had set for them and his ability to come up with creative solutions to the glitches we came across. Also to be mentioned is that he worked through his vacation time!",
    author: "Haree Shankar Meganathan",
    role: "Vice Chairman at Rajalakshmi Institutions"
  },
  {
    id: '5',
    quote: "Yugesh is a hardworking and proactive professional who consistently goes the extra mile in everything he does. His creativity and dedication really stand out, bringing fresh ideas and great attention to detail to every product. More than just skilled, Yugesh is a fantastic team player - always ready to support others and collaborate to get the best results. His positive energy and commitment make a real difference, and I’m sure he’ll keep making a strong impact wherever he goes.",
    author: "Mandeep Singh",
    role: "Principal Product Manager at Auzmor"
  },
  {
    id: '6',
    quote: "Yugesh is a really creative UI designer. He is equipped with good visual design and coding skills. He is able to bring in best results while meeting the deadlines. He is a team player and at the same time is efficient enough to manage a project by himself",
    author: "Susan Noby",
    role: "Product Designer at Booking.com"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/yugeshralli', label: 'LinkedIn' },
  { platform: 'Dribbble', url: 'https://dribbble.com/yugeshralli', label: 'Dribbble' },
  { platform: 'Email', url: 'mailto:yugeshr16@gmail.com', label: 'Email' },
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