import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects
        .filter((project) => !project.featured)
        .map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
    </div>
  );
}