"use client";

import { ChevronLeft, Code2, Star, SquareChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ProjectDetailClient = ({ project }) => {
  return (
    <div className="h-full py-2">
      <div className="px-6 md:px-12 lg:px-24 flex flex-col">
        {/* Back Button and Breadcrumb */}
        <div className="flex flex-row items-center gap-4 mb-6">
          <Button className="rounded-sm h-6 bg-transparent w-auto px-1 py-1 sm:py-0 border border-accent  transition-all duration-300">
            <Link
              href="/#resume"
              className="flex items-center transition-colors"
            >
              <ChevronLeft className="h-4 w-auto text-white" />
              <span className="text-primary text-sm font-light hidden sm:inline">
                Back
              </span>
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-md text-gray-500">
            <span className="text-white font-medium">{project.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-10">
          {/* Left Column */}
          <div className="order-2 sm:order-1 space-y-6">
            <div>
              <h1 className="hidden sm:flex text-3xl font-semibold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-white text-sm sm:text-md text-justify">
                {project.description}
              </p>
            </div>
            {/* Feature */}
            <div className="py-4 px-6 rounded-xl shadow border border-accent">
              <h3 className="text-md md:text-3xl font-semibold text-white flex items-center gap-2">
                Features
              </h3>
              <ul className="space-y-2 mt-4">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Star className="w-4 h-4 text-white" />

                    <span className="text-white text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 sm:order-2 space-y-6">
            {/* Project Image */}
            <div className="relative rounded-xl overflow-hidden border border-accent shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Key Features */}
            <div className="sm:flex hidden grid-rows-2 md:grid-cols-2 gap-4">
              {/* Teknologi */}
              <div className=" flex items-center shadow-2xl h-10 w-auto px-2 py-4 rounded-lg border border-accent">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-white">
                    {project.features?.length || 0}
                    <span> Technologi</span>
                  </div>
                </div>
              </div>
              {/* Feature */}
              <div className=" flex items-center shadow-2xl h-10 w-auto px-2 py-4 rounded-lg border border-accent">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-white">
                    {project.features?.length || 0}
                    <span> Features</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Teknologi yang digunakan */}
            {/* <div className="space-y-4">
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
            </div> */}

            {/* Demo dan GitHub Links */}
            {(project.demoUrl !== "#" || project.githubUrl !== "#") && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Links</h3>
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailClient;
