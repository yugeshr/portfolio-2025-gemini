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
    id: 'clan-fitness-social-accountability',
    title: 'Clan Fitness: accountability \nfor small groups',
    role: 'Product Designer, Solo Build',
    timeline: '17 Days to Launch',
    platform: 'Mobile Web / PWA',
    company: 'Personal Project',
    tags: ['Zero-to-One', 'Social Product', 'Personal Project'],
    description: 'A fitness app for small groups of friends, built to replace a WhatsApp group that had stopped working. Members log their gym, steps, and food each day, and the group can see who skipped.',
    overview: `It started in a WhatsApp group. My friends and I posted gym check-ins, step-count screenshots, and meal photos to keep each other going. The updates got buried under the rest of the chat, nobody could tell who had been consistent that week, and when someone skipped a day, no one noticed.

So I designed and built Clan Fitness. A group of up to 15 people forms a clan. Everyone logs their gym, steps, and food each day, reacts to each other's check-ins, and competes on a weekly leaderboard. I shipped the first version in 17 days, and real groups have used it since.`,
    challenge: "Most fitness apps are built for one person or for a crowd of strangers. A solo tracker is easy to ignore, and a public community won't notice if you skip. What kept my friends and me consistent was a small group of people we knew. A group chat gave us that, but it couldn't track streaks or show at a glance who had logged today.",
    solution: "The core of the app is a daily log that takes a few seconds to fill in. Check-ins show up in a clan feed where people react and comment. Streaks and a weekly leaderboard keep score, and members can nudge anyone who hasn't logged yet.",
    goalsLabel: 'The Goal',
    goalsTitle: 'Four rules from the WhatsApp group',
    goalsDescription: "I based the design on what worked in our WhatsApp group and what didn't.",
    goals: [
      {
        title: 'Small groups of people you know',
        description: 'A clan has at most 15 people, and you join with an invite link or code. Being watched only helps if the people watching know you.',
      },
      {
        title: 'Fast logging',
        description: 'One daily log covers gym, steps, and food, with up to three meal photos. People stop logging when it feels like a chore, so I kept the form short.',
      },
      {
        title: 'Friendly social pressure',
        description: "Members can react, comment with @mentions, and nudge anyone who hasn't logged. Each week the app posts a Wall of Fame and a Wall of Shame to the clan.",
      },
      {
        title: 'Reasons to come back',
        description: 'Beyond the daily log, there are streaks, a leaderboard you can view by day, week, or month, daily contracts and duels, and profile levels to work toward.',
      }
    ],
    processLabel: 'The Process',
    processTitle: 'Shipping early and listening',
    processDescription: 'The first version went live on day one. Most of what came after was based on how real clans used it.',
    processSteps: [
      {
        title: 'Day one: the core loop',
        description: "I started with the smallest version worth using. You could sign up, create or join a clan, log your day, and see everyone's check-ins in a shared feed with reactions.",
      },
      {
        title: 'Making it feel like an app',
        description: 'People track habits on their phones, so I made Clan Fitness an installable PWA with push notifications, an unread badge on the app icon, bottom sheets, haptics, and pull-to-refresh. A lot of this phase went into fixing iOS Safari and Android bugs that never show up in a design file.',
      },
      {
        title: 'Listening to testers',
        description: 'I added an in-app feedback chat so testers could message me directly, and most of the roadmap came from it. Fixes and features that came out of it include a bug that saved check-ins from India to the wrong day, a nudge for friends who forgot to log, and a group chat for each clan, which grew out of the feedback chat itself.',
      },
      {
        title: 'Adding a game layer',
        description: 'Once people were logging every day, I gave them more to play for: a weekly Wall of Fame and Wall of Shame, an activity heatmap on profiles, and contracts. Contracts are daily challenges, like hitting 10,000 steps or beating a randomly assigned rival in a duel, and completing them earns points toward your level.',
      },
      {
        title: 'Running it',
        description: 'From an admin panel I can change leaderboard weights and default targets without a deploy, send announcements to specific clans or people, and check whether notifications are being delivered. The app runs on Next.js, Postgres, and Vercel, and I wrote it with Claude as a coding partner.',
      }
    ],
    imageUrl: getAssetPath('images/clan-fitness-hero.png'),
    thumbnailUrl: getAssetPath('images/clan-fitness-thumbnail.png'),
    liveUrl: 'https://www.clanfitness.in',
    liveUrlText: 'Try Clan Fitness',
    galleryLabel: 'Screens',
    galleryTitle: 'Screens from the live app',
    galleryDescription: 'These screenshots are from the production app at clanfitness.in.',
    galleryImages: [
      { url: getAssetPath('images/clan-fitness-feed.png'), caption: "The clan feed shows everyone's check-ins with reactions and comments, plus the weekly Wall of Fame." },
      { url: getAssetPath('images/clan-fitness-log.png'), caption: 'The daily log. Weekly gym days and your streak are at the top, followed by gym, steps, and food, which takes up to three photos.' },
      { url: getAssetPath('images/clan-fitness-leaderboard.png'), caption: "The leaderboard compares each member's steps against their own goal, along with gym days and streaks. It can show today, this week, or this month." },
      { url: getAssetPath('images/clan-fitness-contracts.png'), caption: 'Contracts are daily challenges, such as beating your own seven-day step average or winning a duel. Each one is worth points toward your level.' },
    ],
    outcomeDetailsTitle: 'Results so far',
    outcomeDetailsIntro: 'Clan Fitness started as a problem in a group chat and is now a live app that real groups use. I merged over 100 pull requests in the first 17 days, most of them prompted by tester feedback.',
    outcomeDetails: [
      { title: '41 people, 13 clans', description: 'Groups of friends holding each other accountable.' },
      { title: '1,100+ check-ins', description: 'Gym, steps, and food logs since launch in July 2026.' },
      { title: '2,100+ interactions', description: 'Over 1,700 reactions and almost 400 comments on check-ins.' },
      { title: '113 pull requests', description: 'Merged in the 17 days from first commit to contracts and duels.' },
    ],
  },
  {
    id: 'memo-io-multiplayer-game',
    title: 'memo.io: a real-time \nmultiplayer memory game',
    role: 'Product Designer, Solo Build',
    timeline: '1 Week',
    platform: 'Web / Discord Activity',
    company: 'Personal Project',
    tags: ['AI-Assisted Build', 'Real-Time Multiplayer', 'Personal Project'],
    description: 'A real-time multiplayer memory game I designed and built on my own in a week, from a written brief to a live Discord Activity, with Claude as my coding partner.',
    overview: `As a product designer, most of my work ends in Figma as flows, prototypes, and specs that engineers then build. I wanted to find out whether I could take an idea all the way to a working product by myself, so I picked something technically hard enough to be a real test: a game people play together in real time.

memo.io is a multiplayer memory-matching game. I built it with Claude as a development partner. It has a Socket.io backend, a React frontend, server-side anti-cheat, three game modes, six card themes, and a Discord Activity version, and it's live in production.`,
    challenge: "Designer portfolios usually stop at high-fidelity mockups, which can't show whether the designer understands what it takes to make the product work. State management, real-time sync, server authority, and deployment all shape how a product behaves, and none of them appear in a mockup.",
    solution: 'I designed and built the whole system myself, including the real-time architecture, anti-cheat logic, game modes, card themes, and Discord integration, and shipped it to production.',
    goalsLabel: 'The Goal',
    goalsTitle: 'Something people can play',
    goalsDescription: "I focused on four things a mockup can't show: real-time sync, fair play, replay value, and reach beyond a single browser tab.",
    goals: [
      {
        title: 'Real-time multiplayer',
        description: 'Each player races through their own grid. A Socket.io backend keeps everyone in sync with sub-second updates, and nobody has to wait for a turn.',
      },
      {
        title: 'Fair play enforced by the server',
        description: 'The server never sends the full deck to a client. It reveals one card per flip, rate-limits moves, and checks every card index, so the game is hard to cheat by design.',
      },
      {
        title: 'Modes and themes for replay value',
        description: 'There are three formats: Quick, League, and Powers, which adds offensive power-ups. Cards come in six themes, from emoji to Dota 2 heroes.',
      },
      {
        title: 'Playable inside Discord',
        description: 'memo.io also runs as a Discord Activity, so people can play it in a voice channel without leaving Discord.',
      }
    ],
    processLabel: 'The Process',
    processTitle: 'How it got built',
    processDescription: 'I scoped and shipped it the way I would a feature at work.',
    processSteps: [
      {
        title: 'Writing the brief first',
        description: "Before writing any code, I wrote a product brief covering the session flow, game mechanics, live leaderboard behavior, and technical architecture, the same way I'd scope a feature for engineering.",
      },
      {
        title: 'Building with Claude',
        description: 'Over one week and more than 100 commits, I worked with Claude to build the Socket.io backend and the React frontend, then iterated on game modes, power-ups, card themes, and the Discord Activity integration.',
      },
      {
        title: 'Shipping to production',
        description: 'The frontend is hosted on Vercel and the real-time backend on Railway. I recently moved the backend to a new hosting account without interrupting anyone who was playing.',
      }
    ],
    imageUrl: getAssetPath('images/memo-io-gameplay.png'),
    thumbnailUrl: getAssetPath('images/memo-io-home.png'),
    liveUrl: 'https://memo-io.vercel.app',
    liveUrlText: 'Play memo.io',
    galleryLabel: 'Screens',
    galleryTitle: 'Screens from the live game',
    galleryDescription: "These are screenshots of the deployed game. I'll add more gameplay and Discord screens soon.",
    galleryImages: [
      { url: getAssetPath('images/memo-io-home.png'), caption: 'The landing screen. Players pick an avatar and a name, then create or join a session. No account is needed.' },
      { url: getAssetPath('images/memo-io-lobby.png'), caption: 'The lobby, where the host picks the difficulty, card theme, and game mode before everyone readies up.' },
      { url: getAssetPath('images/memo-io-gameplay.png'), caption: 'Live gameplay. Each player works through their own grid while the sidebar shows the standings in real time.' },
    ],
    outcomeDetailsTitle: 'What shipped',
    outcomeDetailsIntro: 'memo.io went from a one-page brief to a live game with real-time multiplayer, three game modes, and a Discord Activity. I built it on my own, with AI as a development partner.',
    outcomeDetails: [
      { title: '100+ commits in a week', description: 'From the written brief to a game running in production.' },
      { title: '3 game modes', description: 'Quick, League (a best-of series with round history), and Powers (with offensive power-ups).' },
      { title: '6 card themes', description: 'Emoji, playing cards, flags, zodiac, Pokémon, and Dota 2 heroes.' },
      { title: 'Live on web and Discord', description: 'Hosted on Vercel and Railway, and playable as a Discord Activity.' },
    ],
  },
  {
    id: 'scalable-mentorship-auzmor',
    title: 'Scalable mentorship for \nAuzmor Learn',
    role: 'Senior Product Designer',
    timeline: '6 Months',
    tags: ['UX Strategy', 'Enterprise SaaS', 'Zero-to-One'],
    description: 'Adding structured, goal-based mentorship between employees to the Auzmor Learn LMS.',
    overview: `Many enterprise teams struggled to run structured mentorship programs. Information was spread across different tools, expectations were unclear, and there was no single place to track progress.

I designed a mentorship system inside Auzmor Learn that brought all of this into one flow. Every mentorship has clear goals, a consistent training path, built-in feedback, and visible progress. Admins, mentors, and learners each get their own experience, which keeps the program organized and easy to manage.`,
    challenge: 'The LMS had no way to run mentorship at scale, so coaching between employees happened informally and nobody tracked whether it was working.',
    solution: 'Each mentorship gets clear goals, a consistent training path, built-in feedback, and progress tracking. Admins, mentors, and learners each have their own view, so the program stays organized.',
    goalsLabel: 'The Goal',
    goalsTitle: 'A mentorship system that scales',
    goalsDescription: 'We built the feature around four needs: structure for each program, flexibility in how people are paired, visibility for admins, and a shared space for mentors and mentees.',
    goals: [
      {
        title: 'Define goals and milestones',
        description: 'Admins set up programs with clear objectives, timelines, and success criteria, so every mentorship has a purpose.',
        imageUrl: getAssetPath('images/gallery/goal-2.png')
      },
      {
        title: 'Pair mentors and mentees',
        description: 'Admins can assign mentors directly, or let employees pick one based on skills and career goals.',
        imageUrl: getAssetPath('images/gallery/goal-1.png')
      },
      {
        title: 'Share content, meeting notes, and feedback',
        description: 'Mentors and mentees get a shared workspace to exchange resources, record what came out of each meeting, and give each other feedback.',
        imageUrl: getAssetPath('images/gallery/goal-3.png')
      },
      {
        title: 'Give admins full visibility',
        description: 'Admins can manage thousands of mentorship connections from one place.',
        imageUrl: getAssetPath('images/gallery/goal-4.png')
      }
    ],
    imageUrl: getAssetPath('images/auzmor-mentorship-hero.png'),
    thumbnailUrl: getAssetPath('images/auzmor-mentorship-thumbnail.png'),
    outcome: 'The mentorship platform rolled out to enterprise clients and became a core part of the LMS. It gave teams a structured way to set goals, and mentors and mentees engaged with each other more.',
    galleryTitle: 'From Figma to code: final UI screens',
    galleryDescription: 'These screens show how admins, mentors, and mentees each work with goals, milestones, and feedback in the finished feature.',
    galleryImages: [
      { url: getAssetPath('images/gallery/program-creation.png'), caption: 'Admins create mentorship programs and set their goals and timelines.' },
      { url: getAssetPath('images/gallery/mentee-profile.png'), caption: "Mentors see each mentee's skills, goals, and progress in one view." },
      { url: getAssetPath('images/gallery/milestone-details.png'), caption: 'Milestones make it easy to see whether a mentorship is on track.' },
      { url: getAssetPath('images/gallery/mentorship-analytics.png'), caption: 'Analytics show how engaged people are and how well each program is working.' }
    ],
  },
  {
    id: 'ramco-systems-redesign',
    title: 'Ramco Systems redesign with a design system',
    role: 'UI Designer',
    timeline: '6 Months',
    tags: ['Design Systems', 'Prototyping', 'Legacy Modernization'],
    description: 'Giving a 13-year-old legacy platform a modern, easier interface while keeping the data density its users rely on.',
    overview: 'The platform is a legacy application that has served the client for more than thirteen years, and it was built with automation code. It involves a lot of data entry and form fields, with few calls to action to guide the user.',
    challenge: "Because the application was built entirely on automation code, using it depended on the user's mental model, and the learning curve was steep. There was no clear information hierarchy or visual structure. Users wanted information presented in a more modern way, with a clean interface.",
    solution: 'We chose atomic and molecular design systems because they work like independent Lego blocks and give us full control over the visual treatment of the platform.',
    userResearch: {
      title: 'Who are the users?',
      description: 'Initial interviews with product owners showed us what users expected and how they worked, which guided our design direction:',
      points: [
        { title: 'Familiar tools', description: 'Users were used to enterprise tools like MS Excel, MS Teams, and MS Outlook, all of which rely heavily on manual data entry and dense interfaces.' },
        { title: 'Pain points', description: 'These tools are repetitive and rigid, which made everyday work feel tedious and overwhelming.' },
        { title: 'Design opportunity', description: 'Users needed a more modern interface that makes entering information simpler and has a clean, easy-to-read visual structure.' }
      ]
    },
    designSystem: {
      title: 'Introducing the design system',
      description: 'A design system is a set of connected patterns and shared practices. Teams use one to design and build products such as apps and websites consistently.\n\nA design system can be broken down into different levels depending on what the product needs.',
      points: [
        { title: 'Atomic', icon: 'atom' },
        { title: 'Molecular', icon: 'molecule' },
        { title: 'Organism', icon: 'organism' },
        { title: 'Template', icon: 'template' }
      ]
    },
    buildingDesignSystem: {
      title: 'Building the design system',
      description: 'We chose atomic and molecular design systems because they work like independent Lego blocks and give us full control over the visual treatment of the platform.',
      points: [
        { title: 'Atomic', icon: 'atom' },
        { title: 'Molecular', icon: 'molecule' }
      ],
      secondaryDescription: 'The first step in building a design system is making a checklist of every component the platform might use.\nAn atomic component is the smallest unit in the system. Molecular components are built from atomic ones and are used to create flexible screen designs that scale.'
    },
    atomicComponents: {
      title: 'Atomic components',
      subtitle: 'LAYOUT',
      description: 'A layout has three main components that make any design recognizable. Setting up the layout first helped us create wireframes for each product.\n\nThis step let the client picture their product and see how the design system would change its visual layout.',
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
        title: 'Foundation: grid and spacing',
        description: 'We used a free-flowing 8-point grid, which let us align elements next to each other freely, with a 12-column structure similar to Bootstrap and 16px gutters.',
      },
      {
        title: 'Typography',
        description: 'We wanted an open-source typeface with a premium feel, but in this application information matters more than aesthetics.\n\nWe used a modular scale to set the heading sizes and the other font sizes the application needed.',
        imageUrl: getAssetPath('images/ramco-typography.png')
      },
      {
        title: 'Color palette',
        description: 'We introduced 48 colors, each with a specific purpose, to keep the visual language consistent and accessible across the platform.',
        imageUrl: getAssetPath('images/ramco-colors.png')
      },
      {
        title: 'Molecular components',
        description: 'Molecular components are combinations of the atomic components we defined earlier. A small molecular component can also count as atomic when compared with a large one.'
      },
      {
        title: 'Buttons',
        description: 'A button lets the user make a decision at an important point in a flow. Button color contrast follows WCAG guidelines so the buttons work for users with different accessibility needs.'
      },
      {
        title: 'Textbox',
        description: 'Textboxes are the most important components for data entry and forms. Each one has a text area, a title label, an underline caption, and icons.\n\nThe elements are spaced 8px apart to match the free-flowing 8-point grid.',
        imageUrl: getAssetPath('images/ramco-textbox.png')
      }
    ],
    outcome: 'The new visual hierarchy made the application easier to understand, and the client now has a design language that can scale. The project taught me how much a design system matters to a product and how it affects the scalability and visual design of a platform over time.',
    imageUrl: getAssetPath('images/ramco-redesign-v2.png'),
    thumbnailUrl: getAssetPath('images/ramco-thumbnail.png'),
    galleryTitle: 'Final UI screens',
    galleryDescription: 'Screens from the redesigned HR modules, built with the new design system.',
    galleryImages: [
      { url: getAssetPath('images/ramco-dashboard-leave.png'), caption: 'Employee dashboard: leave balance and quick actions' },
      { url: getAssetPath('images/ramco-leave-calendar.png'), caption: 'Leave calendar: team availability' },
      { url: getAssetPath('images/ramco-holiday-mapping.png'), caption: 'Holiday mapping: settings by location' },
      { url: getAssetPath('images/ramco-holiday-master.png'), caption: 'Holiday master: company-wide holiday management' },
      { url: getAssetPath('images/ramco-employee-profile.png'), caption: 'Employee profile: family information' },
      { url: getAssetPath('images/ramco-qualification-master.png'), caption: 'Qualification master: setting up education records' }
    ]
  },
  {
    id: 'ui-concept-exploration',
    title: 'UI and concept exploration',
    role: 'Visual Designer',
    tags: ['Exploration', 'Ideas', 'Concepts'],
    description: 'Interface concepts and visual experiments, mostly posted on Dribbble.',
    imageUrl: getAssetPath('images/ui-concept-thumbnail.png'),
    link: 'https://dribbble.com/yugeshralli',
    ctaText: 'View More on Dribbble',
    isGallery: true
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Product Designer',
    company: 'Vectramind',
    period: 'Jan 2026 - Present',
    description: 'Leading design for enterprise products in healthcare and communication.'
  },
  {
    id: '2',
    role: 'Senior Product Designer',
    company: 'Auzmor',
    period: 'Jun 2022 - Jun 2025',
    description: 'Led design across Auzmor\'s Employee Experience Suite and grew from Associate to Senior Product Designer. I worked on the LMS from its first zero-to-one features through to enterprise scale.'
  },
  {
    id: '3',
    role: 'Associate Senior UI/UX Designer',
    company: 'Lollypop Design Studio',
    period: 'Sep 2019 - Dec 2021',
    description: 'Designed UI and UX for clients including Hexaware, Cisco, and Intel. Grew from Associate to Associate Senior Designer, mentored junior designers, and led project deliverables.'
  },
  {
    id: '4',
    role: 'Web Development Intern',
    company: 'Sentinel Radiology Solutions',
    period: 'Dec 2017 - Mar 2018',
    description: 'Sentinel Radiology Solutions is a telehealth startup with more than 70 clients in several countries.'
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