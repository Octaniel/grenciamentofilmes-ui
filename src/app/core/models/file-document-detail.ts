import { FileDocument } from './file-document';

export class FileDocumentDetail {
  id: number;
  nomeFicheiro: string;
  nifEmissor: string;
  dtPeriodoFaturacao: Date;

  totalLinha: boolean;
  quantidadeFatura: boolean;
  quantidadeNotaCredito: boolean;
  quantidadeNotaDebito: boolean;

  totalBaseTributavelFactura: boolean;
  totalImpostoFactura: boolean;
  totalValorFactura: boolean;

  totalBaseTributavelNotaCredito: boolean;
  totalImpostoNotaCredito: boolean;
  totalValorNotaCredito: boolean;

  totalBaseTributavelNotaDebito: boolean;
  totalImpostoNotaDebito: boolean;
  totalValorNotaDebito: boolean;

  // data for get by ID
  totalLinhaAntes: number;
  totalLinhaDepois: number;
  amountDocumentsFound: number;
  amountDocuments: number;

  quantidadeFaturaAntes: number;
  quantidadeFaturaDepois: number;
  quantidadeNotaCreditoAntes: number;
  quantidadeNotaCreditoDepois: number;
  quantidadeNotaDebitoAntes: number;
  quantidadeNotaDebitoDepois: number;


  totalBaseTributavelFacturaAntes: number;
  totalBaseTributavelFacturaDepois: number;
  totalImpostoFacturaAntes: number;
  totalImpostoFacturaDepois: number;
  totalValorFacturaAntes: number;
  totalValorFacturaDepois: number;

  totalBaseTributavelNotaCreditoAntes: number;
  totalBaseTributavelNotaCreditoDepois: number;
  totalImpostoNotaCreditoAntes: number;
  totalImpostoNotaCreditoDepois: number;
  totalValorNotaCreditoAntes: number;
  totalValorNotaCreditoDepois: number;

  totalBaseTributavelNotaDebitoAntes: number;
  totalBaseTributavelNotaDebitoDepois: number;
  totalImpostoNotaDebitoAntes: number;
  totalImpostoNotaDebitoDepois: number;
  totalValorNotaDebitoAntes: number;
  totalValorNotaDebitoDepois: number;

  dataAlter: Date;
  dataCria: Date;

  tbArquivoDocumentoGerado = new FileDocument();
}
