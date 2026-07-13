import DocumentationHeader from "../components/DocumentationHeader";
import SecurityCard from "../components/SecurityCard";
import AuthenticationFlow from "../components/AuthenticationFlow";


export default function Authentication() {
  return (
    <div className="space-y-16">

      <DocumentationHeader
        title="Authentication"
        description="The banking platform uses a secure JWT-based authentication system designed around modern security practices including password hashing, email verification, access tokens, refresh tokens, and protected API routes."
        category="Security"
        complexity="Advanced"
        related={[
          {
            name: "Architecture",
            href: "/banking/docs/architecture",
          },
          {
            name: "Security",
            href: "/banking/docs/security",
          },
          {
            name: "API",
            href: "/banking/docs/api",
          },
        ]}
      />

      <AuthenticationFlow />

<section>

  <h2 className="mb-8 text-3xl font-bold">
    Authentication Components
  </h2>

  <div className="grid gap-6 lg:grid-cols-2">

    <SecurityCard
      title="Password Security"
      items={[
        "Passwords hashed with bcrypt",
        "Secure password comparison",
        "Strong password validation",
      ]}
    />

    <SecurityCard
    title="JWT Authentication"
    items={[
        "JWT Access Token",
        "Protected API Middleware",
        "Token Verification",
        "Token Expiration",
    ]}
    />

    <SecurityCard
      title="Account Verification"
      items={[
        "Email verification",
        "Activation workflow",
        "Verified users only",
      ]}
    />

    <SecurityCard
      title="Route Protection"
      items={[
        "JWT Middleware",
        "Role-Based Authorization",
        "Protected endpoints",
      ]}
    />

  </div>

</section>

    </div>
  );
}