import DeploymentNode from "./DeploymentNode";
import DeploymentConnection from "./DeploymentConnection";

export default function DeploymentDiagram() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10">

      <h2 className="mb-10 text-center text-3xl font-bold">

        Production Deployment Architecture

      </h2>

      <div className="flex flex-col items-center gap-5">

        <DeploymentNode
          title="Vercel"
          subtitle="Next.js Frontend"
          color="bg-black"
        />

        <DeploymentConnection />

        <DeploymentNode
          title="Render"
          subtitle="Express API"
          color="bg-indigo-900"
        />

        <DeploymentConnection />

        <DeploymentNode
          title="MongoDB Atlas"
          subtitle="Database"
          color="bg-green-900"
        />

      </div>

    </div>
  );
}