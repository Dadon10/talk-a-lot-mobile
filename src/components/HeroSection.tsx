import { useState } from "react";
import { SearchBar } from "./SearchBar";
import pizzaHero from "@/assets/pizza-hero.jpg";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pizzaHero}
          alt="Delicious food delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4">
              Hungry? We've got you covered!
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Order from your favorite restaurants and get it delivered fresh to your door in minutes.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search for restaurants, cuisines, or dishes..."
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Free delivery on orders over $30</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Average delivery time: 25-35 minutes</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating gradient orbs for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};