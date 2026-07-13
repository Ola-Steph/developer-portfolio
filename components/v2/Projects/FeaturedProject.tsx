import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProject() {
  const banking = projects.find(
    (project) => project.featured
  );

  if (!banking) return null;

  return (
    <ProjectCard
      {...banking}
      featured
    />
  );
}