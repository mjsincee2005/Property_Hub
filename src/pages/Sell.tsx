
import { useState } from "react";
import { Upload, DollarSign, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const Sell = () => {
  const [formData, setFormData] = useState({
    address: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    price: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property listing submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sell Your Property</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            List your property with us and reach thousands of potential buyers.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Property Address</label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter full address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Property Type</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      >
                        <option value="">Select type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Asking Price</label>
                      <Input
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="$500,000"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Bedrooms</label>
                      <Input
                        name="bedrooms"
                        type="number"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        placeholder="3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bathrooms</label>
                      <Input
                        name="bathrooms"
                        type="number"
                        step="0.5"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        placeholder="2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Square Feet</label>
                      <Input
                        name="sqft"
                        type="number"
                        value={formData.sqft}
                        onChange={handleInputChange}
                        placeholder="1500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Describe your property..."
                      required
                    />
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload property photos</p>
                    <p className="text-sm text-gray-500">Drag and drop or click to browse</p>
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    List My Property
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Why Sell With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Maximum Exposure</h4>
                    <p className="text-sm text-gray-600">Reach thousands of qualified buyers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Expert Support</h4>
                    <p className="text-sm text-gray-600">Professional guidance throughout</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Quick Sale</h4>
                    <p className="text-sm text-gray-600">Average 30 days on market</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">95%</div>
                    <div className="text-sm text-gray-600">Sale Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">$750K</div>
                    <div className="text-sm text-gray-600">Average Sale Price</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">28</div>
                    <div className="text-sm text-gray-600">Days on Market</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;
