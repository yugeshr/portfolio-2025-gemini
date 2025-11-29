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
    title: 'Scalable Mentorship for Auzmor Learn',
    role: 'Senior Product Designer',
    timeline: '6 Months',
    tags: ['UX Strategy', 'Enterprise SaaS', 'Zero-to-One'],
    description: 'Expanding the LMS ecosystem to support scalable, goal-driven relationships between employees.',
    overview: 'I led the end-to-end design of a structured Mentorship System in Auzmor Learn to enable scalable, goal-driven relationships between mentors and mentees. Initiated in collaboration with Amazon, this feature supported training, feedback, and growth tracking across organizations — with custom workflows for admins, mentors, and learners.',
    challenge: 'LMS lacked a structured framework for scalable mentorship, resulting in informal, untracked, and ineffective coaching relationships between employees.',
    goals: [
      {
        title: 'Define Goals & Milestones',
        description: 'Admins can set up structured programs with clear objectives, timelines, and success criteria to ensure mentorship is purposeful.',
        imageUrl: getAssetPath('images/gallery/photo-1.png')
      },
      {
        title: 'Pair Mentors and Mentees',
        description: 'Flexible matching algorithms allow admins to assign mentors or let employees self-select based on skills and career aspirations.',
        imageUrl: getAssetPath('images/gallery/photo-2.jpg')
      },
      {
        title: 'Enable Content Sharing, Meeting Notes & Feedback',
        description: 'A dedicated workspace for mentors and mentees to share resources, track meeting outcomes, and provide continuous feedback.',
        imageUrl: getAssetPath('images/gallery/photo-3.jpg')
      },
      {
        title: 'Give Admins Full Visibility',
        description: 'Comprehensive dashboards provide real-time insights into program health, engagement levels, and skill development progress.',
        imageUrl: getAssetPath('images/gallery/photo-4.jpg')
      }
    ],
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000', caption: 'Mentorship Dashboard Overview' },
      { url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000', caption: 'Goal Setting & Tracking Interface' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000', caption: 'Mentor-Mentee Matching Flow' },
      { url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2000', caption: 'Feedback & Session Notes' }
    ],
    solution: 'Led the end-to-end design of a comprehensive Mentorship System, introducing flexible pairing models (admin-assigned and self-volunteered), a structured "Goal & Milestone" framework, and integrated feedback loops.',
    outcome: 'Successfully rolled out to enterprise clients as a core LMS feature with high adoption rates. Admins reported significantly reduced setup time for launching new mentorship programs.',
    outcomeDetails: [
      { title: 'Increased Visibility', description: 'Stakeholders could now view skill progress, feedback summaries, and meeting engagement.' },
      { title: 'Structured Growth', description: 'Employees had clear paths for development with tracked milestones.' },
      { title: 'Scalable Pairing', description: 'Admins could easily manage thousands of mentorship connections.' },
      { title: 'High Adoption', description: 'Rapid uptake by enterprise clients including Amazon.' }
    ],
    imageUrl: getAssetPath('images/auzmor-mentorship.png'),
  },
  {
    id: '2',
    title: 'Ramco Systems Redesign with Design System',
    role: 'UI Designer',
    timeline: '6 Months',
    tags: ['Legacy Modernization', 'Design Systems', 'Visual Design'],
    description: 'Transforming a 13-year-old legacy platform into a modern, approachable interface without losing data density capabilities.',
    challenge: 'Ramco\'s B2B dashboards were unstructured resulting in a steep learning curve due to unclear hierarchy and complex dependencies.',
    solution: 'Crafted a modern visual experience using an Atomic Design System and 8-point grid for consistency and scanability.',
    outcome: 'Improved user comprehension through better visual hierarchy and established a scalable design language that the dev team could reuse for future modules.',
    imageUrl: getAssetPath('images/ramco-redesign-v2.png'),
  },
  {
    id: '3',
    title: 'UI & Concept Exploration',
    role: 'Visual Designer',
    tags: ['Exploration', 'Ideas', 'Concepts'],
    description: 'A collection of forward-thinking concepts exploring the design space of interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000',
    link: 'https://dribbble.com/yugeshralli',
    ctaText: 'View Other Designs',
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