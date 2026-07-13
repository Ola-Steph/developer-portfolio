import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-400">
            A selection of projects showcasing my experience in
            full-stack development, frontend engineering, API
            integration, and scalable application architecture.
          </p>

        </div>

        <FeaturedProject />

        <div className="mt-20">
          <ProjectGrid />
        </div>

      </div>
    </section>
  );
}