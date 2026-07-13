

export interface JourneyItem {
  company: string;
  role: string;
  period: string;
  color: string;
  achievements: string[];
  technologies: string[];
}


export const journey: JourneyItem[] = [
  {
    company: "Code-Lab Edu-care",

    role: "Frontend Software Engineer",

    period: "Remote",

    color: "blue",

achievements: [
  "Developed responsive cross-platform user interfaces using React.js for web and React Native (Expo) for Android, iOS, and Android TV.",
  "Built reusable, maintainable UI components that delivered a consistent user experience across multiple devices and screen sizes.",
  "Integrated frontend applications with RESTful APIs to enable real-time data synchronization and seamless content streaming.",
  "Implemented efficient state management using Redux, ensuring reliable application performance and responsive user interactions.",
  "Optimized application performance through lazy loading, code splitting, asset optimization, and frontend best practices.",
  "Collaborated closely with UI/UX designers to transform design mockups into production-ready interfaces optimized for touch, keyboard, and remote control navigation.",
  "Enhanced accessibility and cross-platform compatibility while testing and debugging across web, mobile, and Android TV platforms.",
  "Contributed to the development of both IPTV and Escrow Platform products within a collaborative Agile development team.",
],

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Git",
    ],
  },

  {
    company: "Digital Banking Platform",

    role: "Flagship Personal Project",

    period: "2026",

    color: "green",

    achievements: [
      "Designed and developed a complete digital banking application.",
      "Implemented JWT authentication and role-based authorization.",
      "Built secure money transfers with authorization code verification.",
      "Developed KYC verification and document upload workflows.",
      "Implemented PDF receipt generation and transaction history.",
      "Created comprehensive engineering documentation.",
    ],

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "TailwindCSS",
    ],
  },

  {
    company: "Continuous Learning",

    role: "Professional Development",

    period: "Ongoing",

    color: "purple",

    achievements: [
      "Continuously improving backend architecture and API design skills.",
      "Learning Docker, deployment strategies and scalable application design.",
      "Building production-quality portfolio projects to demonstrate practical software engineering skills.",
      "Preparing for international software engineering opportunities.",
    ],

    technologies: [
      "Docker",
      "REST APIs",
      "System Design",
      "Cloud",
      "CI/CD",
    ],
  },
];