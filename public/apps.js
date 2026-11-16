// Para incluir um novo aplicativo no hub, acrescente um item nesta lista.
window.HUB_APPS = [
  {
    id: 'bp',
    code: 'BP',
    title: 'Balanço Patrimonial',
    description: 'Diagramação do BP a partir do SIAFI, tabelas e notas explicativas com o Tesouro Gerencial, conferência aritmética e exportação em Word.',
    inputs: ['BGU-BP (SIAFI)', 'Saldos analíticos (Tesouro Gerencial)'],
    url: 'https://balanco-patrimonial-comaer.vercel.app'
  },
  {
    id: 'bo',
    code: 'BO',
    title: 'Balanço Orçamentário',
    description: 'Diagramação de receitas, despesas e restos a pagar, Tabelas 21 a 28 e conferência de integridade entre o BO e as tabelas.',
    inputs: ['BGU-BO (SIAFI)', 'Arquivo base das tabelas'],
    url: 'https://balanco-orcamentario-comaer.vercel.app'
  },
  {
    id: 'dvp',
    code: 'DVP',
    title: 'Demonstração das Variações Patrimoniais',
    description: 'Revisão analítica da DVP com variações, impactos, notas explicativas, transferências e resultado financeiro.',
    inputs: ['BGU-DVP (SIAFI)'],
    url: 'https://dvp-comaer.vercel.app'
  }
];
