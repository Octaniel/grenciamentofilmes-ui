// export class Statistic {
//   totalCertificacaoGrafica: number;
//   totalCertificacaoSoftwareAtonono: number;
//   totalCertificacaoSoftwareOnline: number;
//   totalFacturasEmitidasOnline: number;
//   totalPedidoCertificacao: number;
//   totalSerie: number;
//   totalUsuario: number;
// }

export class Statistic {
  dtAtualizacao: Date
  dtCriacao: Date;
  idEstatisticasGeral: number;
  ttCertificacao: number;
  ttContribuinte: number;
  ttDocumentoComunicadoFicheiro: number;
  ttDocumentoGerado: number;
  ttDocumentoGeradoOnline: number;
  ttDocumentoRegistadosUnidade: number;
  ttFicheirosComunicados: number;
  ttFicheirosConcluidosFase: number;
  ttFicheirosPrimentoFase: number;
  ttFicheirosRejeitados: number;
  ttFicheirosSegundaFase: number;
  ttGeralDocumentoGerado: number;
  ttSerie: number;
  ttUtilizador: number;
  ttValoresFaturasEmitidas: number;
  ttValoresNotaCredito: number;
  ttValoresNotaDebito: number;
  ttValoresBaseTributavelFaturasEmitidas: number;
  ttValoresBaseTributavelNotaCredito: number;
  ttValoresBaseTributavelNotaDebito: number;
  ttValoresImpostoSCFaturasEmitidas: number;
  ttValoresImpostoSeloNotaCredito: number;
  ttValoresImpostoSeloNotaDebito: number;
  ttValoresImpotosSeloFaturasEmitidas: number;
  ttValoresIscNotaCretito: number;
  ttValoresIscNotaDebito: number;

  ttCanceled: number;
}
