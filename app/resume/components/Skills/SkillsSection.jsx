"use client";
import { useState } from "react";
import { skills, categories } from "../../data/dataSkills"; // Perhatikan path import
import SkillCard from "./SkillCard"; // Import default

export default function SkillsSection() {
  const categories = [
    { id: "all", name: "All" },
    { id: "language", name: "Programing Language" },
    { id: "framework", name: "Framework" },
    { id: "tool", name: "Development Tool" },
    { id: "administration", name: "Support Administration" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id} // Key untuk kategori
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-gradient-to-b from-accent to-accent/90 text-primary"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 rounded-lg">
        {" "}
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
