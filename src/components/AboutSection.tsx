import { Card, CardContent } from "@/components/ui/card";
import { Shield, Leaf, Users, Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            O que é o Selo Sustentar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/26b39017-91d7-4a40-b03f-3dd91131a693.png" 
                alt="Selo Sustentar Certificação" 
                className="w-32 h-32 mx-auto md:mx-0 mb-6"
              />
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong className="text-primary">Selo Sustentar</strong> é uma certificação oficial de terceira parte, 
              apoiada pela ABCCMM. Ele garante que a propriedade aplica diretrizes sustentáveis 
              com base nos princípios ESG (ambiental, social e de governança).
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              É um movimento por um planeta mais justo e saudável, reconhecendo e valorizando 
              propriedades que adotam práticas responsáveis e inovadoras.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Ambiental</h3>
                <p className="text-sm text-muted-foreground">
                  Práticas sustentáveis e preservação ambiental
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Social</h3>
                <p className="text-sm text-muted-foreground">
                  Responsabilidade social e bem-estar comunitário
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Governança</h3>
                <p className="text-sm text-muted-foreground">
                  Gestão transparente e ética empresarial
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Certificação</h3>
                <p className="text-sm text-muted-foreground">
                  Reconhecimento oficial e validação externa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;