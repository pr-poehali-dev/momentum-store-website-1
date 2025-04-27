
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreditCard, Banknote, Truck, Home } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
  };

  const handleCloseDialog = () => {
    clearCart();
    setIsOrderPlaced(false);
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white animate-fade-in py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Контактная информация */}
                  <div className="border border-gray-200 rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">Контактная информация</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя*</Label>
                        <Input 
                          id="name" 
                          placeholder="Введите ваше имя"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон*</Label>
                        <Input 
                          id="phone" 
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Доставка */}
                  <div className="border border-gray-200 rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">Способ доставки</h2>
                    <RadioGroup 
                      value={deliveryMethod} 
                      onValueChange={setDeliveryMethod}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="delivery" className="flex items-center gap-2">
                            <Truck className="h-4 w-4" />
                            Доставка курьером
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Доставка по Луганску и области
                          </p>
                          <p className="text-red-500 font-medium mt-1">
                            Стоимость доставки: 500 ₽
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="pickup" className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            Самовывоз
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Забрать заказ из нашего пункта выдачи
                          </p>
                        </div>
                      </div>
                    </RadioGroup>

                    {deliveryMethod === "delivery" && (
                      <div className="mt-4">
                        <Label htmlFor="address">Адрес доставки*</Label>
                        <Input 
                          id="address" 
                          placeholder="Введите адрес доставки"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required={deliveryMethod === "delivery"}
                          className="mt-1"
                        />
                      </div>
                    )}
                  </div>

                  {/* Оплата */}
                  <div className="border border-gray-200 rounded-md p-6">
                    <h2 className="text-xl font-bold mb-4">Способ оплаты</h2>
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Оплата картой
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Visa, MasterCard, МИР
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="cash" className="flex items-center gap-2">
                            <Banknote className="h-4 w-4" />
                            Наличными при получении
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Оплата курьеру при доставке
                          </p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Я согласен с условиями обработки персональных данных
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-black text-white"
                      size="lg"
                    >
                      Оформить заказ
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="border border-gray-200 rounded-md p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Ваш заказ</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-10 h-10 object-cover rounded"
                        />
                        <span>
                          {item.name} <span className="text-gray-500">x{item.quantity}</span>
                        </span>
                      </div>
                      <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Сумма заказа</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span className="text-red-500 font-medium">
                      {deliveryMethod === "delivery" ? "500 ₽" : "Бесплатно"}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 mt-2">
                    <span>Итого</span>
                    <span>
                      {formatPrice(totalPrice + (deliveryMethod === "delivery" ? 500 : 0))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={isOrderPlaced} onOpenChange={setIsOrderPlaced}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Свяжитесь с нашими менеджерами</DialogTitle>
            <DialogDescription className="text-center mt-4">
              <div className="space-y-4">
                <p>Для завершения оформления заказа, пожалуйста, свяжитесь с нами:</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Telegram:</span>{" "}
                    <a 
                      href="https://t.me/inadache" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      @inadache
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Telegram:</span>{" "}
                    <a 
                      href="https://t.me/Narakame" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      @Narakame
                    </a>
                  </p>
                </div>
                <Button onClick={handleCloseDialog} className="w-full bg-black text-white">
                  Вернуться на главную
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Checkout;
