
import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="border-b border-gray-200 bg-white">
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
            <Link to="/catalog" className="text-sm font-medium hover:underline">
              Каталог
            </Link>
            <Link to="/about" className="text-sm font-medium hover:underline">
              О нас
            </Link>
          </nav>

          {/* Right Icons - Only Cart Now */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link 
              to="/" 
              className="block font-medium hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="block font-medium hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/about" 
              className="block font-medium hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/cart" 
              className="block font-medium hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Корзина {totalItems > 0 && `(${totalItems})`}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
