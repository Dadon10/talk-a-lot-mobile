import { useState } from "react";
import { CategoryChip } from "./CategoryChip";

const categories = [
  { id: "all", label: "All", icon: "🍴", color: "fast" as const },
  { id: "pizza", label: "Pizza", icon: "🍕", color: "pizza" as const },
  { id: "asian", label: "Asian", icon: "🥢", color: "asian" as const },
  { id: "burger", label: "Burgers", icon: "🍔", color: "fast" as const },
  { id: "healthy", label: "Healthy", icon: "🥗", color: "healthy" as const },
  { id: "dessert", label: "Desserts", icon: "🍰", color: "dessert" as const },
  { id: "mexican", label: "Mexican", icon: "🌮", color: "pizza" as const },
  { id: "coffee", label: "Coffee", icon: "☕", color: "fast" as const },
];

interface CategoriesSectionProps {
  onCategoryChange?: (categoryId: string) => void;
}

export const CategoriesSection = ({ onCategoryChange }: CategoriesSectionProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold font-poppins mb-6 text-center">
          What are you craving?
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {categories.map((category) => (
            <CategoryChip
              key={category.id}
              label={category.label}
              icon={category.icon}
              color={category.color}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};