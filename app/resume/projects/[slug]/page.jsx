// app/resume/projects/[slug]/page.jsx
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, Star, SquareChevronRight } from "lucide-react";
import { projects } from "@/app/resume/data/dataProjects";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-baja to-accent-baja/70 py-10">
      <div className="px-6 md:px-12 lg:px-24 flex flex-col">
        {/* Back Button and Breadcrumb */}
        <div className="flex flex-row gap-4 mb-6">
          <Button className="rounded-lg  hover:bg-white bg-gradient-to-r from-primary to-primary/80">
            <Link
              href="/resume"
              className="flex items-center gap-2 text-white hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <SquareChevronRight className="w-6 h-6 text-primary/60" />
            <span className="text-primary font-medium">{project.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6 ">
            <div>
              <h1 className="text-5xl font-semibold text-primary mb-2">
                {project.title}
              </h1>
              <p className="text-gray-700 text text-justify mt-4">
                {project.description}
              </p>
            </div>
            {/* Feature */}
            <div className="bg-gradient-to-br from-primary to-primary/90 pt-6 pb-8 px-10 rounded-xl shadow border border-primary/40">
              <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
                Features Utama
              </h3>
              <ul className="space-y-2 mt-4">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-1 rounded-lg bg-white">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white/80 text-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              {/* Teknologi */}
              <div className="bg-gradient-to-l shadow-2xl from-primary to-primary/80 px-6 py-4 rounded-lg border border-primary/40">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-white">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-md font-semibold text-white">
                    {project.techStack?.length || 0}
                    <span> Teknologi</span>
                  </div>
                </div>
              </div>
              {/* Feature */}
              <div className="bg-gradient-to-r from-primary to-primary/80 shadow-2xl px-6 py-4 rounded-lg border border-primary/40">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-md font-semibold text-white">
                    {project.features?.length || 0}
                    <span> Featur</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Teknologi yang digunakan */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                Teknologi yang digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-b from-primary to-primary/80 text-white text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
