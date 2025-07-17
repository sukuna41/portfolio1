// app/resume/components/TechStackSection.jsx
const TechStackSection = () => {
  const techStacks = [
    { name: "Next.js", icon: "/tech-icons/next.svg" },
    { name: "React", icon: "/tech-icons/react.svg" },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {techStacks.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 p-3 border rounded-lg"
          >
            <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
