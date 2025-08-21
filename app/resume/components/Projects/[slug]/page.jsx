import { projects } from "../../data/dataProjects";
import ProjectDetailClient from "./ProjectDetailClient";

// GENERATE STATIC PARAMS - Untuk static export
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// METADATA - Untuk SEO
export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description.substring(0, 160),
    openGraph: {
      title: project.title,
      description: project.description.substring(0, 160),
      images: [project.image],
    },
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
