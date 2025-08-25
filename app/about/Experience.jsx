import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { experienceData } from "./ExperienceData";
import { ExpandMore, ExpandLess } from "@mui/icons-material"; // Import icons

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  // Tentukan berapa banyak item yang ditampilkan
  const displayedExperiences = showAll
    ? experienceData
    : experienceData.slice(0, 3);

  return (
    <div className="relative w-full p-2 bg-transparent">
      <div className="space-y-6 w-60 mx-auto lg:mx-0">
        {displayedExperiences.map((exp) => (
          <div
            key={exp.id}
            className={`pt-6 lg:pt-0 border-t-2 ml-0 lg:ml-2 lg:border-l-4 lg:border-t-0 leading-5 ${exp.color} lg:pl-4 text-center lg:text-left`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{exp.title}</h2>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-600">{exp.place}</p>
            <p className="text-gray-600">{exp.period}</p>
          </div>
        ))}

        {/* Tombol See More/Less untuk mobile saja */}
        {experienceData.length > 3 && (
          <div className="lg:hidden flex justify-center mt-6">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="sm"
              className="relative h-12 w-full rounded-lg flex items-center bg-gradient-to-t border border-accent from-accent to-accent/60 hover:bg-accent text-primary hover:scale-x-105 hover:border-accent transition-all duration-300"
            >
              {showAll ? (
                <>
                  <ExpandLess />
                  Less
                </>
              ) : (
                <>
                  <ExpandMore />
                  See More
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
