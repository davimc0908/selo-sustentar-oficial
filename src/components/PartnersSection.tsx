import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "ABCCMM",
      description: "Associação Brasileira dos Criadores do Cavalo Mangalarga Marchador",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      website: "#"
    },
    {
      name: "Instituto Sustentabilidade",
      description: "Especialistas em certificações ambientais",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&crop=center",
      website: "#"
    },
    {
      name: "ESG Consultoria",
      description: "Consultores especialistas em governança",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop&crop=center",
      website: "#"
    },
    {
      name: "Verde Auditoria",
      description: "Auditoria especializada em práticas sustentáveis",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop&crop=center",
      website: "#"
    },
    {
      name: "Agro Sustentável",
      description: "Tecnologia para o agronegócio responsável",
      logo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=100&fit=crop&crop=center",
      website: "#"
    },
    {
      name: "Bem-Estar Animal",
      description: "Especialistas em cuidado animal",
      logo: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=200&h=100&fit=crop&crop=center",
      website: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com organizações de referência para garantir a qualidade 
            e credibilidade de nossas certificações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open(partner.website, '_blank')}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-24 object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-lighter rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Quer ser nosso parceiro?
            </h3>
            <p className="text-lg text-primary/80 mb-6">
              Junte-se à nossa rede de especialistas e contribua para um futuro mais sustentável.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;