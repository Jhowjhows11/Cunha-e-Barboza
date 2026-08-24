export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  specs: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  recommendedFor: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fresagem' | 'cbuq' | 'compactacao' | 'subleito' | 'final';
  categoryLabel: string;
  image: string;
  description: string;
  location?: string;
  span?: string;
}

export interface SegmentItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  iconName: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  impact: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  desc: string;
  tag: string;
  icon: string;
}

export const COMPANY_INFO = {
  name: 'Cunha & Barboza Pavimentação',
  shortName: 'Cunha & Barboza',
  logoUrl: '/logo.png',
  logoRemoteUrl: 'https://i.ibb.co/MxnWjqHG/logo.png',
  tagline: 'Especialistas em Pavimentação Asfáltica e Infraestrutura',
  subtagline: 'Engenharia duradoura para superfícies que resistem ao tempo.',
  phoneDisplay: '(11) 99999-9999',
  phoneClean: '5511999999999',
  whatsappUrl: (msg?: string) => {
    const text = msg 
      ? encodeURIComponent(msg) 
      : encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços de pavimentação asfáltica com a Cunha & Barboza.');
    return `https://wa.me/5511999999999?text=${text}`;
  },
  email: 'contato@cunhabarbozapavimentacao.com.br',
  address: 'Atendimento em todo o Estado de São Paulo e Região',
  operationHours: 'Segunda a Sexta: 07h às 18h | Sábado: 07h às 12h'
};

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: 'prejuizos',
    title: 'Prejuízos?',
    desc: 'Buracos e trepidação geram reclamações constantes. Garanta uma via impecável.',
    icon: 'AlertTriangle',
    impact: 'Custos recorrentes com tapa-buracos ineficientes e danos a frotas'
  },
  {
    id: 'acidentes',
    title: 'Risco de Acidentes?',
    desc: 'Vias esburacadas ameaçam pedestres e veículos diariamente. Evite acidentes.',
    icon: 'ShieldAlert',
    impact: 'Responsabilidade civil e risco à segurança de colaboradores e clientes'
  },
  {
    id: 'desvalorizacao',
    title: 'Valorização Imobiliária Baixa?',
    desc: 'A primeira impressão conta. Asfalto degradado derruba o valor do patrimônio.',
    icon: 'TrendingDown',
    impact: 'Depreciação direta de condomínios residenciais e galpões industriais'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Fresagem Milimétrica',
    shortDesc: 'Removemos a camada exata de 2 a 3 cm com fresadora, criando aderência perfeita para o asfalto não descascar.',
    fullDesc: 'Processo mecânico de corte e desbaste controlado a frio, nivelando deformações plásticas, trincas por fadiga e ondulações. A rugosidade gerada maximiza a ancoragem química e mecânica da pintura de ligação.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    tag: 'Desbaste e Nivelamento',
    specs: ['Fresadoras de alta precisão', 'Profundidade milimétrica (2 a 3 cm)', 'Criação de microtextura anti-descolamento']
  },
  {
    number: '02',
    title: 'Preparação de Subleito',
    shortDesc: 'Abertura de caixa e preparo do leito e subleito, com guias e sarjetas para estabilidade e escoamento ideal.',
    fullDesc: 'Regularização, escarificação e compactação com controle de umidade ótima e massa específica aparente seca. Construção de base drenante, sub-base e instalação de guias para garantir escoamento pluvial sem empoçamento.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
    tag: 'Estruturação de Base',
    specs: ['Abertura de caixa e nivelamento a laser', 'Ensaios de capacidade de suporte (CBR)', 'Drenagem integrada com guias e sarjetas']
  },
  {
    number: '03',
    title: 'Aplicação de CBUQ',
    shortDesc: 'Aplicação de massa asfáltica a quente (CBUQ), padrão rodoviário com alta resistência para tráfego pesado.',
    fullDesc: 'Concreto Betuminoso Usinado a Quente dosado conforme normas DNIT/DER. Lançado com vibroacabadora mecânica em temperaturas estritas (135°C a 165°C), garantindo espessura homogênea e acabamento sem emendas frias.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Massa Asfáltica Rodoviária',
    specs: ['Faixas granulométricas rigorosas', 'Aplicação contínua com vibroacabadora', 'Temperatura controlada de usina à pista']
  },
  {
    number: '04',
    title: 'Compactação Térmica',
    shortDesc: 'Selagem com rolo compactador pesado da Linha Amarela. Garante densidade, bloqueia água e entrega o tapetão.',
    fullDesc: 'Compactação em tandem combinando rolos de pneus e rolos lisos vibratórios de grande tonelagem enquanto a massa ainda está na faixa térmica ideal de compressão. Fecha a porosidade superficial impedindo a infiltração de água.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Acabamento & Selagem',
    specs: ['Rolos compactadores pesados Linha Amarela', 'Densidade máxima teórica atingida', 'Entrega do acabamento uniforme (Tapetão)']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pavimentacao-asfaltica',
    title: 'Pavimentação Asfáltica',
    category: 'Infraestrutura Completa',
    shortDesc: 'Execução do zero desde a terraplenagem, base granular até a capa asfáltica em CBUQ de alta performance.',
    fullDesc: 'Solução completa para novas vias, loteamentos, polos industriais e pátios logísticos. Realizamos estudo de tráfego, dimensionamento do pavimento flexível, execução da sub-base, base de brita graduada tratada (BGS) e capa asfáltica.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
    features: ['Dimensionamento técnico por tipo de carga', 'Base e sub-base de alto suporte', 'Execução rápida com maquinário próprio'],
    recommendedFor: ['Novos loteamentos e condomínios', 'Vias municipais e de acesso', 'Polos industriais e centros de distribuição']
  },
  {
    id: 'recapeamento',
    title: 'Recapeamento Asfáltico',
    category: 'Restauração de Vias',
    shortDesc: 'Restauração de vias desgastadas com nova camada de rolamento de alta durabilidade e aderência.',
    fullDesc: 'Recapeamento técnico sobre pavimento existente degradado. Inclui correção pontual de trincas estruturais, pintura de ligação com emulsão catiônica de ruptura rápida e aplicação da nova camada de rolamento CBUQ.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
    features: ['Elimina 100% dos buracos e irregularidades', 'Rápida liberação para o tráfego', 'Excelente custo-benefício comparado a refazer a base'],
    recommendedFor: ['Condomínios residenciais horizontais', 'Pátios de manobra e estacionamentos', 'Avenidas com asfalto oxidado e fissurado']
  },
  {
    id: 'fresagem',
    title: 'Fresagem a Frio',
    category: 'Preparação Mecânica',
    shortDesc: 'Remoção cirúrgica de camadas asfálticas danificadas mantendo as cotas e o greide original da via.',
    fullDesc: 'Utilização de fresadoras com tambor de dentes de tungstênio para corte milimétrico do pavimento deformado. Ideal para manter as alturas de sarjetas, bocas de lobo e portões de condomínios.',
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1000&q=80',
    features: ['Mantém o nível original de guias e bueiros', 'Melhora a aderência da nova capa', 'Reciclagem sustentável do material fresado (RAP)'],
    recommendedFor: ['Vias urbanas com guias rebaixadas', 'Recuperação de trechos afundados por caminhões', 'Remoção de asfalto envelhecido']
  },
  {
    id: 'preparacao-subleito',
    title: 'Preparação de Subleito e Base',
    category: 'Engenharia de Solo',
    shortDesc: 'Abertura de caixa, compactação de solo, reforço estrutural e assentamento de guias e sarjetas.',
    fullDesc: 'A durabilidade de qualquer asfalto depende diretamente da qualidade da fundação do solo. Realizamos escarificação, umidificação, compactação mecânica com rolos pesados e assentamento de guias extrusadas ou pré-moldadas.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
    features: ['Abertura de caixa com motoniveladora', 'Compactação com controle de umidade e densidade', 'Prevenção de afundamentos futuros'],
    recommendedFor: ['Terrenos virgens e solo mole', 'Pátios para carretas e empilhadeiras', 'Estruturas viárias residenciais']
  },
  {
    id: 'aplicacao-cbuq',
    title: 'Aplicação de CBUQ a Quente',
    category: 'Massa Rodoviária',
    shortDesc: 'Massa asfáltica usinada a quente de padrão rodoviário de alta resistência para tráfego pesado.',
    fullDesc: 'Fornecimento e aplicação de Concreto Betuminoso Usinado a Quente (CBUQ) com ligante asfáltico CAP 50/70 ou polímero. Espalhamento automatizado com vibroacabadora para atingir nivelamento perfeito.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
    features: ['Composição química e física de alta durabilidade', 'Resistência a óleos e intempéries', 'Textura antiderrapante e selada'],
    recommendedFor: ['Indústrias pesadas e transportadoras', 'Estacionamentos de supermercados e shopping centers', 'Vias de tráfego intenso']
  },
  {
    id: 'compactacao-termica',
    title: 'Compactação Térmica Pesada',
    category: 'Acabamento Técnico',
    shortDesc: 'Selagem precisa com rolos de pneus e lisos vibratórios da Linha Amarela para impermeabilização.',
    fullDesc: 'Etapa que consolida as partículas pétreas e o ligante antes do resfriamento da mistura asfáltica. Garante o percentual ideal de vazios e impede a infiltração de água da chuva que causa a degradação precoce.',
    image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1000&q=80',
    features: ['Rolos tandem vibratórios de alta tonelagem', 'Rolos de pneus para amassamento superficial', 'Fechamento perfeito de poros e juntas'],
    recommendedFor: ['Todas as obras de pavimentação e recapeamento', 'Garantia de vida útil prolongada']
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: 'engenharia',
    title: 'Engenharia e Planejamento',
    desc: 'Execução baseada em preparação técnica e atenção à estrutura da via.',
    tag: 'Rigor Técnico',
    icon: 'Compass'
  },
  {
    id: 'equipamentos',
    title: 'Equipamentos Profissionais',
    desc: 'Uso de máquinas adequadas para cada etapa da execução.',
    tag: 'Linha Amarela',
    icon: 'Truck'
  },
  {
    id: 'resistencia',
    title: 'Alta Resistência',
    desc: 'Aplicação de materiais e processos voltados para suportar cargas e tráfego pesado.',
    tag: 'CBUQ Rodoviário',
    icon: 'Layers'
  },
  {
    id: 'execucao-completa',
    title: 'Execução Completa',
    desc: 'Do preparo do terreno à compactação final e entrega do tapetão.',
    tag: 'Chave na Mão',
    icon: 'CheckCircle2'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'obra-1',
    title: 'Compactação de CBUQ em Pátio Industrial',
    category: 'compactacao',
    categoryLabel: 'Compactação Térmica',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
    description: 'Rolo compactador pesado selando a camada de concreto asfáltico em temperatura ótima para suporte a carretas bi-trem.',
    span: 'col-span-1 md:col-span-2 md:row-span-2'
  },
  {
    id: 'obra-2',
    title: 'Aplicação Contínua com Vibroacabadora',
    category: 'cbuq',
    categoryLabel: 'Aplicação de CBUQ',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    description: 'Lançamento de massa quente com espessura uniforme de 5 cm compactada.',
    span: 'col-span-1 md:col-span-1'
  },
  {
    id: 'obra-3',
    title: 'Fresagem Asfáltica com Nivelamento Milimétrico',
    category: 'fresagem',
    categoryLabel: 'Fresagem a Frio',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    description: 'Remoção controlada de camada desgastada para restauração imediata do greide.',
    span: 'col-span-1 md:col-span-1'
  },
  {
    id: 'obra-4',
    title: 'Preparo de Subleito e Abertura de Caixa',
    category: 'subleito',
    categoryLabel: 'Preparação de Base',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    description: 'Nivelamento e compactação do solo para recepção da base de brita graduada.',
    span: 'col-span-1 md:col-span-1'
  },
  {
    id: 'obra-5',
    title: 'Acabamento Tapetão Impecável',
    category: 'final',
    categoryLabel: 'Resultado Final',
    image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=800&q=80',
    description: 'Via pavimentada concluída, com superfície homogênea, sem emendas e pronta para o tráfego.',
    span: 'col-span-1 md:col-span-1'
  },
  {
    id: 'obra-6',
    title: 'Pavimentação de Estacionamento Comercial',
    category: 'final',
    categoryLabel: 'Resultado Final',
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
    description: 'Execução completa de pavimentação com alta durabilidade e drenagem eficiente.',
    span: 'col-span-1 md:col-span-2'
  }
];

