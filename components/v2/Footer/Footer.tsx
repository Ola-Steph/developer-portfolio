export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">

        <div>

          <h3 className="text-2xl font-bold text-white">
            JaiyeOla Stephen<span className="text-blue-500">.</span>
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Full-Stack Software Developer building
            secure, scalable and user-focused web
            applications using modern JavaScript
            technologies.
          </p>

        </div>

        <div>

          <h4 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h4>

          <div className="space-y-3">

            <a href="#home" className="block text-slate-400 hover:text-blue-400">
              Home
            </a>

            <a href="#projects" className="block text-slate-400 hover:text-blue-400">
              Projects
            </a>

            <a href="#experience" className="block text-slate-400 hover:text-blue-400">
              Experience
            </a>

            <a href="#education" className="block text-slate-400 hover:text-blue-400">
              Education
            </a>

            <a href="#contact" className="block text-slate-400 hover:text-blue-400">
              Contact
            </a>

          </div>

        </div>

        <div>

          <h4 className="mb-5 text-lg font-semibold text-white">
            Let us Connect
          </h4>

          <div className="space-y-3">

            <a
              href="mailto:YOUR_EMAIL"
              className="block text-slate-400 hover:text-blue-400"
            >
              YOUR_EMAIL
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-400 hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-400 hover:text-blue-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

      <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} JaiyOla Stephen.
        All rights reserved.

      </div>
    </footer>
  );
}