interface Props {
  label: string;
  value: string;
}

export default function DatabaseMetric({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-center">

      <div className="text-4xl font-bold text-blue-400">
        {value}
      </div>

      <div className="mt-3 text-slate-400">
        {label}
      </div>

    </div>
  );
}