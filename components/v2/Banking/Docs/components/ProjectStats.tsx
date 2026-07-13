const stats = [
  {
    label: "REST API Endpoints",
    value: "20+",
  },
  {
    label: "Authentication",
    value: "JWT",
  },
  {
    label: "Database",
    value: "MongoDB",
  },
  {
    label: "Architecture",
    value: "MVC",
  },
];

export default function ProjectStats() {
  return (
    <section className="border-b border-slate-800 bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-8 text-center"
          >
            <p className="text-4xl font-bold text-blue-400">
              {stat.value}
            </p>

            <p className="mt-3 text-slate-400">
              {stat.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}