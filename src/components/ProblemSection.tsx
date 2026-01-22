import { motion } from "framer-motion";
import { AlertTriangle, Coins, Wrench } from "lucide-react";
import hoodDamage from "@/assets/hood-damage.jpg";

const problems = [
  {
    icon: AlertTriangle,
    title: "Сколы от камней",
    description: "Каждый камень на трассе — удар по лаку вашего авто",
  },
  {
    icon: Wrench,
    title: "Царапины в горах",
    description: "Ветки и гравий оставляют следы на капоте",
  },
  {
    icon: Coins,
    title: "Дорогая покраска",
    description: "Восстановление ЛКП после путешествия — от 50 000 ₽",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Каждая поездка — <span className="text-primary">риск для капота</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Путешествия по России — это красота и приключения. Но также камни, песок и царапины.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={hoodDamage}
              alt="Повреждённый капот"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-destructive text-destructive-foreground font-semibold rounded-xl">
              Результат одной поездки
            </div>
          </motion.div>

          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-5 p-6 card-gradient rounded-2xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-primary/20 rounded-xl">
                  <problem.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
