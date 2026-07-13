interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CollectionCard({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900">

      <div className="border-b border-slate-700 p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-slate-400">
          {description}
        </p>

      </div>

      <div className="space-y-2 p-6">
        {children}
      </div>

    </div>
  );
}