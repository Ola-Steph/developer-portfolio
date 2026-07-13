import {
  Layers,
  Monitor,
  Server,
  Database,
  ShieldCheck,
} from "lucide-react";

import ArchitectureLayer from "../components/ArchitectureLayer";
import FlowStep from "../components/FlowStep";
import PrincipleCard from "../components/PrincipleCard";

export default function Architecture() {
  return (
    <div className="space-y-16">

      {/* Header */}

      <section>

        <div className="flex items-center gap-3">

          <Layers className="text-blue-500" size={34} />

          <h1 className="text-4xl font-bold">
            System Architecture
          </h1>

        </div>

        <p className="mt-5 max-w-4xl text-slate-400 leading-8">
          The banking platform follows a layered architecture that separates
          presentation, business logic, security, and persistence. This
          structure improves maintainability, scalability, and long-term
          extensibility while keeping each layer responsible for a single
          concern.
        </p>

      </section>

      {/* Architecture */}

      <section className="space-y-5">

        <ArchitectureLayer
          icon={<Monitor size={22} />}
          title="Presentation Layer"
          subtitle="Next.js • React • Tailwind CSS"
          responsibilities={[
            "Responsive UI",
            "Dashboard",
            "Forms",
            "Client-side Validation",
            "State Management",
          ]}
        />

        <ArchitectureLayer
          icon={<Server size={22} />}
          title="API Layer"
          subtitle="Express • Controllers • Routes • Middleware"
          responsibilities={[
            "REST API",
            "JWT Validation",
            "Controllers",
            "Business Routing",
            "Error Handling",
          ]}
        />

        <ArchitectureLayer
          icon={<ShieldCheck size={22} />}
          title="Business Layer"
          subtitle="Authentication • Transactions • Admin"
          responsibilities={[
            "Transfers",
            "Deposits",
            "Withdrawals",
            "Notifications",
            "RBAC",
          ]}
        />

        <ArchitectureLayer
          icon={<Database size={22} />}
          title="Data Layer"
          subtitle="MongoDB • Mongoose"
          responsibilities={[
            "Users",
            "Transactions",
            "Notifications",
            "Audit Logs",
            "KYC",
          ]}
        />

      </section>

      {/* Request Lifecycle */}

      <section>

        <h2 className="text-3xl font-bold mb-8">
          Request Lifecycle
        </h2>

        <div className="grid gap-5">

          <FlowStep step={1} text="User submits a transfer request" />

          <FlowStep step={2} text="Frontend validates user input" />

          <FlowStep step={3} text="POST /transactions/transfer" />

          <FlowStep step={4} text="JWT Authentication Middleware" />

          <FlowStep step={5} text="Transfer Controller executes business logic" />

          <FlowStep step={6} text="MongoDB stores transaction" />

          <FlowStep step={7} text="Updated balance returned to dashboard" />

        </div>

      </section>

      {/* Principles */}

      <section>

        <h2 className="text-3xl font-bold mb-8">
          Engineering Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <PrincipleCard
            title="Separation of Concerns"
            description="Frontend, backend and persistence remain independent, allowing each layer to evolve without affecting the others."
          />

          <PrincipleCard
            title="Modular Design"
            description="Controllers, routes, middleware and utilities are isolated into reusable modules."
          />

          <PrincipleCard
            title="Security First"
            description="Authentication, authorization, password hashing, validation and audit logging are built into the application architecture."
          />

          <PrincipleCard
            title="Scalability"
            description="New modules can be introduced without restructuring the existing codebase."
          />

        </div>

      </section>

    </div>
  );
}