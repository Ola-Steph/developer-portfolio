import { Container, SectionTitle } from "../shared";

import APIGroup from "./APIGroup";

const apiGroups = [
  {
    title: "Authentication",
    endpoints: [
      { method: "POST", endpoint: "/auth/register" },
      { method: "POST", endpoint: "/auth/login" },
      { method: "POST", endpoint: "/auth/verify-email" },
      { method: "POST", endpoint: "/auth/forgot-password" },
      { method: "POST", endpoint: "/auth/reset-password" },
    ],
  },
  {
    title: "Users",
    endpoints: [
      { method: "GET", endpoint: "/users/profile" },
      { method: "PATCH", endpoint: "/users/update-user" },
      { method: "POST", endpoint: "/users/upload-avatar" },
    ],
  },
  {
    title: "Transactions",
    endpoints: [
      { method: "POST", endpoint: "/transactions/transfer" },
      { method: "POST", endpoint: "/transactions/deposit" },
      { method: "POST", endpoint: "/transactions/withdraw" },
      { method: "GET", endpoint: "/transactions/history" },
    ],
  },
  {
    title: "Administration",
    endpoints: [
      { method: "GET", endpoint: "/admin/users" },
      { method: "PATCH", endpoint: "/admin/users/:id" },
      { method: "GET", endpoint: "/admin/audit-logs" },
    ],
  },
];
export default function BankingAPI() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          centered
          title="API Explorer"
          subtitle="Representative REST endpoints powering the banking platform."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {apiGroups.map((group) => (
            <APIGroup key={group.title} {...group} />
          ))}
        </div>
      </Container>
    </section>
  );
}