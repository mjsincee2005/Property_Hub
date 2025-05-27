
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, User, Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">PropertyHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/buy" className="text-gray-700 hover:text-blue-600 font-medium">
              Buy
            </Link>
            <Link to="/rent" className="text-gray-700 hover:text-blue-600 font-medium">
              Rent
            </Link>
            <Link to="/sell" className="text-gray-700 hover:text-blue-600 font-medium">
              Sell
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/favorites">
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5 mr-2" />
                Favorites
              </Button>
            </Link>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/account">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>My Properties</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(true)}>
                  Sign In
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/buy" className="text-gray-700 hover:text-blue-600 font-medium px-4">
                Buy
              </Link>
              <Link to="/rent" className="text-gray-700 hover:text-blue-600 font-medium px-4">
                Rent
              </Link>
              <Link to="/sell" className="text-gray-700 hover:text-blue-600 font-medium px-4">
                Sell
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium px-4">
                About
              </Link>
              <div className="px-4 pt-4 border-t space-y-2">
                <Link to="/favorites">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Heart className="h-5 w-5 mr-2" />
                    Favorites
                  </Button>
                </Link>
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <Link to="/account">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="h-5 w-5 mr-2" />
                        Account
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Sign In
                    </Button>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
