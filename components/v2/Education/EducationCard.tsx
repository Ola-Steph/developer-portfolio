interface Props {
  item: {
    degree: string;
    institution: string;
    period: string;
    description: string;
  };
}

export default function EducationCard({ item }: Props) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {item.degree}
          </h3>

          <p className="mt-2 text-blue-400">
            {item.institution}
          </p>

        </div>

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {item.period}
        </span>

      </div>

      <p className="mt-6 leading-8 text-slate-400">
        {item.description}
      </p>

    </article>
  );
}