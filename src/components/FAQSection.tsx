import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Остаётся ли клей после снятия плёнки?",
    answer: "Нет, плёнка снимается чисто, без следов клея на лакокрасочном покрытии.",
  },
  {
    question: "Повреждает ли плёнка ЛКП?",
    answer: "Нет. Плёнка полностью безопасна для любого лакокрасочного покрытия. Её можно использовать как на новых, так и на подержанных автомобилях.",
  },
  {
    question: "Подходит ли для всех автомобилей?",
    answer: "Да, мы предлагаем несколько размеров плёнки, которые подходят для большинства легковых автомобилей и кроссоверов. При заказе укажите марку и модель авто.",
  },
  {
    question: "Сколько времени занимает наклейка?",
    answer: "Весь процесс занимает 10-15 минут. Не требуется никаких специальных инструментов или навыков.",
  },
  {
    question: "Можно ли использовать плёнку повторно?",
    answer: "Плёнка предназначена для однократного использования. После снятия рекомендуется утилизировать её и использовать новую для следующей поездки.",
  },
  {
    question: "Как долго плёнка может находиться на капоте?",
    answer: "Плёнка рассчитана на одну поездку.",
  },
];

const FAQSection = () => {
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
            Частые <span className="text-gradient">вопросы</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на популярные вопросы о нашей плёнке
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-xl border border-border px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-5 hover:no-underline hover:text-primary transition-colors text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
