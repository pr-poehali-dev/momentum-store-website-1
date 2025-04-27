
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <Categories />
        
        {/* Преимущества */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-black rounded-full">
                  <span className="text-xl">✈️</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Бесплатная доставка</h3>
                <p className="text-sm text-gray-600">
                  Быстрая доставка по всей России при заказе от 5000 ₽
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-black rounded-full">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Гарантия качества</h3>
                <p className="text-sm text-gray-600">
                  2 года гарантии на все часы от производителя
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-black rounded-full">
                  <span className="text-xl">💎</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Подлинные изделия</h3>
                <p className="text-sm text-gray-600">
                  Только оригинальная продукция с сертификатами
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Подписка */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на новости</h2>
            <p className="max-w-lg mx-auto mb-8">
              Будьте в курсе наших новых коллекций и специальных предложений
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow px-4 py-2 text-black focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 font-medium"
              >
                Подписаться
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
