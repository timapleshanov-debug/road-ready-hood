import { motion } from "framer-motion";
import { Mountain, Navigation, MapPin, Route } from "lucide-react";
import mountainRoad from "@/assets/mountain-road.jpg";

const useCases = [
  {
    icon: Mountain,
    title: "Горы",
    description: "Серпантины и гравийные участки",
  },
  {
    icon: Navigation,
    title: "Трасса",
    description: "Высокие скорости, много камней",
  },
  {
    icon: MapPin,
    title: "Дальние поездки",
    description: "Сотни километров под защитой",
  },
  {
    icon: Route,
    title: "Бездорожье",
    description: "Грунтовки и гравийные дороги",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mountainRoad}
          alt="Горная дорога"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Для каких <span className="text-gradient">поездок</span> подходит
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Везде, где дорога может повредить ваш капот
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
