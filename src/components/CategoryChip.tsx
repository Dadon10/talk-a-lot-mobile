import { cn } from "@/lib/utils";

interface CategoryChipProps {
  label: string;
  icon: string;
  isActive?: boolean;
  onClick?: () => void;
  color?: "pizza" | "asian" | "healthy" | "dessert" | "fast";
}

export const CategoryChip = ({ label, icon, isActive, onClick, color = "fast" }: CategoryChipProps) => {
  const colorClasses = {
    pizza: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200",
    asian: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200", 
    healthy: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",
    dessert: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
    fast: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200"
  };

  const activeClasses = {
    pizza: "bg-red-500 text-white border-red-500",
    asian: "bg-yellow-500 text-white border-yellow-500",
    healthy: "bg-green-500 text-white border-green-500", 
    dessert: "bg-purple-500 text-white border-purple-500",
    fast: "bg-orange-500 text-white border-orange-500"
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "category-chip border inline-flex items-center gap-2 cursor-pointer",
        isActive ? activeClasses[color] : colorClasses[color]
      )}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
};