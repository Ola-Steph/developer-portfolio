import DocumentationHeader from "../components/DocumentationHeader";
import ApiExplorer from "../components/ApiExplorer";

export default function API() {
  return (
    <div className="space-y-16">

      <DocumentationHeader
        title="API Documentation"
        description="The banking platform exposes a RESTful API secured with JWT authentication and role-based authorization. The endpoints below illustrate the primary capabilities available to client applications."
        category="Backend"
        complexity="Advanced"
        related={[
          {
            name: "Authentication",
            href: "/banking/docs/authentication",
          },
          {
            name: "Security",
            href: "/banking/docs/security",
          },
          {
            name: "Database",
            href: "/banking/docs/database",
          },
        ]}
      />

      <ApiExplorer />

    </div>
  );
}