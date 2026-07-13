import { HeroData } from "@/types/portfolio";

export const heroData: HeroData = {
  name: "Stephen Jaiyeola",

  title: "Backend-Focused Full-Stack Software Engineer",

  subtitle:
    "I build secure, scalable web applications using Node.js, Express, TypeScript, Next.js and MongoDB. Experienced in developing production-ready systems with authentication, role-based access control, Docker, CI/CD, and cloud deployment.",

  availability: "Available for Remote Software Engineering Roles",

  stats: [
    {
      value: "20+",
      label: "REST APIs Built",
    },
    {
      value: "8+",
      label: "Deployed Projects",
    },
    {
      value: "2",
      label: "Commercial Products",
    },
    {
      value: "100%",
      label: "Remote Experience",
    },
  ],

  socialLinks: [
    {
      label: "GitHub",
      href: "",
    },
    {
      label: "LinkedIn",
      href: "",
    },
    {
      label: "Email",
      href: "",
    },
  ],
};

export const technologies = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Redux Toolkit",
  "Tailwind CSS",
  "Docker",
  "GitHub Actions",
  "JWT Authentication",
  "REST APIs",
  "Git",
  "Postman",
];

export const bankingProject = {
  title: "Production Banking Platform",

  tagline:
    "A full-stack banking platform built with modern backend architecture, secure authentication, role-based authorization, and production deployment.",

  description:
    "Designed and developed a secure digital banking platform supporting user authentication, KYC, money transfers, deposits, withdrawals, transaction history, notifications, and an administrative dashboard. The system follows production-ready backend architecture with Docker, GitHub Actions, JWT authentication, refresh tokens, and MongoDB.",

  image: "/images/banking-dashboard.png",

  github: "https://github.com/yourusername/banking-platform",

  liveDemo: "https://banking-app-frontend-zeta.vercel.app/",


  techStack: [
  "Next.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "JWT",
  "Docker",
  "GitHub Actions",
],

  architecture: {
    frontend: "Next.js",
    backend: "Express.js",
    language: "TypeScript",
    database: "MongoDB",
    authentication: "JWT Authentication",
    authorization: "Role-Based Access Control",
    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "MongoDB Atlas",
    },
  },

  metrics: [
    "20+ REST API Endpoints",
    "JWT Authentication",
    "Refresh Tokens",
    "Role-Based Access Control",
    "Docker",
    "GitHub Actions",
    "MongoDB",
    "Production Deployment",
  ],

  features: [
    "User Registration",
    "Login",
    "Email Verification",
    "Forgot Password",
    "Password Reset",
    "KYC",
    "Profile Management",
    "Money Transfer",
    "Deposits",
    "Withdrawals",
    "Transaction History",
    "Notifications",
    "Admin Dashboard",
    "Audit Logs",
    "Search",
    "Pagination",
    "Filtering",
    "File Upload",
  ],
};