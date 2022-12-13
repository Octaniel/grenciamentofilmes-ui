import { TaxPayer } from './taxpayer';
import { Authorization } from './authorization';

export class DocumentTemp {
  idDocumentoGerado: number;
  numDocumento: string;
  numeroSequencial: number;
  totalValor: number = 0;
  totalImposto: number = 0;
  totalValorBaseTributavel: number = 0;
  dtEmissaoDocumento: Date;
  nifConsumidor: string;
  dtAlter: Date;
  dtCria: Date;
  tbItensDocumentoGerados: any;
  valorDisponivelAnular: number;

  tbUsuarioByAlterIdUsuario: string;
  tbUsuarioByCriaIdUsuario: string;

  tbAutorizacaoEmissao = new Authorization();
}

export class DocumentTempView {
  btIdCriadoContribuinte: boolean;
  dtAlter: Date;
  dtCria: Date;
  dtEmissaoDocumento: Date;
  file: string;
  idDocumentoGerado: number;
  nifConsumidor: string;
  numDocumento: string;
  numeroSequencial: number;
  tbPessoaNomeConsumidor: string;
  tbPessoaEnderecoEmissor: string;
  tbAutorizacaoEmissaoNumeroAutorizacao: string;

  tbAutorizacaoEmissao = new Authorization();
  tbTipoDocumentoDescricao: string;
  tbContribuinteNifConsumidor: string;
  tbPessoaNomeEmissor: string;
  tbContribuinteNifEmissor: string;
  tbContribuinteConsumidor = new TaxPayer();
  tbItensDocumentoGerados: any[];
  tbUsuarioByAlterIdUsuario: number;
  tbUsuarioByCriaIdUsuario: number;
  totalImposto: number;
  totalValor: number;
  totalValorBaseTributavel: number;
  valorDisponivelAnular: number;

  origem: string;

  canceledAmount: number;
}
