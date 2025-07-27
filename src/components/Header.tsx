import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/26b39017-91d7-4a40-b03f-3dd91131a693.png" 
              alt="Selo Sustentar" 
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-primary">Selo Sustentar</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              O que é
            </button>
            <button 
              onClick={() => scrollToSection('pillars')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pilares
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Processo
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex"
          >
            Solicitar Certificação
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                O que é
              </button>
              <button 
                onClick={() => scrollToSection('pillars')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Pilares
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Processo
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="self-start"
              >
                Solicitar Certificação
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;