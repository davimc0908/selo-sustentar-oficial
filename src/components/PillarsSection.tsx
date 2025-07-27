import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Building, Shield, Heart } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Leaf,
      title: "Ambiental",
      description: "Gestão responsável de recursos naturais, preservação da biodiversidade e práticas sustentáveis de produção.",
      color: "bg-primary-lighter",
      iconColor: "text-primary"
    },
    {
      icon: Users,
      title: "Social",
      description: "Valorização dos colaboradores, desenvolvimento da comunidade local e promoção da inclusão social.",
      color: "bg-secondary-lighter",
      iconColor: "text-secondary"
    },
    {
      icon: Building,
      title: "Governança",
      description: "Transparência na gestão, ética empresarial e tomada de decisões responsáveis e sustentáveis.",
      color: "bg-primary-lighter",
      iconColor: "text-primary"
    },
    {
      icon: Shield,
      title: "Segurança do Trabalho",
      description: "Ambiente de trabalho seguro, prevenção de acidentes e proteção integral dos colaboradores.",
      color: "bg-secondary-lighter",
      iconColor: "text-secondary"
    },
    {
      icon: Heart,
      title: "Bem-estar Animal",
      description: "Cuidado responsável com os animais, garantindo condições adequadas de vida e manejo ético.",
      color: "bg-primary-lighter",
      iconColor: "text-primary"
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Áreas de Avaliação do Selo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa certificação avalia cinco pilares fundamentais para garantir 
            práticas sustentáveis e responsáveis em sua propriedade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0 text-center">
                  <div className={`w-20 h-20 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-10 h-10 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;