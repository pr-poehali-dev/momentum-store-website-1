
import { Link } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="aspect-square w-full overflow-hidden bg-gray-100 mb-4 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10 group-hover:opacity-100">
          <button className="bg-white text-black py-2 px-4 text-sm font-medium">
            Быстрый просмотр
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="mt-1 text-sm">{product.category}</p>
        <p className="mt-1 font-medium">{product.price.toLocaleString()} ₽</p>
      </div>
    </div>
  );
};

export default ProductCard;
