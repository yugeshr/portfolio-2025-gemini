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
    id: 'memo-io-multiplayer-game',
    title: 'memo.io — A Real-Time \nMultiplayer Memory Game',
    role: 'Product Designer, Solo Build',
    timeline: '1 Week',
    platform: 'Web / Discord Activity',
    company: 'Personal Project',
    tags: ['AI-Assisted Build', 'Real-Time Multiplayer', 'Personal Project'],
    description: 'Designed and solo-built a real-time multiplayer memory game — from written brief to a production Discord Activity — using Claude as an AI development partner.',
    overview: `As a product designer, most of what I ship lives in Figma — flows, prototypes, specs handed off to engineering. I wanted to prove I could take an idea all the way to a real, technically complex, production product on my own — not a static mockup, but something people could actually play together in real time.

I designed and built memo.io, a real-time multiplayer memory-matching game, using Claude as an AI development partner across the entire stack — a Socket.io backend, a React frontend, anti-cheat game logic, three game modes, six visual themes, and a native Discord Activity integration — then shipped it to production.`,
    challenge: "Most designer portfolios stop at high-fidelity mockups. There's rarely a way to show whether a designer actually understands what it takes to make something real — state management, real-time sync, server authority, deployment — the parts that decide whether a product actually works.",
    solution: 'I designed and built the entire system myself — real-time architecture, anti-cheat logic, three game modes, six card themes, and a native Discord Activity — shipping it to production as a working proof of both product thinking and execution.',
    goalsLabel: 'The Goal',
    goalsTitle: 'A Real Product, Not Just a Prototype',
    goalsDescription: "To prove design thinking translates into working software, I focused on four things a portfolio mockup can't show: real-time architecture, competitive integrity, replayability, and reach beyond a single browser tab.",
    goals: [
      {
        title: 'Real-Time Multiplayer Architecture',
        description: 'Every player races on their own grid, synced by a Socket.io backend with sub-second updates — no turns, no polling, no lag.',
      },
      {
        title: 'Competitive Integrity by Design',
        description: 'The server never sends the full deck to any client — only per-flip reveals, rate-limiting, and index validation. Anti-cheat is architecture, not an afterthought.',
      },
      {
        title: 'Replayability Through Modes & Themes',
        description: 'Three formats — Quick, League, and Powers (with offensive power-ups) — across six visual themes, from emoji to Dota 2 heroes.',
      },
      {
        title: 'Cross-Platform Reach',
        description: 'Shipped as a native Discord Activity, playable directly inside a voice channel — not just a standalone website.',
      }
    ],
    processLabel: 'The Process',
    processTitle: 'How It Actually Got Built',
    processDescription: "Not a weekend hackathon demo — a deliberate build, scoped like a real feature and shipped like one.",
    processSteps: [
      {
        title: 'Started With a Written Brief',
        description: "Rather than jumping straight into code, I wrote a full product brief first — session flow, game mechanics, live leaderboard behavior, and technical architecture — the same way I'd scope a feature for engineering.",
      },
      {
        title: 'Built and Iterated With Claude',
        description: 'In just one week and over 100 commits, I used Claude as a hands-on development partner — building the Socket.io backend, the React frontend, and iterating through game modes, power-ups, card themes, and a full Discord Activity integration.',
      },
      {
        title: 'Shipped to Production',
        description: 'The game runs on a Vercel-hosted frontend and a Railway-hosted real-time backend — including, most recently, a live infrastructure migration to a new hosting account with zero disruption to players.',
      }
    ],
    imageUrl: getAssetPath('images/memo-io-gameplay.png'),
    thumbnailUrl: getAssetPath('images/memo-io-home.png'),
    liveUrl: 'https://memo-io.vercel.app',
    liveUrlText: 'Play memo.io Live',
    galleryLabel: 'Visuals',
    galleryTitle: 'From Brief to Build: Live Product Screens',
    galleryDescription: 'These are real screens from the deployed game, not mockups — every state shown here is running in production. More gameplay and Discord Activity screens coming soon.',
    galleryImages: [
      { url: getAssetPath('images/memo-io-home.png'), caption: 'The landing screen: pick an avatar, name yourself, and create or join a session — no account needed.' },
      { url: getAssetPath('images/memo-io-lobby.png'), caption: 'The lobby: the host picks difficulty, card theme, and one of three game modes before everyone readies up.' },
      { url: getAssetPath('images/memo-io-gameplay.png'), caption: 'Live gameplay: every player races on their own grid while the sidebar tracks real-time standings.' },
    ],
    outcomeDetailsTitle: 'What Shipped',
    outcomeDetailsIntro: 'memo.io went from a one-page brief to a fully working, production-deployed product — real-time multiplayer, three game modes, and a native Discord Activity integration, built solo with AI as a development partner.',
    outcomeDetails: [
      { title: '100+ Commits, 1 Week', description: 'From a written product brief to a fully shipped, production-deployed game.' },
      { title: '3 Game Modes', description: 'Quick, League (best-of series with round history), and Powers (offensive power-ups).' },
      { title: '6 Card Themes', description: 'Emoji, playing cards, flags, zodiac, Pokémon, and Dota 2 heroes.' },
      { title: 'Live on Web + Discord', description: 'Deployed on Vercel and Railway, playable directly inside a Discord Activity.' },
    ],
  },
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
    userResearch: {
      title: 'Who Are The Users?',
      description: 'Based on the initial user interviews with product owners, we identified key expectations and usage patterns that would guide our design direction:',
      points: [
        { title: 'Familiar Tools', description: 'Users were accustomed to enterprise tools like MS Excel, MS Teams, and MS Outlook — all of which rely heavily on manual data entry and dense interfaces.' },
        { title: 'Pain Points', description: 'The repetitive and rigid nature of these tools made workflows feel tedious and overwhelming.' },
        { title: 'Design Opportunity', description: 'There was a clear need for a more modern, refreshing interface — one that simplifies information input while offering a clean, user-friendly visual structure.' }
      ]
    },
    designSystem: {
      title: 'Introducing Design System',
      description: 'A Design System is a set of interconnected patterns and shared practices coherently organized. Design Systems aid in digital product design and development of products such as apps or websites.\n\nThe system can be broken down into different types based on the need of the product',
      points: [
        { title: 'Atomic', icon: 'atom' },
        { title: 'Molecular', icon: 'molecule' },
        { title: 'Organism', icon: 'organism' },
        { title: 'Template', icon: 'template' }
      ]
    },
    buildingDesignSystem: {
      title: 'BUILDING THE DESIGN SYSTEM',
      description: 'We choose atomic & molecular design systems as they act as an independent lego blocks which can be used and also provides us full control over the visual treatment of the platform we are building.',
      points: [
        { title: 'Atomic', icon: 'atom' },
        { title: 'Molecular', icon: 'molecule' }
      ],
      secondaryDescription: 'The first step of building a design system involves in creating a checklist of all the components that might be used in the platform.\nAn Atomic-level component is the smallest component in the design system followed my Molecular-level component which can be used to create dynamic and scalable screen designs.'
    },
    atomicComponents: {
      title: 'Atomic Components',
      subtitle: 'LAYOUT',
      description: 'A layout consists of three main components that allow users to recognise any design. Setting up layout in the first step helps us in creating wireframes for respective products.\n\nThis process helped the client to visualize their product and the outcome of how the design system would impact the visual layout.',
      tags: ['Improved balance', 'Clear visibility', 'Clean visuals'],
      images: [
        getAssetPath('images/ramco-atomic-1.png'),
        getAssetPath('images/ramco-atomic-2.png'),
        getAssetPath('images/ramco-atomic-3.png'),
        getAssetPath('images/ramco-atomic-4.png'),
        getAssetPath('images/ramco-atomic-5.png'),
        getAssetPath('images/ramco-atomic-6.png'),
        getAssetPath('images/ramco-atomic-7.png')
      ],
      mainImage: getAssetPath('images/ramco-components.png')
    },
    processSteps: [
      {
        title: 'Foundation: Grid & Spacing',
        description: 'We followed a free-flowing 8-point grid system which provides us the freedom to align elements adjacent to each other. We used a Twelve column grid structure similar to Bootstrap with sixteen pixels gutter.',
      },
      {
        title: 'Typography',
        description: 'We wanted to go for an open-source typeface that provides premium look and feel to the application, here information is weighed more than the aesthetic preference.\n\nBy using Modular Scale, we were able to structure the respective heading tags and other font sizes that are required based on the needs of the application.',
        imageUrl: getAssetPath('images/ramco-typography.png')
      },
      {
        title: 'Color Palette',
        description: 'A total of 48 different colors were introduced for specific purposes, ensuring a consistent and accessible visual language across the platform.',
        imageUrl: getAssetPath('images/ramco-colors.png')
      },
      {
        title: 'Molecular Components',
        description: 'Molecular components are created with several combinations of atomic components that we defined earlier. These components can also be considered atomic level based on how small it is compared to a large molecular component.'
      },
      {
        title: 'Buttons',
        description: 'A button is an action element that allows a user to decide at a crucial point of the navigation or a flow. The color contrast of the button follows WCAG guidelines for accessibility to support users with different accessibility issues.'
      },
      {
        title: 'Textbox',
        description: 'Textboxes are the most essential components when it comes to data entry and forms, the component is composed of Text Area, Title label, Underline caption, Iconography.\n\nThe spacing between the elements is measured at 8px in order to create a uniform structure with respect to free flowing eight point grid system.',
        imageUrl: getAssetPath('images/ramco-textbox.png')
      }
    ],
    outcome: 'Improved user comprehension through better visual hierarchy and established a scalable design language. I got a clear idea how a design system is very important and an integral part of any product and how it could impact the scalability and visual design of the platform in the future.',
    imageUrl: getAssetPath('images/ramco-redesign-v2.png'),
    thumbnailUrl: getAssetPath('images/ramco-thumbnail.png'),
    galleryImages: [
      { url: getAssetPath('images/ramco-dashboard-leave.png'), caption: 'Employee Dashboard: Leave Balance & Quick Actions' },
      { url: getAssetPath('images/ramco-leave-calendar.png'), caption: 'Leave Calendar: Team Availability View' },
      { url: getAssetPath('images/ramco-holiday-mapping.png'), caption: 'Holiday Mapping: Location-based Configuration' },
      { url: getAssetPath('images/ramco-holiday-master.png'), caption: 'Holiday Master: Global Holiday Management' },
      { url: getAssetPath('images/ramco-employee-profile.png'), caption: 'Employee Profile: Family Information Management' },
      { url: getAssetPath('images/ramco-qualification-master.png'), caption: 'Qualification Master: Educational Records Setup' }
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
    company: 'Vectramind',
    period: 'Jan 2026 - Present',
    description: 'Leading design initiatives for enterprise scalability for Healthcare & Communication domain.'
  },
  {
    id: '2',
    role: 'Senior Product Designer',
    company: 'Auzmor',
    period: 'Jun 2022 - Jun 2025',
    description: 'Led major design initiatives across Auzmor’s Employee Experience Suite. Rose from Associate to Senior Product Designer, contributing to the LMS platform\'s growth from zero-to-one features to enterprise scalability.'
  },
  {
    id: '3',
    role: 'Associate Senior UI/UX Designer',
    company: 'Lollypop Design Studio',
    period: 'Sep 2019 - Dec 2021',
    description: 'Delivered high-quality UI/UX solutions for diverse clients including Hexaware, Cisco, and Intel. Progressed from Associate to Associate Senior Designer, mentoring junior designers and leading project deliverables.'
  },
  {
    id: '4',
    role: 'Web Development Intern',
    company: 'Sentinel Radiology Solutions',
    period: 'Dec 2017 - Mar 2018',
    description: 'Sentinel Radiology Solutions is a Tele-healthcare startup with over 70 clients across various geographical boundaries.'
  },
  {
    id: '5',
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