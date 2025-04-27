
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MOMENTUM</h3>
            <p className="text-sm text-gray-300">
              Первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-4">Магазин</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-sm text-gray-300 hover:text-white">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-gray-300 hover:text-white">
                  Новинки
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-gray-300 hover:text-white">
                  Популярное
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Оплата
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                Город Луганск
              </li>
              <li className="text-sm text-gray-300">
                <a href="tel:+79591398715" className="hover:text-white">
                  +7 (959) 139-87-15
                </a>
              </li>
              <li className="text-sm text-gray-300">
                <a href="tel:+79591526836" className="hover:text-white">
                  +7 (959) 152-68-36
                </a>
              </li>
              <li className="text-sm text-gray-300">
                <a 
                  href="https://t.me/inadache" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Telegram: @inadache
                </a>
              </li>
              <li className="text-sm text-gray-300">
                <a 
                  href="https://t.me/Narakame" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Telegram: @Narakame
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">
            © 2025 Momentum. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
