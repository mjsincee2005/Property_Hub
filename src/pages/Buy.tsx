
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Header from "@/components/Header";

// Mock properties for buy page
const buyProperties = [
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

const Buy = () => {
  const [properties, setProperties] = useState(buyProperties);
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
      
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Buy Properties</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Find your perfect home from our curated selection of properties for sale.
          </p>
          
          <div className="max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search properties for sale..."
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
              <Button className="h-12 px-8 bg-green-600 hover:bg-green-700">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Properties for Sale</h2>
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

export default Buy;
