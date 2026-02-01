import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoInstructionSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Видео <span className="text-gradient">инструкция</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Посмотрите, как легко и быстро нанести защитную плёнку на капот вашего автомобиля
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/50">
            <video
              controls
              className="w-full aspect-video bg-background"
              poster=""
              preload="metadata"
            >
              <source src="/videos/instruction.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
            
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl -z-10" />
          </div>

          {/* Play hint for visual appeal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-muted-foreground"
          >
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm">Нажмите для воспроизведения</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoInstructionSection;
