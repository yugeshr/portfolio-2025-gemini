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
  // Ensure path starts with / for proper URL resolution
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
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

export const PROJECTS: Array<Project> = [
  {
    id: 'scalable-mentorship-auzmor',
    title: 'Scalable Mentorship for \nAuzmor Learn',
    role: 'Senior Product Designer',
    timeline: '6 Months',
    tags: ['UX Strategy', 'Enterprise SaaS', 'Zero-to-One'],
    description: 'Expanding the LMS ecosystem to support scalable, goal-driven relationships between employees.',
    overview: `Many enterprise teams struggled to run structured mentorship programs with clear goals. Information was scattered across tools, expectations were unclear, and progress was almost impossible to track in one place.

I designed a scalable Mentorship System inside Auzmor Learn that brought everything together in a single flow. The solution introduced clear goals for every mentorship, consistent training paths, built-in feedback, and transparent progress tracking. It also provided dedicated experiences for admins, mentors, and learners to keep the entire program organized and easy to manage.`,
    challenge: 'LMS lacked a structured framework for scalable mentorship, resulting in informal, untracked, and ineffective coaching relationships between employees.',
    solution: 'The solution introduced clear goals for every mentorship, consistent training paths, built-in feedback, and transparent progress tracking. It also provided dedicated experiences for admins, mentors, and learners to keep the entire program organized and easy to manage.',
    goals: [
      {
        title: 'Define Goals & Milestones',
        description: 'Admins can set up structured programs with clear objectives, timelines, and success criteria to ensure mentorship is purposeful.',
        imageUrl: getAssetPath('images/gallery/goal-2.png')
      },
      {
        title: 'Pair Mentors and Mentees',
        description: 'Flexible matching algorithms allow admins to assign mentors or let employees self-select based on skills and career aspirations.',
        imageUrl: getAssetPath('images/gallery/goal-1.png')
      },
      {
        title: 'Enable Content Sharing, Meeting Notes & Feedback',
        description: 'A dedicated workspace for mentors and mentees to share resources, track meeting outcomes, and provide continuous feedback.',
        imageUrl: getAssetPath('images/gallery/goal-3.png')
      },
      {
        title: 'Give Admins Full Visibility',
        description: 'Admins could easily manage thousands of mentorship connections.',
        imageUrl: getAssetPath('images/gallery/goal-4.png')
      }
    ],
    imageUrl: getAssetPath('images/auzmor-mentorship-hero.png'),
    thumbnailUrl: getAssetPath('images/auzmor-mentorship-thumbnail.png'),
    outcome: 'The Mentorship Platform was successfully rolled out to enterprise clients, becoming a core part of the LMS ecosystem. It facilitated structured goal setting and improved mentor-mentee engagement.',
    galleryImages: [
      { url: getAssetPath('images/gallery/program-creation.png'), caption: 'Admins can easily create and structure mentorship programs with defined goals and timelines.' },
      { url: getAssetPath('images/gallery/mentee-profile.png'), caption: 'Mentors get a comprehensive view of their mentees, including their skills, goals, and progress.' },
      { url: getAssetPath('images/gallery/milestone-details.png'), caption: 'Clear milestones help track progress and ensure the mentorship stays on course.' },
      { url: getAssetPath('images/gallery/mentorship-analytics.png'), caption: 'Detailed analytics provide insights into program engagement and effectiveness.' }
    ],
  },
  {
    id: 'ramco-systems-redesign',
    title: 'Ramco Systems Redesign with Design System',
    role: 'UI Designer',
    timeline: '6 Months',
    tags: ['Design Systems', 'Prototyping', 'Legacy Modernization'],
    description: 'Transforming a 13-year-old legacy platform into a modern, approachable interface without losing data density capabilities.',
    overview: 'The platform being a legacy application serving them for more than thirteen years and the application is built with the help of automation code. The application involves high data entry and form field structure with few call to actions to guide the user.',
    challenge: 'The application is purely built on automation code depending on the mental model of the user with high learning curve. There was no clear information hierarchy or visual structure being used the application. The users wanted a more modern way of information representation with a clean interface.',
    solution: 'We choose atomic & molecular design systems as they act as an independent lego blocks which can be used and also provides us full control over the visual treatment of the platform we are building.',
    problemPoints: [
      { title: 'High Learning Curve', description: 'The application is purely built on automation code depending on the mental model of the user.' },
      { title: 'No Visual Hierarchy', description: 'There was no clear information hierarchy or visual structure being used in the application.' },
      { title: 'Familiar Tools', description: 'Users were accustomed to enterprise tools like MS Excel, MS Teams, and MS Outlook — all of which rely heavily on manual data entry.' }
    ],
    userResearch: {
      title: 'Who Are The Users?',
      description: 'Based on the initial user interviews with product owners, we identified key expectations and usage patterns that would guide our design direction:',
      points: [
        { title: 'Familiar Tools', description: 'Users were accustomed to enterprise tools like MS Excel, MS Teams, and MS Outlook — all of which rely heavily on manual data entry and dense interfaces.' },
        { title: 'Pain Points', description: 'The repetitive and rigid nature of these tools made workflows feel tedious and overwhelming.' },
        { title: 'Design Opportunity', description: 'There was a clear need for a more modern, refreshing interface — one that simplifies information input while offering a clean, user-friendly visual structure.' }
      ]
    },
    processSteps: [
      {
        title: 'Foundation: Grid & Spacing',
        description: 'We followed a free-flowing 8-point grid system which provides us the freedom to align elements adjacent to each other. We used a Twelve column grid structure similar to Bootstrap with sixteen pixels gutter.',
        imageUrl: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Grid+System'
      },
      {
        title: 'Typography & Color',
        description: 'We chose an open-source typeface for a premium look. By using Modular Scale, we structured heading tags. A total of 48 different colors were introduced for specific purposes.',
        imageUrl: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Typography+%26+Color'
      },
      {
        title: 'Atomic Components',
        description: 'A layout consists of three main components that allow users to recognise any design. Setting up layout in the first step helps us in creating wireframes for respective products.',
        imageUrl: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Atomic+Components'
      },
      {
        title: 'Molecular Components',
        description: 'Molecular components are created with several combinations of atomic components. Buttons follow WCAG guidelines for accessibility. Textboxes use an 8-point grid for uniform structure.',
        imageUrl: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Molecular+Components'
      }
    ],
    outcome: 'Improved user comprehension through better visual hierarchy and established a scalable design language. I got a clear idea how a design system is very important and an integral part of any product and how it could impact the scalability and visual design of the platform in the future.',
    imageUrl: getAssetPath('images/ramco-redesign-v2.png'),
    galleryImages: [
      { url: getAssetPath('images/ramco-redesign.png'), caption: 'Legacy Interface vs New Direction' },
      { url: getAssetPath('images/ramco-redesign-v2.png'), caption: 'Modernized Dashboard Interface' },
      { url: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Component+Library', caption: 'Comprehensive Component Library' },
      { url: 'https://placehold.co/800x600/1a1a1a/ffffff?text=Design+Guidelines', caption: 'Strict Design Guidelines for Consistency' }
    ]
  },
  {
    id: 'ui-concept-exploration',
    title: 'UI & Concept Exploration',
    role: 'Visual Designer',
    tags: ['Exploration', 'Ideas', 'Concepts'],
    description: 'A collection of forward-thinking concepts exploring the design space of interfaces.',
    imageUrl: getAssetPath('images/ui-concept-thumbnail.png'),
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