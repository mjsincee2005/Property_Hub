
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Header from "@/components/Header";

// Mock properties for rent page
const rentProperties = [
  {
    id: 7,
    title: "Studio Apartment Downtown",
    price: 1800,
    location: "Downtown, Seattle",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    type: "Studio",
    featured: false,
    isFavorite: false
  },
  {
    id: 8,
    title: "Cozy 2BR Near University",
    price: 2200,
    location: "University District, Seattle",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 900,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    type: "Apartment",
    featured: true,
    isFavorite: false
  },
  {
    id: 9,
    title: "Luxury High-Rise Rental",
    price: 3500,
    location: "Bellevue, WA",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    type: "Apartment",
    featured: true,
    isFavorite: false
  }
];

const Rent = () => {
  const [properties, setProperties] = useState(rentProperties);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleFavorite = (propertyId: number) => {
    setProperties(prev => 
      prev.map(property => 
        property.id === propertyId 
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      )
    );
  };

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Rent Properties</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover rental properties that fit your lifestyle and budget.
          </p>
          
          <div className="max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search rental properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-gray-900"
                />
              </div>
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="h-12 px-6 text-gray-900 border-gray-300"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              <Button className="h-12 px-8 bg-purple-600 hover:bg-purple-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showFilters && (
        <section className="border-b bg-white">
          <div className="container mx-auto px-4 py-6">
            <SearchFilters />
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties for Rent</h2>
            <p className="text-gray-600">{filteredProperties.length} properties found</p>
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
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onToggleFavorite={toggleFavorite}
              viewMode={viewMode}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rent;
