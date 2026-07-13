import {
  ShieldCheck,
  Landmark,
  Users,
  Lock,
  Database,
  Server,
} from "lucide-react";

import { Container, SectionTitle } from "../shared";

import FeatureCard from "./FeatureCard";

const featureGroups = [
  {
    title: "Authentication",
    icon: <ShieldCheck size={34} />,
    description: "Secure authentication and account protection.",
    features: [
      "JWT Authentication",
      "Refresh Tokens",
      "Email Verification",
      "Password Reset",
    ],
  },
  {
    title: "Digital Banking",
    icon: <Landmark size={34} />,
    description: "Core banking functionality.",
    features: [
      "Deposits",
      "Withdrawals",
      "Money Transfers",
      "Transaction History",
    ],
  },
  {
    title: "User Management",
    icon: <Users size={34} />,
    description: "Comprehensive account management.",
    features: [
      "Profile Management",
      "KYC Verification",
      "Notifications",
      "User Roles",
    ],
  },
  {
    title: "Security",
    icon: <Lock size={34} />,
    description: "Backend security best practices.",
    features: [
      "RBAC",
      "Password Hashing",
      "OTP",
      "Protected Routes",
    ],
  },
  {
    title: "Backend APIs",
    icon: <Database size={34} />,
    description: "Production-ready REST API.",
    features: [
      "20+ REST Endpoints",
      "Validation",
      "Filtering",
      "Pagination",
    ],
  },
  {
    title: "Deployment",
    icon: <Server size={34} />,
    description: "Modern deployment workflow.",
    features: [
      "Docker",
      "GitHub Actions",
      "Render",
      "Vercel",
    ],
  },
];

export default function BankingFeatures() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          centered
          title="Core Banking Capabilities"
          subtitle="Designed with modern backend architecture, security, and scalability in mind."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featureGroups.map((group) => (
            <FeatureCard
              key={group.title}
              {...group}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}