import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "Search restaurants or dishes..." }: SearchBarProps) => {
  return (
    <div className="relative">
      <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-lg">
        <div className="flex items-center space-x-2 flex-1">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center space-x-1 text-primary border-l border-border/50 pl-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">Downtown</span>
        </div>
      </div>
    </div>
  );
};