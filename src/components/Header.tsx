
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            MOMENTUM
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm font-medium hover:underline">
              Главная
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              Коллекции
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              Мужские
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              Женские
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline">
              О нас
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <Link to="/" className="block font-medium hover:text-gray-600">
              Главная
            </Link>
            <Link to="/" className="block font-medium hover:text-gray-600">
              Коллекции
            </Link>
            <Link to="/" className="block font-medium hover:text-gray-600">
              Мужские
            </Link>
            <Link to="/" className="block font-medium hover:text-gray-600">
              Женские
            </Link>
            <Link to="/" className="block font-medium hover:text-gray-600">
              О нас
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
