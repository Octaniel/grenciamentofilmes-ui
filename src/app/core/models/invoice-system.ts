import { Authorization } from './authorization';
import { InvoiceItem } from './invoice-item';

export class Invoice {
  idDocumentoGeradoOnline: number;
  numDocumentoOnline: string;
  nifConsumidorOnline: string;
  dtEmissaoDocumentoOnline: Date = new Date;
  totalValorOnline: number = 0;
  totalImpostoOnline: number = 0;
  totalValorBaseTributavelOnline: number = 0;
  observacaoDocumentoGeradoOnline: string;
  dtCriaOnline: Date;
  dtAlterOnline: Date;
  tbAutorizacaoEmissao = new Authorization();
  tbItensDocumentosGeradosOnline: any;
}

export class InvoiceView {
  numeroDocumento: string;
  dtEmissaoDocumento: Date;
  tbTipoDocumentoDescricao: string;
  idDocumentoGeradoOnline: number;
  itensDocumentoGeradoOnlinesDto: InvoiceItem[];
  nifConsumidor: string;
  tbAutorizacaoEmissaoAno: string;
  tbAutorizacaoEmissaoNumeroAutorizacao: string;
  tbAutorizacaoEmissaoNumeroSerie: number;
  tbAutorizacaoEmissaoSigla: string;
  tbContribuinteNifConsumidor: string;
  tbContribuinteNifEmissor: string;
  tbPedidoCertificacaoNumeroCertificacao: number;
  tbPessoaEnderecoEmissor: string;
  tbPessoaNomeEmissor: string;
  tbPessoaTelefoneEmissor: string;
  totalImposto: number;
  totalValor: number;
  totalValorBaseTributavel: number;
  observacaoDocumentoGeradoOnline: string;
  tbPessoaNomeConsumidor: string;
}
