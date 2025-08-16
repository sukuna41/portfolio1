import React from "react";
import { experienceData } from "./ExperienceData";

const Experience = () => {
  return (
    <div className="relative h-screen w-full p-2 bg-transparent">
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className={`border-l-4 leading-5 ${exp.color} pl-4`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{exp.title}</h2>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-600">{exp.place}</p>
            <p className="text-gray-600">{exp.period}</p>
            {/* <ul className="mt-2 list-disc list-inside text-gray-700">
              {exp.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
