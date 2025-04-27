
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-[#f5f5f5] overflow-hidden">
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1924")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
      <div className="container mx-auto px-4 h-full relative z-30 flex items-center">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Время имеет значение
          </h1>
          <p className="text-xl text-white mb-8">
            Откройте для себя коллекцию элегантных часов, которые подчеркнут ваш стиль
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/">Мужские коллекции</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black" asChild>
              <Link to="/">Женские коллекции</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
