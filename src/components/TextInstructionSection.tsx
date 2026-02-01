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
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Droplets,
    title: "Подготовка капота",
    description: "Вымойте капот или протрите его от пыли. Используйте спиртовую салфетку из комплекта. Поверхность должна быть: чистой, без песка и жира.",
    tip: "Если появились сомнения — протрите ещё раз.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Примерка",
    description: "НЕ СНИМАЯ ПОДЛОЖКУ: расправьте плёнку на капоте автомобиля, выровняйте по центру и убедитесь, что свисающие края симметричны.",
    tip: "Этот шаг экономит 90% нервов. Не пропускайте его.",
  },
  {
    number: "03",
    icon: SprayCan,
    title: "Нанесение средства",
    description: "Опрыскайте специальным составом по всей поверхности капота в том месте, где будет клеиться плёнка. Не переборщите с увлажнением.",
    tip: null,
  },
  {
    number: "04",
    icon: Layers,
    title: "Снятие подложки",
    description: "Отогните 10–15 см защитной подложки. НЕ СНИМАЙТЕ сразу всю подложку, держите плёнку на весу. По возможности попросите кого-нибудь вам помочь.",
    tip: "Работайте постепенно, без спешки.",
  },
  {
    number: "05",
    icon: Hand,
    title: "Наклейка",
    description: "Положите плёнку на капот согласно вашей примерке, зафиксируйте центр рукой. Не бойтесь отгибать и переклеивать плёнку.",
    tip: "Делайте не спеша.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Разглаживание",
    description: "Пройдитесь ракелем по всей поверхности капота. Разглаживайте от центра к краям, чтобы выгнать воздух и воду.",
    tip: "Мелкие пузырьки уйдут сами во время поездки. Крупные — выгоните к краям.",
  },
  {
    number: "07",
    icon: Clock,
    title: "После приклеивания",
    description: "Подогните под капот остатки плёнки. При необходимости аккуратно срежьте лишнее. Дайте плёнке 10–15 минут зафиксироваться.",
    tip: "После этого можно ехать.",
  },
  {
    number: "08",
    icon: Trash2,
    title: "Снятие после поездки",
    description: "Подденьте край плёнки и медленно потяните под углом — плёнка снимается легко. Следов клея не остаётся.",
    tip: "Плёнку можно утилизировать.",
  },
];

const warnings = [
  "Работа производится в тёплом крытом помещении",
  "Капот автомобиля должен быть чистым и не горячим",
  "Плёнка рассчитана на поклейку на слегка влажную поверхность",
];

const troubleshooting = [
  { problem: "Появилась складка", solution: "аккуратно приподнимите участок и разгладьте" },
  { problem: "Не ровно легла", solution: "пока не прижали, можно поправить" },
  { problem: "Паника", solution: "остановитесь, выдохните, продолжайте" },
];

const TextInstructionSection = () => {
  return (
    <section id="instruction" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Текстовая <span className="text-gradient">инструкция</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Пошаговое руководство по наклейке защитной плёнки
          </p>
        </motion.div>

        {/* Warnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Перед началом убедитесь</h3>
            </div>
            <ul className="space-y-2">
              {warnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/90">
                  <span className="text-primary mt-1">❗</span>
                  {warning}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      ШАГ {step.number}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  {step.tip && (
                    <div className="flex items-start gap-2 text-sm text-primary/90">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{step.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Troubleshooting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <div className="bg-secondary/50 border border-border/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Если что-то пошло не так</h3>
            <ul className="space-y-3">
              {troubleshooting.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground/90">
                  <span className="text-primary font-medium">{item.problem}</span>
                  <span className="text-muted-foreground">→</span>
                  <span>{item.solution}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground italic">
              ❗ Не дёргайте резко. Чуть растягивайте плёнку.
            </p>
          </div>
        </motion.div>

        {/* Final note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-xl font-medium text-gradient"
        >
          Лучше наклеить плёнку, чем перекрашивать капот.
        </motion.p>
      </div>
    </section>
  );
};

export default TextInstructionSection;
