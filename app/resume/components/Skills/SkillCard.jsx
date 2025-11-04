"use client";
import Image from "next/image";
import { useState } from "react";

export default function SkillCard({ skill }) {
  const [imgError, setImgError] = useState(false);

  if (imgError || !skill.logo) {
    return (
      <div className="group relative rounded-lg overflow-hidden">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent-baja/15 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
        <div className="relative h-full bg-gradient-to-tr from-accent-baja/10 via-accent-baja/10 to-accent/10 bg-background border border-accent/30 rounded-lg p-6 transition-all duration-500 group-hover:border-accent/70 group-hover:shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-accent/10 rounded-full">
              <span className="text-accent text-2xl">
                {skill.name.charAt(0)}
              </span>
            </div>
            <h3 className="text-sm sm:text-xl text-gradient font-bold text-center">
              <span className="relative bg-accent-baja bg-clip-text text-transparent group-hover:text-accent/80 transition-colors duration-300">
                {skill.name}
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-lg overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 to-accent-baja/15 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

      {/* Main Card Container */}
      <div className="relative xl:py-14 h-full bg-gradient-to-tr from-accent-baja/10 via-accent-baja/10 to-accent/10 bg-background border border-accent/30 rounded-lg p-6 transition-all duration-500 group-hover:border-accent/70 group-hover:shadow-lg">
        <div className="flex flex-col items-center">
          {/* Image Container */}
          <div
            className={`relative w-14 h-14 lg:w-24 lg:h-24 my-4 overflow-hidden flex items-center justify-center ${
              skill.name === "SAP" ? "scale-125" : ""
            }`}
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              height={200}
              width={200}
              className="object-cover absolute transition-transform duration-500 group-hover:scale-95"
              unoptimized
              onError={() => setImgError(true)}
            />
          </div>

          {/* Skill Name */}
          <h3 className="text-sm md:text-lg text-gradient font-bold text-center">
            <span className="relative bg-accent-baja bg-clip-text text-transparent group-hover:text-accent/80 transition-colors duration-300">
              {skill.name}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
