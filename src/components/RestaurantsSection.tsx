import { RestaurantCard } from "./RestaurantCard";
import pizzaHero from "@/assets/pizza-hero.jpg";
import asianBowl from "@/assets/asian-bowl.jpg";
import burger from "@/assets/burger.jpg";
import salad from "@/assets/salad.jpg";

const restaurants = [
  {
    id: "1",
    name: "Tony's Pizza Palace",
    image: pizzaHero,
    cuisine: "Italian • Pizza",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    distance: "1.2 km",
    isPromoted: true,
  },
  {
    id: "2", 
    name: "Asian Fusion Bowl",
    image: asianBowl,
    cuisine: "Asian • Healthy",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    distance: "2.1 km",
  },
  {
    id: "3",
    name: "Burger Barn",
    image: burger,
    cuisine: "American • Burgers",
    rating: 4.5,
    deliveryTime: "20-30 min", 
    deliveryFee: "Free",
    distance: "0.8 km",
  },
  {
    id: "4",
    name: "Green Garden",
    image: salad,
    cuisine: "Healthy • Salads",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    distance: "1.5 km",
  },
  {
    id: "5",
    name: "Spice Route",
    image: asianBowl,
    cuisine: "Indian • Spicy",
    rating: 4.4,
    deliveryTime: "35-45 min",
    deliveryFee: "Free",
    distance: "3.2 km",
  },
  {
    id: "6",
    name: "Mediterranean Delight",
    image: salad,
    cuisine: "Mediterranean • Healthy",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.49",
    distance: "1.8 km",
  },
];

interface RestaurantsSectionProps {
  categoryFilter?: string;
}

export const RestaurantsSection = ({ categoryFilter = "all" }: RestaurantsSectionProps) => {
  const filteredRestaurants = categoryFilter === "all" 
    ? restaurants 
    : restaurants.filter(restaurant => {
        const cuisine = restaurant.cuisine.toLowerCase();
        switch (categoryFilter) {
          case "pizza":
            return cuisine.includes("pizza") || cuisine.includes("italian");
          case "asian":
            return cuisine.includes("asian") || cuisine.includes("indian");
          case "burger":
            return cuisine.includes("burger") || cuisine.includes("american");
          case "healthy":
            return cuisine.includes("healthy") || cuisine.includes("salad") || cuisine.includes("mediterranean");
          default:
            return true;
        }
      });

  return (
    <section className="py-8 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-poppins">
            {categoryFilter === "all" ? "Popular Restaurants" : "Filtered Results"}
          </h2>
          <span className="text-muted-foreground">
            {filteredRestaurants.length} restaurants
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RestaurantCard
                {...restaurant}
                onClick={() => console.log(`Opening ${restaurant.name}`)}
              />
            </div>
          ))}
        </div>
        
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No restaurants found for this category. Try selecting a different category!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};