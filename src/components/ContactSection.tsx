import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Send, MessageCircle, Phone, Mail, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const filmOptions = ["Базовый", "Продвинутый", "Максимальный"];

// Simple captcha: generate a math question
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { question: `${num1} + ${num2} = ?`, answer: num1 + num2 };
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    filmOption: "",
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    if (parseInt(captchaInput) !== captcha.answer) {
      toast({
        title: "Ошибка капчи",
        description: "Неверный ответ. Попробуйте ещё раз.",
        variant: "destructive",
      });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Заявка на плёнку: ${formData.filmOption}`);
    const body = encodeURIComponent(
      `ФИО: ${formData.fullName}\nТелефон: ${formData.phone}\nГород: ${formData.city}\nВариант плёнки: ${formData.filmOption}`
    );
    
    // Open email client
    window.location.href = `mailto:vlad-pu@mail.ru?subject=${subject}&body=${body}`;

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ fullName: "", phone: "", city: "", filmOption: "" });
    setCaptchaInput("");
    refreshCaptcha();
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Оставить <span className="text-gradient">заявку</span>
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Truck className="w-6 h-6" />
            <span className="text-xl font-semibold">Бесплатная доставка</span>
          </div>
          <p className="text-xl text-muted-foreground">
            Заполните форму и мы свяжемся с вами
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-foreground">
                  Ваше ФИО
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Иванов Иван Иванович"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2 text-foreground">
                  Город
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Москва"
                />
              </div>

              <div>
                <label htmlFor="filmOption" className="block text-sm font-medium mb-2 text-foreground">
                  Вариант плёнки
                </label>
                <select
                  id="filmOption"
                  name="filmOption"
                  value={formData.filmOption}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                >
                  <option value="">Выберите комплект</option>
                  {filmOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Simple Captcha */}
              <div>
                <label htmlFor="captcha" className="block text-sm font-medium mb-2 text-foreground">
                  Решите пример: <span className="text-primary font-bold">{captcha.question}</span>
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    id="captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground"
                    placeholder="Ваш ответ"
                  />
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="px-4 py-3 bg-card border border-border rounded-xl hover:border-primary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    ↻
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold accent-gradient text-primary-foreground rounded-xl glow-effect hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    Отправить заявку
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 card-gradient rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Свяжитесь с нами</h3>
              
              <div className="space-y-4">
                <a
                  href="https://t.me/kapotnatime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Telegram</div>
                    <div className="text-sm text-muted-foreground">@kapotnatime</div>
                  </div>
                </a>

                <a
                  href="mailto:vlad-pu@mail.ru"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Почта</div>
                    <div className="text-sm text-muted-foreground">vlad-pu@mail.ru</div>
                  </div>
                </a>

                <a
                  href="tel:+88007075789"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-card/80 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Телефон</div>
                    <div className="text-sm text-muted-foreground">+8 (800) 707-57-89</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 bg-primary/10 border border-primary/30 rounded-2xl">
              <p className="text-lg">
                <span className="text-primary font-semibold">Бесплатная консультация</span>
                <br />
                <span className="text-muted-foreground">
                  Поможем подобрать размер и ответим на все вопросы
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
