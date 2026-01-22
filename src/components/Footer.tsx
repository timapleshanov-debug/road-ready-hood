import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Капот на время</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">
              Проблема
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 Капот на время. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
