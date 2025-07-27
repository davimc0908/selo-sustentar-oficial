import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    propriedade: '',
    localizacao: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nome || !formData.email || !formData.whatsapp || !formData.propriedade) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Solicitação enviada!",
      description: "Em breve entraremos em contato para iniciar o processo de certificação.",
    });

    // Reset form
    setFormData({
      nome: '',
      email: '',
      whatsapp: '',
      propriedade: '',
      localizacao: '',
      mensagem: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Solicite seu Selo Sustentar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dê o primeiro passo para transformar sua propriedade em referência 
            de sustentabilidade e responsabilidade ESG.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                Formulário de Solicitação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="propriedade">Nome da Propriedade *</Label>
                    <Input
                      id="propriedade"
                      name="propriedade"
                      value={formData.propriedade}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="localizacao">Localização (Cidade/UF)</Label>
                  <Input
                    id="localizacao"
                    name="localizacao"
                    value={formData.localizacao}
                    onChange={handleInputChange}
                    placeholder="Ex: São Paulo/SP"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem adicional</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre sua propriedade e interesse na certificação..."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Quero solicitar minha certificação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-lighter rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">E-mail</h3>
                  <p className="text-muted-foreground">contato@selosustentar.com.br</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary-lighter rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Telefone</h3>
                  <p className="text-muted-foreground">(11) 9999-9999</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-lighter rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Escritório</h3>
                  <p className="text-muted-foreground">São Paulo - SP, Brasil</p>
                </div>
              </div>
            </Card>

            <div className="bg-secondary-lighter rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Por que escolher o Selo Sustentar?
              </h3>
              <ul className="space-y-2 text-primary/80">
                <li>✓ Certificação reconhecida pela ABCCMM</li>
                <li>✓ Metodologia baseada em padrões internacionais</li>
                <li>✓ Acompanhamento especializado</li>
                <li>✓ Melhoria contínua garantida</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;