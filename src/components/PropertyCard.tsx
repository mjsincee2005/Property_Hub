
import { Heart, MapPin, Bed, Bath, Square, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: string;
  featured: boolean;
  isFavorite: boolean;
}

interface PropertyCardProps {
  property: Property;
  onToggleFavorite: (id: number) => void;
  viewMode: "grid" | "list";
}

const PropertyCard = ({ property, onToggleFavorite, viewMode }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative w-80 h-60">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover rounded-l-lg"
              />
              {property.featured && (
                <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
                  Featured
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                className={`absolute top-3 right-3 p-2 rounded-full ${
                  property.isFavorite 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-white/80 text-gray-600 hover:bg-white'
                }`}
                onClick={() => onToggleFavorite(property.id)}
              >
                <Heart className={`h-4 w-4 ${property.isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
            
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <Badge variant="secondary">{property.type}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {formatPrice(property.price)}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 group">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          {property.featured && (
            <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
              Featured
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
              property.isFavorite 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/80 text-gray-600 hover:bg-white'
            }`}
            onClick={() => onToggleFavorite(property.id)}
          >
            <Heart className={`h-4 w-4 ${property.isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {property.title}
            </h3>
            <Badge variant="secondary">{property.type}</Badge>
          </div>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.sqft.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              {formatPrice(property.price)}
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
