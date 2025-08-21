import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="group relative rounded-lg overflow-hidden">
      {/* Glow Effect Background - Muncul saat hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent-baja/15 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

      {/* Main Card Container */}
      <div className="relative h-full bg-gradient-to-tr from-accent-baja/10 via-accent-baja/10 to-accent/10 bg-background border border-accent/30 rounded-lg p-2 transition-all duration-500 group-hover:border-accent/70 group-hover:shadow-lg">
        {/* Image Container dengan Scale Effect */}
        <div className="relative justify-items-center cursor-pointer mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={440}
            height={100}
            className="object-cover rounded-lg w-100% h-100%  contrast-110 brightness-90 saturate-110 transition-filter duration-300 group-hover:scale-y-105"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl text-gradient font-bold text-foreground">
            <span className="relative bg-accent-baja bg-clip-text text-transparent group-hover:text-accent/80 transition-colors duration-300">
              {project.title}
            </span>
          </h3>

          <p className="text-muted-foreground my-4 leading-6 line-clamp-2 flex-grow duration-300 group-hover:text-foreground">
            <span className="bg-accent-baja bg-clip-text text-transparent group-hover:text-white transition-colors">
              {project.description}
            </span>
          </p>
        </div>

        {/* Button dengan Glow Effect */}
        <div className="flex my-2">
          <div className="relative group/button">
            {/* Button Glow */}
            <div className="absolute -inset-0.5 bg-accent blur-2xl opacity-20 group-hover/button:opacity-40 transition-opacity duration-500"></div>
            <Button
              asChild
              variant="outline"
              className="relative px-4 py-2 rounded-lg bg-accent/0 hover:bg-accent text-accent border-accent/30 hover:border-primary/50 hover:font-semibold transition-all duration-300"
            >
              <Link
                className="font-extralight"
                href={`/resume/projects/${project.slug}`}
              >
                Details
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
