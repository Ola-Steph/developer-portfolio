import DocumentationHeader from "../components/DocumentationHeader";
import SecurityLayerCard from "../components/SecurityLayerCard";
import SecurityFlow from "../components/SecurityFlow";

export default function Security() {
  return (
    <div className="space-y-16">

      <DocumentationHeader
        title="Security"
        description="Security is implemented as a multi-layered architecture. Authentication, authorization, validation, encryption and auditing work together to protect user accounts and financial transactions."
        category="Security"
        complexity="Advanced"
        related={[
          {
            name: "Authentication",
            href: "/banking/docs/authentication",
          },
          {
            name: "API",
            href: "/banking/docs/api",
          },
          {
            name: "Architecture",
            href: "/banking/docs/architecture",
          },
        ]}
      />

      <SecurityFlow />

      <section>

        <h2 className="mb-8 text-3xl font-bold">
          Security Layers
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          <SecurityLayerCard
            title="Authentication"
            items={[
              "JWT Access Tokens",
              "Refresh Tokens",
              "Email Verification",
              "Forgot Password",
            ]}
          />

          <SecurityLayerCard
            title="Authorization"
            items={[
              "Role-Based Access Control",
              "Protected Admin Routes",
              "Middleware Validation",
            ]}
          />

          <SecurityLayerCard
            title="Password Protection"
            items={[
              "bcrypt Password Hashing",
              "Salt Generation",
              "Secure Password Comparison",
            ]}
          />

          <SecurityLayerCard
            title="Input Validation"
            items={[
              "Request Validation",
              "Sanitized Input",
              "Consistent Error Handling",
            ]}
          />

        </div>

      </section>

    </div>
  );
}