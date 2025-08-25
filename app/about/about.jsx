"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Experience from "./Experience";

const About = () => {
  return (
    <section className="overflow-hidden h-max">
      {/* Content Grid - Reversed layout with About first */}
      <div className="px-6 my-10 sm:my-4 md:pb-10 md:my-2 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-18">
        {/* Left - About Me (fixed height, positioned higher) */}
        <div className="lg:w-3/4 md:pr-8 lg:pt-8">
          {/* Added top padding */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl py-4 lg:pt-0 md:text-8xl lg:text-8xl text-left font-bold tracking-tight">
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

            <div className="text-sm sm:text-md xl:text-lg">
              <p className="text-white text-shadow-lg leading-7 text-left sm:text-center md:text-justify mt-0">
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
            <div className="relative mt-6 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-baja/40 to-accent/20 blur-3xl opacity-50"></div>
              <p className="hidden sm:flex p-4 text-sm sm:text-md text-center rounded-lg border border-accent/60 text-white lg:text-left md:text-lg italic">
                {'"'}Lebih baik kecewa karena mencoba daripada kecewa karena
                tidak mencoba{'"'}
              </p>
              <p className="w-full h-12 sm:hidden p-2 text-lg rounded-lg border border-accent/60 text-white items-center text-center italic">
                {'"'}Dream Big, Act Bold{'"'}
              </p>
            </div>

            {/* Buttons - moved up */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-0 sm:mt-4">
              <div className="relative group/button">
                <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-30 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  className="hidden sm:flex relative  h-10 sm:w-fit rounded-lg uppercase items-center gap-2 px-8 py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-primary/50 transition-all duration-300"
                >
                  <Code className="text-md" />
                  <span className="text-sm md:font-lg">Project</span>
                </Button>
              </div>
              <div className="relative grup/button">
                <div className="absolute -inset-0.5 bg-gradient-to-tl from-accent to-accent-baja blur-xl opacity-30 transition-opacity duration-500"></div>
                <Button
                  variant="outline"
                  size="sm"
                  className="relative h-12 w-full sm:w-fit rounded-lg uppercase flex items-center gap-2 px-8 py-0 sm:py-6 bg-gradient-to-t from-accent to-accent/60 hover:bg-accent text-primary hover:scale-y-105 hover:border-primary/50 transition-all duration-300"
                >
                  <FiDownload className="text-2xl" />
                  <span className="text-md sm:text-sm md:font-lg">
                    Download CV
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right - Experience (scrollable with proper visibility) */}
        <div className="lg:w-1/3 w-full rounded-xl ml-0 lg:ml-2 xl:ml-4 mt-12 md:mt-4 pt-6 lg:mt-8 md:pb-0 pb-6 pl-0 xl:pl-4 bg-gradient-to-tl from-accent-baja to-white lg:h-[calc(90vh-2rem)]">
          {/* Header */}
          <div className="sticky top-0 pt-4 pb-8 z-10">
            <h1 className="text-5xl ml-0 lg:ml-4 text-center lg:text-left font-bold tracking-tight">
              <span className="relative bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
          </div>

          {/* Scrollable Content Area */}
          <div className="relative flex lg:overflow-y-auto h-[calc(100%-120px)]">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
