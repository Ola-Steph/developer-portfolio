import Link from "next/link";
import { ArrowRight, FolderOpen, Gauge, CheckCircle2 } from "lucide-react";

interface DocumentationHeaderProps {
  title: string;
  description: string;
  category: string;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  related?: {
    name: string;
    href: string;
  }[];
}

export default function DocumentationHeader({
  title,
  description,
  category,
  complexity,
  related = [],
}: DocumentationHeaderProps) {
  return (
    <div className="mb-14">
      <h1 className="text-4xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-5 max-w-4xl leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <div className="mb-3 flex items-center gap-2 text-blue-400">
            <FolderOpen size={18} />
            <span className="font-semibold">Category</span>
          </div>

          <p className="text-slate-300">{category}</p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <div className="mb-3 flex items-center gap-2 text-green-400">
            <CheckCircle2 size={18} />
            <span className="font-semibold">Status</span>
          </div>

          <p className="font-medium text-green-400">
            Production Ready
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <div className="mb-3 flex items-center gap-2 text-yellow-400">
            <Gauge size={18} />
            <span className="font-semibold">Complexity</span>
          </div>

          <p className="text-slate-300">{complexity}</p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="mb-4 font-semibold text-white">
            Related Documentation
          </h3>

          <div className="flex flex-wrap gap-4">
            {related.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
              >
                {page.name}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}