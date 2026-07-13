import MethodBadge from "./MethodBadge";
import StatusBadge from "./StatusBadge";

interface Props {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  endpoint: string;
  title: string;
  description: string;
  protectedRoute?: boolean;
}

export default function ApiEndpointCard({
  method,
  endpoint,
  title,
  description,
  protectedRoute = false,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <div className="mb-4 flex items-center justify-between">

        <MethodBadge method={method} />

        <StatusBadge protectedRoute={protectedRoute} />

      </div>

      <h3 className="text-xl font-semibold">

        {title}

      </h3>

      <p className="mt-2 text-slate-400">

        {description}

      </p>

      <div className="mt-5 rounded-lg bg-slate-800 p-3 font-mono text-sm">

        {endpoint}

      </div>

    </div>
  );
}