import AboutCard from "./AboutCard";
import AboutHighlights from "./AboutHighlights";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            About Me
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            Passionate about building secure, scalable and
            user-focused software that solves real-world problems.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <AboutCard />

          <AboutHighlights />

        </div>

      </div>
    </section>
  );
}