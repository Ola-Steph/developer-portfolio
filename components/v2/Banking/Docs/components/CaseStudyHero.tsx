import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

export default function CaseStudyHero() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400">
              Featured Project
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white">
              Digital Banking Platform
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A production-ready banking application built with
              Next.js, Express, MongoDB and JWT authentication.

              The platform includes secure authentication,
              account management, KYC verification,
              money transfers, PDF receipt generation,
              admin management and complete technical
              documentation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                {[
                    "Next.js",
                    "React",
                    "Express",
                    "MongoDB",
                    "JWT",
                    "TypeScript",
                    "TailwindCSS",
                    "Cloudinary",
                ].map((tech) => (
                    <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
                    >
                    {tech}
                    </span>
                ))}
                </div>
                
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="YOUR_FRONTEND_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                <ExternalLink className="mr-2 inline" size={18} />
                Live Demo
              </a>

              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-white"
              >
                GitHub
              </a>

            </div>

          </div>


          <div className="relative overflow-hidden rounded-3xl border border-slate-800">

            <Image
              src="/images/banking/banking-dashboard.png"
              alt="Banking Dashboard"
              width={1200}
              height={800}
              className="w-full"
            />

          </div>

        </div>

      </div>





        

    </section>


        

  );


}