"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Experience from "./Experience";

const About = () => {
  return (
    <section className="overflow-hidden h-max bg-primary">
      {/* Content Grid - Reversed layout with About first */}
      <div className="px-6 md:px-12 lg:px-24  flex flex-col lg:flex-row gap-18">
        {/* Left - About Me (fixed height, positioned higher) */}
        <div className="lg:w-3/4 pr-8 lg:pt-8">
          {/* Added top padding */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <div className="relative inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-baja blur-xl opacity-15"></div>
                <span className="relative bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent">
                  About
                </span>
              </div>
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-0.5 bg-gradient-to-r from-accent-baja to-accent/80 blur-xl opacity-15"></span>
                <span className="relative bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  Me
                </span>
              </span>
            </h1>

            <div className="text-lg">
              <p className="text-white text-shadow-lg leading-7 text-justify mt-4">
                Information Technology graduate from Kuningan University with
                strong learning ability, problem-solving skills, and expertise
                in data management. Experienced in leadership, time management,
                communication, teamwork, and resilience through active
                involvement in HIMA TI, MAPALA, and IT communities. Skilled in
                managing projects from planning to execution, adaptable in
                diverse work environments, and committed to delivering accurate,
                efficient, and timely results by combining technical,
                organizational, and interpersonal strengths.
              </p>
            </div>

            {/* Quote - moved up closer to text */}
            <div className="relative my-4 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-baja/40 to-accent/20 blur-3xl opacity-50"></div>
              <p className="p-4 rounded-lg border border-accent/60 text-white text-lg italic">
                Lebih baik kecewa karena mencoba daripada kecewa karena tidak
                mencoba
              </p>
            </div>

            {/* Buttons - moved up */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative group/button">
                <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-30 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  className="relative h-10 rounded-lg uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-primary/50 transition-all duration-300"
                >
                  <Code className="text-md" />
                  <span className="font-normal">Project</span>
                </Button>
              </div>
              <div className="relative grup/button">
                <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-30 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  size="sm"
                  className="relative h-10 rounded-lg uppercase flex items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-primary/50 transition-all duration-300"
                >
                  <FiDownload className="text-xl" />
                  <span className="font-normal">Download CV</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right - Experience (scrollable with proper visibility) */}
        <div className="lg:w-1/3 w-full rounded-xl ml-4 mt-2 pt-6 pb-6 pl-6 bg-gradient-to-tl from-accent-baja to-white h-[calc(85vh-2rem)]">
          {/* Header */}
          <div className="sticky top-0 pt-4 pb-6 z-10">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
              <span className="relative bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Work
              </span>
              <br />
              <span className="relative bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
          </div>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto h-[calc(100%-120px)] pr-2">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
