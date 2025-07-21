// app/resume/projects/[slug]/page.jsx
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Code2, Star, ChevronRight } from "lucide-react";
import { projects } from "@/app/resume/data/dataProjects";
import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Back Button and Breadcrumb */}
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/resume"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Projects</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-700 font-medium">{project.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6 ">
            <div>
              <h1 className="text-4xl font-semibold text-primary mb-2">
                {project.title}
              </h1>
              <p className="text-gray-700 text text-justify mt-4">
                {project.description}
              </p>
            </div>
            {/* Feature */}
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <div className="p-2 rounded-full bg-accent">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                Features Utama
              </h3>
              <ul className="space-y-1 mt-4">
                {project.features?.map((feature, index) => (
                  <li key={index} className="ml-8 flex items-start gap-3">
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 mt-14">
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
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-accent">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-gray-900">
                      {project.techStack?.length || 0}
                      <span> Teknologi</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-gray-900">
                      {project.features?.length || 0}
                      <span> Featur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Teknologi yang digunakan */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                Technologies yang digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-accent text-primary text-sm rounded-lg"
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
