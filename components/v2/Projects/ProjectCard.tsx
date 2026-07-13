import Image from "next/image";
import {
  ExternalLink,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string | null;
  featured?: boolean;
  docs?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  featured = false,
  docs = false,
}: Props) {
  return (
    <article
      className={`overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-blue-500 ${
        featured ? "lg:flex lg:gap-8" : ""
      }`}
    >
      <div
        className={`relative ${
          featured
            ? "lg:w-1/2 h-[420px]"
            : "h-56"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div
        className={`p-8 ${
          featured ? "lg:w-1/2" : ""
        }`}
      >
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href="https://banking-app-frontend-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 transition hover:border-white"
            >
              <span>GitHub</span>
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="rounded-xl border border-slate-700 px-5 py-3 text-slate-500"
            >
              GitHub Available on Request
            </button>
          )}

          {docs && (
  <Link
    href="/banking"
    className="flex items-center gap-2 rounded-xl border border-green-600 px-5 py-3 text-green-400 transition hover:bg-green-600 hover:text-white"
  >
    <FileText size={18} />
    Engineering Case Study
  </Link>
)}

        </div>
      </div>
    </article>
  );
}