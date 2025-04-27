
import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/useCart";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.brand} ${product.name}`,
    });
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Удалено из избранного" : "Добавлено в избранное",
      description: `${product.brand} ${product.name}`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="group bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg hover-scale"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pb-[100%] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 right-3">
          <Button 
            variant="outline" 
            size="icon" 
            className={`rounded-full bg-white ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
            onClick={handleFavoriteToggle}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        {product.category === 'luxury' && (
          <Badge className="absolute top-3 left-3 bg-black text-white">
            Премиум
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-1">
          <h3 className="font-medium text-sm text-gray-500">
            {product.brand}
          </h3>
          <h2 className="font-bold text-lg">
            {product.name}
          </h2>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="font-bold text-lg">
            {formatPrice(product.price)}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="bg-black text-white hover:bg-gray-800"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
