import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Search, ClipboardCheck, GraduationCap, Award } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Planejamento e Reunião Inicial",
      description: "Análise das necessidades específicas da propriedade e definição do cronograma personalizado."
    },
    {
      number: "02",
      icon: Search,
      title: "Auditoria da Propriedade",
      description: "Avaliação completa dos cinco pilares por especialistas qualificados e certificados."
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Avaliação e Plano de Ação",
      description: "Elaboração de relatório detalhado com recomendações específicas para melhoria."
    },
    {
      number: "04",
      icon: GraduationCap,
      title: "Treinamento e Comunicação ESG",
      description: "Capacitação da equipe e implementação de práticas sustentáveis na rotina da propriedade."
    },
    {
      number: "05",
      icon: Award,
      title: "Emissão da Certificação",
      description: "Certificado oficial nas categorias Bronze, Prata ou Ouro, baseado no percentual de implementação."
    }
  ];

  return (
    <section id="process" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Como Funciona a Certificação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo estruturado e transparente que garante a qualidade 
            e confiabilidade da sua certificação.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="lg:w-5/12">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline node */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-secondary-lighter rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Processo certificado e reconhecido
            </h3>
            <p className="text-lg text-primary/80">
              Toda nossa metodologia segue padrões internacionais de qualidade 
              e é validada por especialistas em sustentabilidade e ESG.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;