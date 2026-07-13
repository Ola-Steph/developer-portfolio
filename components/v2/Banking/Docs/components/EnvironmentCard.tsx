interface Props {
  name: string;
  description: string;
}

export default function EnvironmentCard({
  name,
  description,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">

      <h3 className="text-xl font-semibold">

        {name}

      </h3>

      <p className="mt-3 text-slate-400">

        {description}

      </p>

    </div>
  );
}