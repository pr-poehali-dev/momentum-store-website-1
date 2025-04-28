
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Главный баннер */}
        <section className="bg-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <AnimatedLogo className="w-80 h-80 md:w-96 md:h-96 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                Время выбирать лучшее
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-600">
                Первый в Луганске специализированный интернет-магазин 
                качественных реплик популярных часовых брендов
              </p>
              <Button asChild size="lg" className="bg-black text-white">
                <Link to="/catalog">
                  Перейти в каталог
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* О магазине */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">О нашем магазине</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  Momentum - первый в Луганске специализированный интернет-магазин качественных реплик 
                  популярных часовых брендов. Мы создали удобную онлайн-платформу, где каждый ценитель 
                  стильных аксессуаров может выбрать и заказать часы своей мечты, не выходя из дома.
                </p>
                <p>
                  В интернет-магазине Momentum вы легко найдете часы, которые подчеркнут ваш стиль и статус. 
                  Наши реплики создаются с вниманием к мельчайшим деталям, что делает их внешне неотличимыми 
                  от оригиналов, при этом стоимость остается доступной для каждого.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-black text-white">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Широкий ассортимент</h3>
                <p className="text-gray-600">
                  Высококачественные реплики премиальных брендов на любой вкус
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-black text-white">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Доступные цены</h3>
                <p className="text-gray-600">
                  Превосходное качество по разумной стоимости без переплат
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-black text-white">
                  <span className="text-xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">
                  Оперативная доставка по Луганску и области
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы сделать заказ?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-300">
              Выберите часы своей мечты из нашего каталога или свяжитесь с нами для консультации
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <a href="https://t.me/inadache" target="_blank" rel="noopener noreferrer">
                  Связаться с нами
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
