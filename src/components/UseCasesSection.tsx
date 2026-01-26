import { motion } from "framer-motion";
import { Package, Star, Crown } from "lucide-react";

const packages = [
  {
    icon: Package,
    title: "Базовый",
    price: "3 990 ₽",
    items: [
      "Плёнка ТПУ Витур 680/1500 мм",
      "Ракель",
      "Салфетка",
      "Волшебный состав для простой приклейки",
      "Инструкция",
    ],
  },
  {
    icon: Star,
    title: "Продвинутый",
    price: "5 990 ₽",
    items: [
      "Плёнка ТПУ Витур 680/1500 мм",
      "Плёнка ТПУ Витур 250/1500 мм",
      "Ракель",
      "Салфетка",
      "Волшебный состав для простой приклейки",
      "Инструкция",
    ],
  },
  {
    icon: Crown,
    title: "Максимальный",
    price: "8 990 ₽",
    items: [
      "Плёнка ТПУ Витур 750/1800 мм",
      "Плёнка ТПУ 300/1800 мм",
      "2 плёнки 250/300 мм для зеркал",
      "Ракель",
      "Салфетка",
      "Волшебный состав для простой приклейки",
      "Инструкция",
    ],
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Выберите <span className="text-gradient">комплект</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Подберите оптимальный вариант для вашего автомобиля
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(249, 115, 22, 0)",
                  "0 0 20px 4px rgba(249, 115, 22, 0.3)",
                  "0 0 0 0 rgba(249, 115, 22, 0)"
                ]
              }}
              className="group relative p-8 card-gradient rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              style={{
                animation: `pulse-glow 3s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <pkg.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center text-foreground">{pkg.title}</h3>
              <div className="text-3xl font-bold text-center text-primary mb-6">{pkg.price}</div>
              <ul className="space-y-3">
                {pkg.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
