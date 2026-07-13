import EndpointCard from "./EndpointCard";

interface Props {
  title: string;
  endpoints: {
    method: string;
    endpoint: string;
  }[];
}

export default function APIGroup({
  title,
  endpoints,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-950 p-8">
      <h3 className="mb-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="space-y-3">
        {endpoints.map((endpoint) => (
          <EndpointCard
            key={`${endpoint.method}-${endpoint.endpoint}`}
            {...endpoint}
          />
        ))}
      </div>
    </div>
  );
}