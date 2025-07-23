// components/ProjectsSection.jsx
import ProjectCard from "./ProjectCard";
import projects from "../data/dataProjects";
export default function ProjectsSection() {
  if (!projects || !Array.isArray(projects)) {
    return (
      <div className="py-12">
        <p>Projects data not available</p>
      </div>
    );
  }
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-1 p-2 lg:grid-cols-3 rounded-lg gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
