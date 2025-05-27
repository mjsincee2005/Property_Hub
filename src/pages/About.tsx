
import { Users, Award, Home, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description: "15+ years in real estate with a passion for helping families find their dream homes."
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description: "Expert negotiator with over $100M in successful property transactions."
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description: "Specializes in luxury properties and investment opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About PropertyHub</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're passionate about connecting people with their perfect properties. 
            With years of experience and a commitment to excellence, we make real estate simple.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Home className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">500+ Properties</h3>
            <p className="text-gray-600">Extensive portfolio across the region</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1000+ Clients</h3>
            <p className="text-gray-600">Happy families in their dream homes</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15+ Awards</h3>
            <p className="text-gray-600">Recognition for excellence in service</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">5 Star Service</h3>
            <p className="text-gray-600">Commitment to customer satisfaction</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              Founded in 2010, PropertyHub started with a simple mission: to make real estate 
              transactions transparent, efficient, and stress-free. What began as a small local 
              agency has grown into one of the region's most trusted property platforms.
            </p>
            <p className="mb-6">
              We believe that buying, selling, or renting a property should be an exciting journey, 
              not a stressful ordeal. That's why we've built a team of dedicated professionals who 
              are committed to providing personalized service and expert guidance every step of the way.
            </p>
            <p>
              Today, we're proud to have helped thousands of families find their perfect homes and 
              assisted countless property owners in achieving their real estate goals. Our success 
              is measured not just in transactions, but in the lasting relationships we build with our clients.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
