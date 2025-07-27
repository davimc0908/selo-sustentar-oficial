import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Construindo um Futuro
          <span className="block text-secondary"> Sustentável</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Junte-se ao movimento que transforma propriedades em exemplos de 
          responsabilidade ambiental, social e de governança.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          onClick={scrollToContact}
          className="text-lg shadow-2xl"
        >
          Solicitar Certificação
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;