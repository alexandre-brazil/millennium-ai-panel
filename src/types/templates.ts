export type PromptData = {
  objetivo: string;
  contexto: string;
  limitacoes: string;
  estilo: string;
};

export type InstrucoesData = {
  instrucoes: string;
  exemplos: string;
  condicoesPagamento: string;
};

export type DicasData = {
  dicas: string;
  localizacao: string;
  catalogoLink: string;
  catalogoDescricao: string;
};

export type Produto = {
  nome: string;
  preco: string;
  armazenamento?: string; // Campo extra opcional
  [key: string]: any; // Para permitir campos adicionais dinamicamente
};

export type EmpresaData = {
  descricao: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  [key: string]: any; // Para permitir adicionar outras redes sociais no futuro
};

export type TemplateWizardData = {
  prompt: PromptData;
  instrucoes: InstrucoesData;
  dicas: DicasData;
  produtos: Produto[];
  empresa: EmpresaData;
};
