/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Centralized Portfolio Configuration for Aryan Tiwari
 * All personal details, educational history, project URLs, and quest data
 * are centralized here for maintainability and easy customization.
 */

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  problem: string;
  purpose: string;
  features: string[];
  tags: string[];
  isPrimary?: boolean;
}

export interface SkillCategory {
  sector: string;
  name: string;
  description: string;
  skills: string[];
}

export interface PharmaQuestStation {
  id: 'discover' | 'build' | 'experiment' | 'future';
  code: string;
  title: string;
  subtitle: string;
  domain: string;
  narrative: string;
  keyInsight: string;
  milestone: string;
  actionHint: string;
}

export const portfolioConfig = {
  personal: {
    name: 'Aryan Tiwari',
    roleTitle: 'Pharmacy Student. Technology Explorer. Creator.',
    tagline: 'Curious by Science. Driven to Create.',
    heroDescription:
      "Hi, I'm Aryan Tiwari — a fourth-year Bachelor of Pharmacy student exploring the intersection of science, technology, and problem-solving.\n\nI enjoy learning new things, experimenting with ideas, and building digital experiences that can make everyday problems easier to solve.",
    academic: {
      degree: 'Bachelor of Pharmacy (B.Pharm)',
      currentYear: 'Fourth Year (Final Year)',
      graduationDate: 'June 2027',
      // Note: College / University name is pending confirmation from Aryan
      institution: 'Not yet confirmed (AKTU affiliated)',
      universityAffiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) curriculum focus',
    },
    socials: {
      githubUsername: 'code002-18',
      githubUrl: 'https://github.com/code002-18',
      email: 'aryantiwaritiwari3@gmail.com',
      // LinkedIn is explicitly marked as not available per profile specifications
      linkedin: null,
    },
    location: 'India',
    timezone: 'Asia/Kolkata',
    availabilityStatus: 'OPEN FOR COLLABORATION & PROJECTS',
    responseTarget: 'UNDER 24H',
  },

  hudStats: [
    { label: 'ACADEMIC_YEAR', value: '4th Year', detail: 'B.Pharm Candidate' },
    { label: 'EXPECTED_GRAD', value: 'June 2027', detail: 'Pharmaceutical Sciences' },
    { label: 'CORE_FOCUS', value: 'Sci-Tech & Web', detail: 'Bridging Pharma & Code' },
    { label: 'PRIMARY_PORTAL', value: 'BPharmHub.xyz', detail: 'AKTU Student Platform' },
  ],

  about: {
    leadHeadline: 'CURIOUS BY SCIENCE. DRIVEN TO CREATE.',
    paragraphs: [
      "I am a fourth-year Bachelor of Pharmacy (B.Pharm) student with an enduring curiosity for both molecular sciences and digital engineering. Throughout my academic training in pharmacology, medicinal chemistry, and pharmacokinetics, I noticed that students often struggle with dispersed academic resources, dense syllabi, and outdated access methods.",
      "Rather than waiting for someone else to fix it, I taught myself modern web development — learning React, TypeScript, and clean responsive design. This intersection between analytical scientific training and creative software problem-solving drives every project I build.",
      "My approach is deliberate and honest: write clean code, solve real problems without unnecessary fluff, and build interfaces that load fast and work reliably on everyday devices."
    ],
    philosophies: [
      {
        number: '01',
        title: 'SCIENTIFIC RIGOR',
        description: 'Approaching code and systems like laboratory experiments: formulating hypotheses, testing edge cases, and verifying with real user feedback.'
      },
      {
        number: '02',
        title: 'BUILD TO SOLVE REAL NEEDS',
        description: 'BPharmHub was born directly out of peer friction. Software should eliminate confusion and make everyday academic life smoother.'
      },
      {
        number: '03',
        title: 'DIGITAL CRAFTSMANSHIP',
        description: 'Clean hand-authored code, thoughtful typography, zero bloated libraries, and responsive layouts that look refined at any viewport.'
      },
      {
        number: '04',
        title: 'LIGHTWEIGHT & ACCESSIBLE',
        description: 'Ensuring digital products run smoothly on standard student smartphones, high-latency 4G networks, and small screens.'
      },
      {
        number: '05',
        title: 'LIFELONG EXPLORATION',
        description: 'Continuously learning beyond standard curriculum boundaries — from interactive canvas animations to modern pharmacoinformatics.'
      }
    ]
  },

  skills: [
    {
      sector: 'SECTOR_01',
      name: 'Pharmaceutical Sciences',
      description: 'Core scientific curriculum and domain knowledge as a 4th-year B.Pharm student.',
      skills: [
        'Pharmacology & Therapeutics',
        'Medicinal Chemistry',
        'Pharmacokinetics & Biopharmaceutics',
        'Pharmaceutical Analysis',
        'Drug Delivery Systems & Formulation',
        'Pharmacognosy & Phytochemistry'
      ]
    },
    {
      sector: 'SECTOR_02',
      name: 'Problem Solving',
      description: 'Systematic analysis of friction points and user workflow optimization.',
      skills: [
        'Academic Resource Architecture',
        'Student Workflow Analysis',
        'Information Hierarchy Design',
        'Root Cause Debugging',
        'Practical Solution Synthesis'
      ]
    },
    {
      sector: 'SECTOR_03',
      name: 'Digital Creation',
      description: 'Modern frontend development and interactive web engineering.',
      skills: [
        'React & Component Architecture',
        'TypeScript',
        'Tailwind CSS & Responsive Layouts',
        'Vite & Build Tooling',
        'HTML5 Canvas & Motion',
        'Git & GitHub Version Control'
      ]
    },
    {
      sector: 'SECTOR_04',
      name: 'Continuous Learning',
      description: 'Self-driven exploration of emerging technologies and methodologies.',
      skills: [
        'Modern Web Standards',
        'Interactive Visuals & Shaders',
        'Healthcare Informatics Principles',
        'API Integration & Asynchronous Systems',
        'Technical Documentation'
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'bpharmhub',
      index: '01',
      title: 'BPharmHub',
      subtitle: 'AKTU University B.Pharm Academic Resource Portal',
      category: 'ACADEMIC RESOURCE PLATFORM · FULL-SCALE WEB APP',
      year: '2024–PRESENT',
      liveUrl: 'https://bpharmhub.xyz/',
      image: '/assets/aistudio/Untitled_Project_442280d4.jpg',
      problem: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) pharmacy students frequently face dispersed study resources, unorganized semester syllabi, difficult-to-locate previous year question papers (PYQs), and missing lecture notes spread across fragmented messaging groups.',
      purpose: 'To create a single, clean, fast-loading, and completely open academic platform where pharmacy students across all 8 semesters can instantly find verified syllabi, structured subject notes, previous question papers, and essential guess papers.',
      features: [
        'Semester-wise (Sem 1 to Sem 8) structured directory for easy navigation',
        'Subject-by-subject categorization covering Medicinal Chemistry, Pharmacology, Ceutics & more',
        'Direct download & preview links for verified study PDFs and previous exam question papers',
        'Mobile-first responsive architecture designed for reading on student smartphones',
        'Zero paywalls or restrictive account barriers — built to serve the student community'
      ],
      tags: ['Academic Portal', 'React', 'Resource Indexing', 'B.Pharm Curricula', 'Live Production'],
      isPrimary: true
    },
    {
      id: 'ludo-ianx',
      index: '02',
      title: 'Ludo Ianx',
      subtitle: 'Real-Time Browser Multiplayer Board Game',
      category: 'INTERACTIVE WEB APPLICATION · MULTIPLAYER GAME',
      year: '2025',
      liveUrl: 'https://ludo-ianx.onrender.com/?room=7GRU7X',
      image: '/src/assets/images/ludo_ianx_game_showcase_1793816536519.jpg',
      problem: 'Exploring real-time state synchronization, interactive game loop logic, and client-server coordination in the browser without heavy commercial game engines.',
      purpose: 'Built an interactive, browser-native room-based multiplayer Ludo game allowing friends to share a room link, roll animated dice, move pawns across the quadrant board, and play turns in real time.',
      features: [
        'Custom room creation with shareable URL parameters (e.g. ?room=7GRU7X)',
        'Four-quadrant board rendering with interactive player movement path validation',
        'Real-time state sharing across connected browser tabs and devices',
        'Turn-based player indicators, dice rolling physics, and pawn capture mechanics',
        'Responsive layout scaling effortlessly from mobile screens to desktop browsers'
      ],
      tags: ['Interactive Game', 'Real-time State', 'WebSockets / Room Sync', 'Responsive UI'],
      isPrimary: false
    }
  ] as ProjectItem[],

  pharmaQuest: {
    title: 'PharmaQuest: Explore My Journey',
    subtitle: 'An interactive exploration into Aryan Tiwari’s academic milestones, technical creations, and future aspirations.',
    stations: [
      {
        id: 'discover',
        code: 'STATION_01',
        title: 'Discover',
        subtitle: 'The Pharmaceutical Science Foundation',
        domain: 'ACADEMIC GENESIS',
        narrative:
          'Entering the Bachelor of Pharmacy curriculum opened up the microscopic universe of pharmacology and medicinal chemistry. Understanding how a tiny molecule interacts with human receptors, how formulation alters bioavailability, and how therapeutic regimens are engineered sparked a deep appreciation for evidence-based science.',
        keyInsight:
          'Pharmacy teaches structured rigor: every formulation must be measured, every dosage calculated, and every clinical variable verified.',
        milestone: 'Mastered 7 semesters of intensive pharmaceutical sciences, preparing for 2027 graduation.',
        actionHint: 'Click to explore Station 01 and inspect foundation insights.'
      },
      {
        id: 'build',
        code: 'STATION_02',
        title: 'Build',
        subtitle: 'The Birth of BPharmHub',
        domain: 'PRODUCT ENGINEERING',
        narrative:
          'Seeing classmates struggle to find reliable AKTU semester notes, updated syllabus breakdowns, and past question papers, Aryan decided to build the solution. Self-teaching frontend web technologies, he engineered BPharmHub (bpharmhub.xyz) — organizing 8 semesters of academic material into a clean, lightning-fast web portal.',
        keyInsight:
          'True engineering is identifying a pain point that directly affects your community and building the simplest, fastest tool to eliminate it.',
        milestone: 'Deployed BPharmHub to production, serving AKTU B.Pharm students with zero friction.',
        actionHint: 'Click to explore Station 02 and discover how BPharmHub was crafted.'
      },
      {
        id: 'experiment',
        code: 'STATION_03',
        title: 'Experiment',
        subtitle: 'Interactive Software & Real-Time Play',
        domain: 'CREATIVE LABS',
        narrative:
          'Technology exploration should not be rigid. Venturing into real-time state synchronization and browser interactivity, Aryan created Ludo Ianx — an interactive online multiplayer board game featuring synchronized room sessions, custom dice logic, and responsive board geometry.',
        keyInsight:
          'Building real-time interactive games sharpens UI reactivity, event-driven state thinking, and user engagement intuition.',
        milestone: 'Constructed real-time multiplayer room mechanics at ludo-ianx.onrender.com.',
        actionHint: 'Click to explore Station 03 and review real-time game engineering.'
      },
      {
        id: 'future',
        code: 'STATION_04',
        title: 'Future',
        subtitle: 'June 2027 & The Nexus of Pharma-Tech',
        domain: 'HORIZON VISION',
        narrative:
          'As graduation approaches in June 2027, the vision is clear: bridge pharmaceutical science and modern digital products. Whether developing clinical informatics tools, patient adherence digital companions, or educational platforms, the goal is building reliable software with real-world impact.',
        keyInsight:
          'The healthcare and pharmaceutical landscape needs creators who speak the language of pharmacology and the language of code.',
        milestone: 'Targeting completion of B.Pharm degree in June 2027 and continuing digital product development.',
        actionHint: 'Click to explore Station 04 and complete the quest.'
      }
    ] as PharmaQuestStation[],
    finalDiscovery: {
      headline: 'QUEST COMPLETE: THE SCI-TECH SYNTHESIS UNLOCKED',
      message:
        'Thank you for exploring all four stations! You have uncovered the core ethos behind Aryan Tiwari’s journey: that scientific precision and creative web engineering are not opposite disciplines, but synergistic powers. By bringing together pharmacological insight and digital craftsmanship, we can create tools that educate, empower, and simplify human life.',
      quote: '“Curious by Science. Driven to Create.” — Aryan Tiwari',
      callToActionText: 'Transmit a Message or Discuss a Project ↗',
      targetSectionId: 'contact'
    }
  }
};
