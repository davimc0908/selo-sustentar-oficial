-- Criar tabela de clientes certificados
CREATE TABLE public.clientes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  descricao TEXT,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.clientes ENABLE ROW LEVEL SECURITY;

-- Criar política para leitura pública (qualquer pessoa pode ver os clientes)
CREATE POLICY "Clientes são visíveis para todos" 
ON public.clientes 
FOR SELECT 
USING (true);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_clientes_updated_at
BEFORE UPDATE ON public.clientes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir dados de exemplo dos clientes existentes
INSERT INTO public.clientes (nome, logo_url) VALUES 
('ABCCMM', '/lovable-uploads/7b212963-a6b7-4bf1-9f99-5d85b61a9a87.png'),
('Haras JB', '/lovable-uploads/b4157226-7ef5-45f6-8376-fed11808d226.png'),
('Pedreira Barrinha', '/lovable-uploads/1dadde37-628f-4503-8b27-3f33b569e5c2.png'),
('Pantanal Agro & Country', '/lovable-uploads/8c92a84e-3d6f-40ae-bba7-3161cd5e023e.png'),
('Sudeste Embalagens', '/lovable-uploads/e4c020ae-9f94-4efe-a9ee-8844448748c2.png');