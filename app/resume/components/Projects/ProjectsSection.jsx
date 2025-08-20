// components/ProjectsSection.jsx
import ProjectCard from "./ProjectCard";
import projects from "../../data/dataProjects";
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
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 rounded-lg gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
