
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-20"></div>
      <div className="container mx-auto px-4 h-full relative z-30 flex flex-col items-center justify-center text-center">
        <AnimatedLogo className="w-48 h-48 md:w-72 md:h-72 mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight tracking-tighter">
          Время выбирать лучшее
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl">
          Momentum — первый в Луганске специализированный интернет-магазин 
          качественных реплик популярных часовых брендов
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-black text-white" asChild>
            <Link to="/catalog">Каталог</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-black" asChild>
            <Link to="/about">О нас</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
