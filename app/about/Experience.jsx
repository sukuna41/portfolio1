import React from "react";
import { experienceData } from "./ExperienceData";

const Experience = () => {
  return (
    <div className="relative h-screen w-full p-2 bg-transparent">
      <div className="space-y-6 w-60  mx-auto lg:mx-0">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className={`pt-6 lg:pt-0  border-t-2 ml-0 lg:ml-2 lg:border-l-4 lg:border-t-0 leading-5 ${exp.color} lg:pl-4 text-center lg:text-left`}
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
