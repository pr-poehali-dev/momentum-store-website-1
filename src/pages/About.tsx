
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 flex flex-col items-center">
              <AnimatedLogo className="w-60 h-60 mb-6" />
              <h1 className="text-4xl font-bold text-center mb-4">Momentum - интернет-магазин часов</h1>
              <p className="text-xl text-center font-medium mb-12">Время выбирать лучшее</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов. 
                Мы создали удобную онлайн-платформу, где каждый ценитель стильных аксессуаров может выбрать и заказать часы своей мечты, 
                не выходя из дома.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Наши преимущества:</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Широкий ассортимент высококачественных реплик премиальных брендов</li>
                <li>Доступные цены на все модели</li>
                <li>Быстрая доставка по Луганску и области</li>
                <li>Детальные фотографии и описание каждой модели</li>
                <li>Удобные способы оплаты</li>
                <li>Гарантия качества на все изделия</li>
                <li>Профессиональная онлайн-консультация</li>
              </ul>

              <p className="mt-6">
                В интернет-магазине Momentum вы легко найдете часы, которые подчеркнут ваш стиль и статус. 
                Наши реплики создаются с вниманием к мельчайшим деталям, что делает их внешне неотличимыми от оригиналов, 
                при этом стоимость остается доступной для каждого.
              </p>

              <p>
                Независимо от того, какой стиль вы предпочитаете – классические элегантные модели для деловых встреч, 
                спортивные часы для активного образа жизни или изысканные аксессуары для особых случаев – 
                каталог Momentum предлагает варианты на любой вкус.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
