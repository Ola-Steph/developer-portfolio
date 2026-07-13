import DocumentationHeader from "../components/DocumentationHeader";

const featureGroups = [
  {
    title: "Authentication & User Management",
    features: [
      "User Registration",
      "Secure Login",
      "JWT Authentication",
      "Email Verification (OTP)",
      "Forgot Password",
      "Password Reset",
      "User Profile Management",
    ],
  },
  {
    title: "Banking Operations",
    features: [
      "Internal Money Transfers",
      "External Bank Transfers",
      "Transaction History",
      "PDF Receipt Generation",
      "Balance Management",
      "Admin Deposits",
    ],
  },
  {
    title: "Security",
    features: [
      "Password Hashing (bcrypt)",
      "JWT Protected Routes",
      "Role-Based Access Control",
      "Authorization Code Verification",
      "Protected API Endpoints",
      "Input Validation",
    ],
  },
  {
    title: "Administration",
    features: [
      "Admin Dashboard",
      "User Management",
      "Pending Transaction Approval",
      "KYC Submission & Review",
      "Account Suspension",
      "Account Management",
    ],
  },
  {
    title: "Platform",
    features: [
      "Swagger API Documentation",
      "MongoDB Database",
      "Cloudinary Image Uploads",
      "Docker Ready",
      "Responsive UI",
      "RESTful API",
    ],
  },
];

export default function Features() {
  return (
    <>
      <DocumentationHeader
        title="Platform Features"
        description="A complete overview of the capabilities implemented in the Digital Banking Platform."
        category="Product Overview"
        complexity="Intermediate"
        related={[
          {
            name: "Architecture",
            href: "#architecture",
          },
          {
            name: "Security",
            href: "#security",
          },
          {
            name: "API Documentation",
            href: "#api",
          },
        ]}
      />

      <div className="grid gap-8 md:grid-cols-2">
        {featureGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
          >
            <h2 className="mb-5 text-xl font-bold text-white">
              {group.title}
            </h2>

            <ul className="space-y-3">
              {group.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="font-bold text-green-400">
                    ✓
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}