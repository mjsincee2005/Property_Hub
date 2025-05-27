import { useState } from "react";
import { Search, Filter, MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Header from "@/components/Header";

// Mock property data - in real app this would come from your backend
const mockProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    location: "Downtown, Seattle",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    type: "Apartment",
    featured: true,
    isFavorite: false
  },
  {
    id: 2,
    title: "Luxury Family Home",
    price: 850000,
    location: "Bellevue, WA",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    type: "House",
    featured: false,
    isFavorite: false
  },
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
  },
  {
    id: 4,
    title: "Waterfront Condo",
    price: 720000,
    location: "Kirkland, WA",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    type: "Condo",
    featured: true,
    isFavorite: false
  },
  {
    id: 5,
    title: "Historic Townhouse",
    price: 650000,
    location: "Queen Anne, Seattle",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2100,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    type: "Townhouse",
    featured: false,
    isFavorite: false
  },
  {
    id: 6,
    title: "Modern Penthouse",
    price: 1200000,
    location: "South Lake Union, Seattle",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    type: "Penthouse",
    featured: true,
    isFavorite: false
  }
];

const Index = () => {
  const [properties, setProperties] = useState(mockProperties);
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Home</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the perfect property from our extensive collection of homes, apartments, and condos.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by location, property name..."
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
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      {showFilters && (
        <section className="border-b bg-white">
          <div className="container mx-auto px-4 py-6">
            <SearchFilters />
          </div>
        </section>
      )}

      {/* Properties Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
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

        {/* Properties Grid */}
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

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
