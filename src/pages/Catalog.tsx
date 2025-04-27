
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample watches data
const watches = [
  {
    id: 1,
    name: "Casio Classic",
    brand: "Casio",
    price: 1500,
    image: "https://cdn.poehali.dev/files/d04e2990-f3f2-49f1-bf40-8b511ea16d01.jpg",
    description: "Классические кварцевые часы с серебристым браслетом"
  },
  {
    id: 2,
    name: "Emporio Armani Ceramica",
    brand: "Emporio Armani",
    price: 4999,
    image: "https://cdn.poehali.dev/files/15405ca8-8e6f-4c7c-bc7b-f1227537371a.jpg",
    description: "Белые керамические часы с хронографом и римскими цифрами"
  },
  {
    id: 3,
    name: "Президент России 1955",
    brand: "Президент России",
    price: 2700,
    image: "https://cdn.poehali.dev/files/2e40549c-1bac-4b0d-b9d6-80b92524931f.jpg",
    description: "Часы с гербом России и автографом на серебристо-золотом браслете"
  },
  {
    id: 4,
    name: "Rolex Diamond",
    brand: "Rolex",
    price: 2499,
    image: "https://cdn.poehali.dev/files/635559c4-97f4-47bb-8853-15a6cf08b303.jpg",
    description: "Роскошные часы с бриллиантовым напылением и золотым браслетом"
  },
  {
    id: 5,
    name: "Casio Digital",
    brand: "Casio",
    price: 549,
    image: "https://cdn.poehali.dev/files/71833363-4752-4ed2-9d1c-2ddfab1a5587.jpg",
    description: "Цифровые часы с многофункциональным дисплеем и секундомером"
  }
];

// Get unique brands
const allBrands = [...new Set(watches.map(watch => watch.brand))];

const Catalog = () => {
  const [filteredWatches, setFilteredWatches] = useState(watches);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Apply filters
  useEffect(() => {
    let result = watches;
    
    // Filter by price range
    result = result.filter(watch => 
      watch.price >= priceRange[0] && watch.price <= priceRange[1]
    );
    
    // Filter by selected brands
    if (selectedBrands.length > 0) {
      result = result.filter(watch => 
        selectedBrands.includes(watch.brand)
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(watch => 
        watch.name.toLowerCase().includes(query) || 
        watch.brand.toLowerCase().includes(query) ||
        watch.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredWatches(result);
  }, [priceRange, selectedBrands, searchQuery]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const clearFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedBrands([]);
    setSearchQuery("");
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString('ru-RU')} ₽`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white animate-fade-in">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Каталог часов</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="lg:col-span-1 bg-gray-50 p-6 rounded-md">
              <h2 className="text-xl font-bold mb-6">Фильтры</h2>
              
              {/* Search */}
              <div className="mb-6">
                <Label htmlFor="search" className="mb-2 block">Поиск</Label>
                <Input 
                  id="search"
                  placeholder="Название или бренд..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Price range filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Цена</h3>
                <div className="mb-6">
                  <Slider 
                    defaultValue={[0, 5000]} 
                    min={0} 
                    max={5000} 
                    step={100}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
              
              {/* Brand filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Бренд</h3>
                <div className="space-y-2">
                  {allBrands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandToggle(brand)}
                      />
                      <Label htmlFor={`brand-${brand}`} className="ml-2">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Clear filters button */}
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="w-full"
              >
                Сбросить фильтры
              </Button>
            </div>
            
            {/* Products grid */}
            <div className="lg:col-span-3">
              {filteredWatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredWatches.map(watch => (
                    <ProductCard key={watch.id} product={watch} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">Товары не найдены</h3>
                  <p className="text-gray-500 mt-2">Попробуйте изменить параметры фильтров</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