export const SEGMENTS_DATA: SegmentItem[] = [
  {
    id: 'empresas',
    title: 'Empresas & Indústrias',
    desc: 'Pátios de estocagem, galpões e áreas de carga e descarga preparadas para tráfego de empilhadeiras e carretas pesadas.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    iconName: 'Factory'
  },
  {
    id: 'condominios',
    title: 'Condomínios Residenciais',
    desc: 'Vias internas confortáveis, silenciosas e sem trepidação, aumentando a valorização patrimonial de cada imóvel.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    iconName: 'Home'
  },
  {
    id: 'estacionamentos',
    title: 'Estacionamentos Comerciais',
    desc: 'Superfícies lisas, duráveis e com acabamento de alto padrão para shopping centers, supermercados e redes varejistas.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
    iconName: 'Car'
  },
  {
    id: 'areas-industriais',
    title: 'Áreas Industriais & Logísticas',
    desc: 'Pavimentos dimensionados com reforço de base para resistir a esforços de torção e alta densidade de trânsito.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    iconName: 'Truck'
  },
  {
    id: 'vias-internas',
    title: 'Vias Internas & Loteamentos',
    desc: 'Implantação completa de infraestrutura viária com caimento pluvial planejado para empreendimentos em expansão.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    iconName: 'MapPin'
  },
  {
    id: 'infraestrutura',
    title: 'Obras de Infraestrutura',
    desc: 'Trechos de desaceleração, vias municipais, acessos rurais e recuperação emergencial de malhas viárias.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80',
    iconName: 'HardHat'
  }
];

export const TRUST_BADGES = [
  'Execução Técnica Rigorosa',
  'Equipamentos Pesados Próprios',
  'Alta Resistência a Cargas',
  'CBUQ Padrão Rodoviário'
];
