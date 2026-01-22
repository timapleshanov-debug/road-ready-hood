import { motion } from "framer-motion";
import { Check, Sparkles, Layers, Shield, Banknote, Hand } from "lucide-react";

const benefits = [
  {
    icon: Hand,
    title: "Легко клеится",
    description: "Без специнструментов и профессиональных навыков",
  },
  {
    icon: Sparkles,
    title: "Снимается без следов",
    description: "Никакого клея, никаких остатков на ЛКП",
  },
  {
    icon: Layers,
    title: "Не портит лак",
    description: "Безопасно для любого покрытия",
  },
  {
    icon: Shield,
    title: "Защита от всего",
    description: "Камни, песок, ветки, насекомые",
  },
  {
    icon: Banknote,
    title: "Экономия денег",
    description: "Не нужно платить за постоянную оклейку",
  },
];

const BenefitsSection = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Почему <span className="text-gradient">Капот на время</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Идеальное решение для тех, кто ценит свой автомобиль и любит путешествовать
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 card-gradient rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-2xl mb-6 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
              <div className="mt-4 flex items-center gap-2 text-primary">
                <Check className="w-5 h-5" />
                <span className="text-sm font-medium">Проверено</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
