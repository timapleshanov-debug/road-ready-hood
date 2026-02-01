import { motion } from "framer-motion";
import { 
  Droplets, 
  Ruler, 
  SprayCan, 
  Layers, 
  Hand, 
  Wrench, 
  Clock, 
  Trash2,
  Play
} from "lucide-react";

const steps = [
  { icon: Droplets, title: "Подготовка", desc: "Вымойте и протрите капот" },
  { icon: Ruler, title: "Примерка", desc: "Выровняйте плёнку без снятия подложки" },
  { icon: SprayCan, title: "Увлажнение", desc: "Нанесите специальный состав" },
  { icon: Layers, title: "Подложка", desc: "Отогните 10–15 см, не всю сразу" },
  { icon: Hand, title: "Наклейка", desc: "Зафиксируйте центр, затем края" },
  { icon: Wrench, title: "Разглаживание", desc: "Ракелем от центра к краям" },
  { icon: Clock, title: "Фиксация", desc: "Дайте 10–15 минут закрепиться" },
  { icon: Trash2, title: "Снятие", desc: "Потяните под углом после поездки" },
];

const InstructionSection = () => {
  return (
    <section id="instruction" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Инструкция</span> по наклейке
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Видео и пошаговое руководство
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/50">
              <video
                controls
                className="w-full aspect-video bg-background"
                preload="metadata"
              >
                <source src="/videos/instruction.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl -z-10" />
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm">Нажмите для воспроизведения</span>
            </div>
          </motion.div>

          {/* Text Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 text-lg font-medium text-gradient"
        >
          Лучше наклеить плёнку, чем перекрашивать капот.
        </motion.p>
      </div>
    </section>
  );
};

export default InstructionSection;
