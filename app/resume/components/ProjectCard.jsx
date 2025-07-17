// components/ProjectCard.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow-md border-accent">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <Button asChild className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
        <Link href={`/resume/projects/${project.slug}`}>View Details →</Link>
      </Button>
    </div>
  );
}
