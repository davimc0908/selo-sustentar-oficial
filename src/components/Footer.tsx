import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/26b39017-91d7-4a40-b03f-3dd91131a693.png" 
                alt="Selo Sustentar" 
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold">Selo Sustentar</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Certificação oficial de terceira parte para propriedades comprometidas 
              com práticas sustentáveis e responsabilidade ESG.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/selosustentar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/selosustentar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/selosustentar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/selosustentar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm">contato@selosustentar.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm">São Paulo - SP, Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                O que é o Selo
              </a>
              <a 
                href="#pillars" 
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Pilares de Avaliação
              </a>
              <a 
                href="#process" 
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Como Funciona
              </a>
              <a 
                href="#categories" 
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Categorias
              </a>
              <a 
                href="/materiais-institucionais.pdf" 
                target="_blank"
                className="flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Material Institucional</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Selo Sustentar. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="/termos-de-uso" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
              <a 
                href="/politica-de-privacidade" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="/cookies" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;