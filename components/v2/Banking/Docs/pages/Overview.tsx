import Image from "next/image";
import {
  CheckCircle2,
  Server,
  ShieldCheck,
  Database,
  Layers3,
} from "lucide-react";

const highlights = [
  "JWT Authentication & Role-Based Access Control",
  "Money Transfers, Deposits & Withdrawals",
  "Email Verification & Password Recovery",
  "Admin Dashboard & Audit Logs",
  "Dockerized Backend with CI/CD",
  "20+ REST API Endpoints",
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "Docker",
  "GitHub Actions",
  "Render",
  "Vercel",
];

export default function Overview() {
  return (
    <div className="space-y-10">

      {/* Hero Card */}

      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white">
              Production Project
            </span>

            <h1 className="mt-5 text-4xl font-bold text-white">
              Enterprise Digital Banking Platform
            </h1>

            <p className="mt-6 leading-8 text-slate-400">
              A full-stack banking platform built completely from scratch,
              featuring secure authentication, user management, KYC,
              transactions, notifications, role-based authorization,
              and an administrative dashboard.

              The application follows production-oriented architecture,
              separating frontend, backend and database concerns while
              implementing modern authentication and deployment practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="YOUR_LIVE_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Live Demo
              </a>

              <a
                href="YOUR_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-600 px-5 py-3 text-white hover:bg-slate-800"
              >
                GitHub
              </a>

            </div>

          </div>

          <div>

            <div className="overflow-hidden rounded-2xl border border-slate-700">

              <Image
                src="/images/banking-dashboard.png"
                alt="Banking Dashboard"
                width={1200}
                height={700}
                className="w-full"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          icon={<Layers3 size={24} />}
          title="Architecture"
          value="Full Stack"
        />

        <StatCard
          icon={<Database size={24} />}
          title="Database"
          value="MongoDB"
        />

        <StatCard
          icon={<ShieldCheck size={24} />}
          title="Authentication"
          value="JWT"
        />

        <StatCard
          icon={<Server size={24} />}
          title="Backend"
          value="Express API"
        />

      </div>

      {/* Highlights */}

      <div className="grid gap-10 lg:grid-cols-2">

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Core Capabilities
          </h2>

          <div className="space-y-4">

            {highlights.map(item => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2 className="text-green-500" />

                <span className="text-slate-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">

            {techStack.map(tech => (

              <span
                key={tech}
                className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>

      {/* Project Summary */}

      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          Project Summary
        </h2>

        <p className="mt-6 leading-8 text-slate-400">
          This project was built as an end-to-end digital banking platform
          to demonstrate the design and implementation of secure,
          production-oriented financial software. It includes authentication,
          authorization, user profile management, KYC verification,
          money transfers, deposits, withdrawals, notifications,
          audit logging, Dockerized deployment, CI/CD automation,
          and a RESTful API architecture.

          The platform emphasizes maintainability, scalability,
          modular architecture, and secure software engineering
          practices commonly found in real-world fintech applications.
        </p>

      </div>

    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

      <div className="mb-4 text-blue-400">
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}