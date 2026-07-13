import { Container, SectionTitle } from "../shared";
import MetricCard from "./MetricCard";

const metrics = [
  {
    value: "20+",
    label: "REST API Endpoints",
    description:
      "Authentication, users, transactions, KYC, notifications, admin operations and more.",
  },
  {
    value: "100%",
    label: "TypeScript",
    description:
      "Frontend and backend developed entirely with TypeScript for maintainability and type safety.",
  },
  {
    value: "JWT + RBAC",
    label: "Secure Authentication",
    description:
      "JWT authentication with role-based authorization protecting administrative operations.",
  },
  {
    value: "Docker",
    label: "Containerized Backend",
    description:
      "Backend services containerized using Docker and Docker Compose for consistent deployments.",
  },
  {
    value: "CI/CD",
    label: "GitHub Actions",
    description:
      "Automated workflows for building and deploying the backend application.",
  },
  {
    value: "MongoDB",
    label: "Production Database",
    description:
      "MongoDB Atlas with Mongoose ODM powering user accounts and transaction records.",
  },
];

export default function BankingMetrics() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <SectionTitle
          centered
          title="Project Metrics"
          subtitle="A snapshot of the scale, architecture, and engineering practices behind the platform."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              {...metric}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}