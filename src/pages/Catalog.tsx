
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample watches data
const watches = [
  {
    id: 1,
    name: "Classic Chronograph",
    brand: "Rolex",
    price: 12500,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
    category: "luxury"
  },
  {
    id: 2,
    name: "Dive Master 500",
    brand: "Omega",
    price: 8900,
    image: "https://images.unsplash.com/photo-1548171916-c0ed6077f8a8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
    category: "sport"
  },
  {
    id: 3,
    name: "Royal Oak",
    brand: "Audemars Piguet",
    price: 18500,
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
    category: "luxury"
  },
  {
    id: 4,
    name: "Classic Fusion",
    brand: "Hublot",
    price: 9800,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
    category: "luxury"
  },
  {
    id: 5,
    name: "Aqua Terra",
    brand: "Omega",
    price: 5600,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
    category: "classic"
  },
  {
    id: 6,
    name: "Pilot's Watch",
    brand: "IWC",
    price: 7200,
    image: "https://images.unsplash.com/photo-1633820734030-118aa7d28239?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
    category: "sport"
  }
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredWatches = activeCategory === "all" 
    ? watches 
    : watches.filter(watch => watch.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Каталог часов</h1>
          
          <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="luxury">Премиум</TabsTrigger>
                <TabsTrigger value="classic">Классические</TabsTrigger>
                <TabsTrigger value="sport">Спортивные</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWatches.map(watch => (
                  <ProductCard key={watch.id} product={watch} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWatches.map(watch => (
                  <ProductCard key={watch.id} product={watch} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="classic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWatches.map(watch => (
                  <ProductCard key={watch.id} product={watch} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sport" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWatches.map(watch => (
                  <ProductCard key={watch.id} product={watch} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
