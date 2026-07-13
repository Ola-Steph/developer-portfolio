interface Props {
  title: string;
  subtitle: string;
  color: string;
}

export default function DeploymentNode({
  title,
  subtitle,
  color,
}: Props) {
  return (
    <div
      className={`rounded-2xl border border-slate-700 ${color} px-8 py-6 text-center shadow-lg`}
    >
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-200">
        {subtitle}
      </p>
    </div>
  );
}