import type { JourneyItem } from "./journey-data";

interface Props {
  item: JourneyItem;
}

export default function JourneyCard({ item }: Props) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h3 className="text-2xl font-bold text-white">
            {item.company}
          </h3>

          <p className="mt-2 text-blue-400">
            {item.role}
          </p>

        </div>

        <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
          {item.period}
        </span>

      </div>

      <ul className="mt-8 space-y-4">

        {item.achievements.map((achievement: string) => (
          <li
            key={achievement}
            className="flex gap-3 text-slate-400"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

            <span>{achievement}</span>

          </li>
        ))}

      </ul>

      <div className="mt-8 flex flex-wrap gap-3">

        {item.technologies.map((tech: string) => (
          <span
            key={tech}
            className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400"
          >
            {tech}
          </span>
        ))}

      </div>

    </article>
  );
}