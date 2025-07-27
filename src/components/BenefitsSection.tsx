import { Card, CardContent } from "@/components/ui/card";
import { Trophy, TrendingUp, Shield, Leaf, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Reconhecimento de Mercado",
      description: "Valorização e diferenciação da sua propriedade no mercado competitivo.",
    },
    {
      icon: TrendingUp,
      title: "Fortalecimento Institucional",
      description: "Melhoria da imagem e reputação da empresa junto aos stakeholders.",
    },
    {
      icon: Shield,
      title: "Redução de Riscos",
      description: "Minimização de riscos ambientais, legais e operacionais.",
    },
    {
      icon: Leaf,
      title: "Gestão de Recursos",
      description: "Otimização e uso consciente dos recursos naturais disponíveis.",
    },
    {
      icon: Zap,
      title: "Produtividade Sustentável",
      description: "Aumento da eficiência produtiva com práticas responsáveis.",
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Benefícios da Certificação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A certificação Selo Sustentar oferece vantagens concretas para 
            sua propriedade e negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-secondary"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-secondary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-lighter rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Transforme sua propriedade em referência de sustentabilidade
            </h3>
            <p className="text-lg text-primary/80">
              Junte-se às propriedades que já adotaram práticas ESG e 
              colhem os benefícios de uma gestão responsável e inovadora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;