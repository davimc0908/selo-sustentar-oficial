import { Card, CardContent } from "@/components/ui/card";

const CategoriesSection = () => {
  const categories = [
    {
      level: "Bronze",
      image: "/lovable-uploads/1ad3de27-dfe1-49ae-84c5-34cc0c232a24.png",
      percentage: "Até 50%",
      description: "Compromisso de melhoria contínua",
      details: "Reconhecimento inicial do comprometimento com práticas sustentáveis e ESG.",
      gradient: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800"
    },
    {
      level: "Prata",
      image: "/lovable-uploads/23719eb4-c2fa-4039-bde5-ae3777fd116c.png",
      percentage: "50% a 70%",
      description: "Implementação significativa",
      details: "Nível intermediário com práticas sustentáveis bem estabelecidas na propriedade.",
      gradient: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      textColor: "text-gray-800"
    },
    {
      level: "Ouro",
      image: "/lovable-uploads/e5c34755-c37a-41e3-9b8b-c20cdf32d1fc.png",
      percentage: "Acima de 71%",
      description: "Excelência em sustentabilidade",
      details: "Máximo nível de certificação, representando liderança em práticas ESG.",
      gradient: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Categorias do Selo Sustentar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Três níveis de certificação que reconhecem o grau de implementação 
            de práticas sustentáveis em sua propriedade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${category.bgColor} border-2 border-opacity-20`}
            >
              <CardContent className="p-8 text-center">
                {/* Selo Image */}
                <div className="mb-6">
                  <img 
                    src={category.image} 
                    alt={`Selo ${category.level}`}
                    className="w-24 h-24 mx-auto object-contain"
                  />
                </div>

                {/* Category Level */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white font-bold text-lg mb-4`}>
                  {category.level}
                </div>

                {/* Percentage */}
                <h3 className={`text-2xl font-bold ${category.textColor} mb-2`}>
                  {category.percentage}
                </h3>
                
                {/* Description */}
                <p className={`text-lg font-semibold ${category.textColor} mb-3`}>
                  {category.description}
                </p>
                
                {/* Details */}
                <p className="text-muted-foreground leading-relaxed">
                  {category.details}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-full`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-lighter rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Evolução Contínua
            </h3>
            <p className="text-lg text-primary/80">
              Independente do nível inicial, nossa metodologia permite crescimento 
              gradual e melhoria contínua das práticas sustentáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;