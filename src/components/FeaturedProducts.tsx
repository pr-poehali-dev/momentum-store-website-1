
import ProductCard, { Product } from "./ProductCard";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Classic Momentum",
    price: 19500,
    imageUrl: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000",
    category: "Мужские"
  },
  {
    id: "2",
    name: "Elegance Black",
    price: 24800,
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000",
    category: "Женские"
  },
  {
    id: "3",
    name: "Chronograph Pro",
    price: 32700,
    imageUrl: "https://images.unsplash.com/photo-1548171632-c29e3c9062dc?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000",
    category: "Мужские"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Популярные модели</h2>
          <div className="h-0.5 w-20 bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
