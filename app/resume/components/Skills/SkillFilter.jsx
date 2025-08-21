export default function SkillFilter({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? "bg-gradient-to-b from-accent to-accent/90 text-primary"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
