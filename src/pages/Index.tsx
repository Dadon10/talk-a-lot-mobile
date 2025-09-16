import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { RestaurantsSection } from "@/components/RestaurantsSection";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CategoriesSection onCategoryChange={setSelectedCategory} />
      <RestaurantsSection categoryFilter={selectedCategory} />
    </div>
  );
};

export default Index;