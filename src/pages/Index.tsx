
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
              <AnimatedLogo className="w-48 h-48 md:w-60 md:h-60 mb-6" />
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
        
        {/* Коллекции */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши коллекции</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CollectionCard 
                title="Классика" 
                image="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600"
                description="Элегантные модели для деловых встреч и особых случаев"
              />
              <CollectionCard 
                title="Спорт" 
                image="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600"
                description="Надежные часы для активного образа жизни"
              />
              <CollectionCard 
                title="Премиум" 
                image="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600"
                description="Роскошные реплики известных брендов"
              />
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-black text-white">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Широкий ассортимент</h3>
                <p className="text-gray-600">
                  Высококачественные реплики премиальных брендов на любой вкус
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-black text-white">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Доступные цены</h3>
                <p className="text-gray-600">
                  Превосходное качество по разумной стоимости без переплат
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
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

const CollectionCard = ({ 
  title, 
  image, 
  description 
}: { 
  title: string; 
  image: string; 
  description: string 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg hover-scale">
      <div className="absolute inset-0 bg-black opacity-30 transition-opacity group-hover:opacity-20"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
          <Link to="/catalog">Смотреть коллекцию</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
