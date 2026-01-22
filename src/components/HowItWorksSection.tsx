import { motion } from "framer-motion";
import { Droplets, Package, Car, Trash2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Droplets,
    title: "Очистите капот",
    description: "Вымойте и высушите поверхность",
  },
  {
    number: "02",
    icon: Package,
    title: "Наклейте плёнку",
    description: "Разверните и приложите к капоту",
  },
  {
    number: "03",
    icon: Car,
    title: "Путешествуйте",
    description: "Наслаждайтесь поездкой без страха",
  },
  {
    number: "04",
    icon: Trash2,
    title: "Снимите плёнку",
    description: "Удалите после поездки за секунды",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Как это <span className="text-gradient">работает</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            4 простых шага до защищённого путешествия
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-card rounded-full border-2 border-primary/30" />
                  <div className="relative flex flex-col items-center">
                    <step.icon className="w-8 h-8 text-primary mb-1" />
                    <span className="text-xs font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
