import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-md border-accent hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-1 flex-grow">
          {project.description}
        </p>
      </div>

      <div className="flex gap-14">
        <Button asChild className="bg-accent hover:bg-accent-hover rounded-lg">
          <Link href={`/resume/projects/${project.slug}`}>Details</Link>
        </Button>
      </div>
    </div>
  );
}
