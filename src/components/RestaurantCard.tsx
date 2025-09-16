import { Clock, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  distance: string;
  isPromoted?: boolean;
  onClick?: () => void;
}

export const RestaurantCard = ({
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  distance,
  isPromoted,
  onClick
}: RestaurantCardProps) => {
  return (
    <Card className="card-restaurant cursor-pointer group" onClick={onClick}>
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {isPromoted && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Promoted
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm">{cuisine}</p>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{distance}</span>
            </div>
          </div>
          
          <div className="pt-2 border-t border-border">
            <span className="text-sm font-medium">
              Delivery {deliveryFee === "Free" ? (
                <span className="text-accent">Free</span>
              ) : (
                deliveryFee
              )}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};