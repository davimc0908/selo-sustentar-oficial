import { Marquee } from "@/components/ui/marquee";

const ClientsSection = () => {
  const clients = [
    {
      name: "ABCCMM",
      logo: "/lovable-uploads/7b212963-a6b7-4bf1-9f99-5d85b61a9a87.png"
    },
    {
      name: "Haras JB",
      logo: "/lovable-uploads/b4157226-7ef5-45f6-8376-fed11808d226.png"
    },
    {
      name: "Pedreira Barrinha",
      logo: "/lovable-uploads/1dadde37-628f-4503-8b27-3f33b569e5c2.png"
    },
    {
      name: "Pantanal Agro & Country",
      logo: "/lovable-uploads/8c92a84e-3d6f-40ae-bba7-3161cd5e023e.png"
    },
    {
      name: "Sudeste Embalagens",
      logo: "/lovable-uploads/e4c020ae-9f94-4efe-a9ee-8844448748c2.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Clientes Certificados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas e propriedades que já conquistaram o Selo Sustentar e 
            são exemplos de responsabilidade ambiental, social e de governança.
          </p>
        </div>

        <Marquee pauseOnHover speed={40}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-[4rem] flex items-center justify-center"
            >
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <div className="mt-16 text-center">
          <div className="bg-primary-lighter rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Quer ser nosso próximo cliente certificado?
            </h3>
            <p className="text-lg text-primary/80 mb-6">
              Junte-se às empresas que já transformaram suas práticas e obtiveram o reconhecimento do mercado.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Solicitar certificação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;