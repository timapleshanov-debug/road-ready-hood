import { motion } from "framer-motion";
import { Shield, Clock, Sparkles } from "lucide-react";
import applyingFilm from "@/assets/applying-film.jpg";

const SolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-full">
              Решение
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Капот на время</span> — защита именно тогда, когда она нужна
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Временная полиуретановая бронеплёнка, которая защищает капот во время путешествия. Легко клеится, снимается без следов.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Защита от сколов</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Временное решение</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Без следов</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={applyingFilm}
                alt="Нанесение защитной плёнки"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
