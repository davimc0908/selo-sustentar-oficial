import { Marquee } from "@/components/ui/marquee";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface Cliente {
  id: string;
  nome: string;
  logo_url: string;
  descricao?: string;
  link?: string;
}

const ClientsSection = () => {
  const [clients, setClients] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data, error } = await supabase
          .from('clientes')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (error) {
          console.error('Erro ao buscar clientes:', error);
          return;
        }
        
        setClients(data || []);
      } catch (error) {
        console.error('Erro ao conectar com Supabase:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const ClientCard = ({ client }: { client: Cliente }) => {
    const card = (
      <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border bg-background">
        <img 
          src={client.logo_url} 
          alt={client.nome} 
          className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
        />
      </div>
    );

    if (client.link) {
      return (
        <a 
          href={client.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {card}
        </a>
      );
    }

    return card;
  };

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Clientes Certificados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empresas e propriedades que já conquistaram o Selo Sustentar e são exemplos de responsabilidade ambiental, social e de governança.
            </p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Carregando clientes...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Clientes Certificados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas e propriedades que já conquistaram o Selo Sustentar e são exemplos de responsabilidade ambiental, social e de governança.
          </p>
        </div>

        {clients.length > 0 ? (
          <Marquee pauseOnHover speed={40}>
            {clients.map((client) => (
              <div key={client.id} className="relative h-full w-fit mx-[4rem] flex items-center justify-center">
                <ClientCard client={client} />
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="text-center">
            <p className="text-muted-foreground">Nenhum cliente cadastrado ainda.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-primary-lighter rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Quer ser nosso próximo cliente certificado?
            </h3>
            <p className="text-lg text-primary/80 mb-6">
              Junte-se às empresas que já transformaram suas práticas e obtiveram o reconhecimento do mercado.
            </p>
            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-light transition-colors">
              Solicitar certificação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientsSection;