import DocumentationHeader from "../components/DocumentationHeader";

import DeploymentDiagram from "../components/DeploymentDiagram";
import EnvironmentCard from "../components/EnvironmentCard";
import FeatureCheck from "../components/FeatureCheck";

export default function Deployment() {
  return (
    <div className="space-y-16">

      <DocumentationHeader
        title="Deployment"
        description="The banking application is deployed using a modern cloud architecture with separate frontend, backend and database services."
        category="Infrastructure"
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
            name: "Database",
            href: "/banking/docs/database",
          },
        ]}
      />

      <DeploymentDiagram />

      <section>

        <h2 className="mb-8 text-3xl font-bold">

          Environment Configuration

        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <EnvironmentCard
            name="Frontend"
            description="Next.js application deployed on Vercel."
          />

          <EnvironmentCard
            name="Backend"
            description="Express.js REST API deployed on Render."
          />

          <EnvironmentCard
            name="Database"
            description="MongoDB Atlas cloud database."
          />

          <EnvironmentCard
            name="Storage"
            description="Cloudinary for user profile images and KYC document storage."
          />

        </div>

      </section>

      <section>

        <h2 className="mb-8 text-3xl font-bold">

          Production Features

        </h2>

        <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-900 p-8">

          <FeatureCheck text="Dockerized backend deployment" />
          <FeatureCheck text="Cloud-hosted MongoDB Atlas database" />
          <FeatureCheck text="HTTPS secured communication" />
          <FeatureCheck text="JWT authentication" />
          <FeatureCheck text="Role-based authorization" />
          <FeatureCheck text="Cloudinary media storage" />
          <FeatureCheck text="Email verification workflow" />
          <FeatureCheck text="Password recovery" />

        </div>

      </section>

    </div>
  );
}