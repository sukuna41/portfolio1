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
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
