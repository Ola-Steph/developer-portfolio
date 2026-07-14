export default function ContactCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10">

      <h3 className="text-2xl font-bold text-white">
        Contact Information
      </h3>

      <div className="mt-8 space-y-8">

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Email
          </p>

          <a
            href="mailto:stephjaiye@gmail.com"
            className="mt-1 block text-white transition hover:text-blue-400"
          >
            stephjaiye@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">
            GitHub
          </p>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-white transition hover:text-blue-400"
          >
            github.com/YOUR_USERNAME
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">
            LinkedIn
          </p>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-white transition hover:text-blue-400"
          >
            linkedin.com/in/YOUR_LINKEDIN
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Location
          </p>

          <p className="mt-1 text-white">
              Open to Relocation • Open to Remote Positions
          </p>
        </div>

      </div>

    </div>
  );
}