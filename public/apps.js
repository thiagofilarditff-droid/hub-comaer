// Para incluir um novo aplicativo no portal, acrescente um item nesta lista.
// sheet: bp | bo | dvp | rg  (desenho da miniatura de folha)  ·  entrada: frase "Recebe ..."
window.HUB_APPS = [
  {
    id: 'bp',
    code: 'BP',
    sheet: 'bp',
    title: 'Balanço Patrimonial',
    description: 'Diagramação do BP a partir do SIAFI, tabelas e notas explicativas com o Tesouro Gerencial, conferência aritmética e exportação em Word.',
    entrada: 'Recebe o BGU-BP do SIAFI e os saldos analíticos do Tesouro Gerencial.',
    url: 'https://balanco-patrimonial-comaer.vercel.app'
  },
  {
    id: 'bo',
    code: 'BO',
    sheet: 'bo',
    title: 'Balanço Orçamentário',
    description: 'Diagramação de receitas, despesas e restos a pagar, Tabelas 21 a 28 e conferência de integridade entre o BO e as tabelas.',
    entrada: 'Recebe o BGU-BO do SIAFI e o arquivo base das tabelas.',
    url: 'https://balanco-orcamentario-comaer.vercel.app'
  },
  {
    id: 'dvp',
    code: 'DVP',
    sheet: 'dvp',
    title: 'Demonstração das Variações Patrimoniais',
    description: 'Revisão analítica da DVP com variações, impactos, notas explicativas, transferências e resultado financeiro.',
    entrada: 'Recebe o BGU-DVP do SIAFI.',
    url: 'https://dvp-comaer.vercel.app'
  },
  {
    id: 'rg',
    code: 'RG',
    sheet: 'rg',
    title: 'Relatório de Gestão',
    description: 'Preparação do relatório de gestão do COMAER e da FAER a partir dos demonstrativos, com conferência de integridade, prévia editável e exportação em Word.',
    entrada: 'Recebe BP, DVP, BF, DFC e BO do SIAFI, dos órgãos 52111 e 52911.',
    url: 'https://relatorio-gestao-comaer.vercel.app'
  }
];
