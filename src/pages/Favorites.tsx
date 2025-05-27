
import { useState } from "react";
import { Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/Header";

// Mock favorite properties
const favoriteProperties = [
  {
    id: 3,
    title: "Cozy Studio Loft",
    price: 320000,
    location: "Capitol Hill, Seattle",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    type: "Studio",
    featured: false,
    isFavorite: true
  }
];

const Favorites = () => {
  const [properties, setProperties] = useState(favoriteProperties);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleFavorite = (propertyId: number) => {
    setProperties(prev => 
      prev.map(property => 
        property.id === propertyId 
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      ).filter(property => property.isFavorite) // Remove unfavorited items
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-12 w-12 mr-4" />
            <h1 className="text-4xl font-bold">Your Favorites</h1>
          </div>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Keep track of properties you love and compare them easily.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {properties.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Saved Properties</h2>
                <p className="text-gray-600">{properties.length} properties saved</p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  onClick={() => setViewMode("grid")}
                  size="sm"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  onClick={() => setViewMode("list")}
                  size="sm"
                >
                  List
                </Button>
              </div>
            </div>

            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onToggleFavorite={toggleFavorite}
                  viewMode={viewMode}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <Heart className="h-24 w-24 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">No favorites yet</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Start browsing properties and click the heart icon to save your favorites here.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">
              <Search className="h-5 w-5 mr-2" />
              Browse Properties
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;
