
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (items.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white animate-fade-in py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Корзина</h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🛒</div>
              <h2 className="text-2xl font-medium mb-4">Ваша корзина пуста</h2>
              <p className="text-gray-500 mb-8">
                Добавьте товары в корзину, чтобы продолжить покупки
              </p>
              <Button asChild className="bg-black text-white">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <h2 className="font-medium">Товар</h2>
                      </div>
                      <div className="col-span-2 text-center">
                        <h2 className="font-medium">Цена</h2>
                      </div>
                      <div className="col-span-2 text-center">
                        <h2 className="font-medium">Количество</h2>
                      </div>
                      <div className="col-span-2 text-right">
                        <h2 className="font-medium">Итого</h2>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <div key={item.id} className="px-6 py-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-6">
                            <div className="flex items-center space-x-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div>
                                <h3 className="font-medium">{item.brand} {item.name}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2 text-center">
                            <span>{formatPrice(item.price)}</span>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="col-span-2 text-right flex items-center justify-end space-x-4">
                            <span className="font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-gray-400 hover:text-red-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="text-sm"
                  >
                    Очистить корзину
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="border border-gray-200 rounded-md p-6">
                  <h2 className="text-xl font-bold mb-4">Итого</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Сумма заказа</span>
                      <span className="font-medium">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span className="font-medium">500 ₽</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="font-bold">К оплате</span>
                        <span className="font-bold">{formatPrice(totalPrice + 500)}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-black text-white"
                    size="lg"
                    onClick={handleCheckout}
                    disabled={items.length === 0}
                  >
                    Оформить заказ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
