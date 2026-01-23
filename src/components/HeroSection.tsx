import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-car-new.jpg";
import viturLogo from "@/assets/vitur-logo.jpg";

const HeroSection = () => {
  const scrollToSection = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Автомобиль на горной дороге"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-full"
          >
            Временная защита капота
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
          >
            Защити капот
            <br />
            <span className="text-gradient">на время поездки</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            Временная полиуретановая бронеплёнка от сколов и царапин
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Logo Image */}
            <img
              src={viturLogo}
              alt="Витур"
              className="w-32 h-auto rounded-lg shadow-lg"
            />
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold accent-gradient text-primary-foreground rounded-full glow-effect hover:scale-105 transition-transform duration-300"
            >
              Заказать
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToSection}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm drop-shadow-md">Узнать больше</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
