"use client";

import TechIcon from "../../components/TechIcon";

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  // ... tambahkan lainnya
];

export default function TechStackSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
      {techStacks.map((stack, index) => (
        <TechIcon key={index} icon={stack.icon} language={stack.language} />
      ))}
    </div>
  );
}
