export class Authorization {
  idAutorizacaoEmissao: number;
  numAutorizacaoEmissao: string;
  numSerieDocumento: number;
  siglaDocAutorizacaoEmissao: string;
  anoAutorizacaoEmissao: string;

  dtAlter: Date;
  dtCria: Date;

  tbUsuarioByAlterIdUsuario: string;
  tbUsuarioByCriaIdUsuario: string;

  statusTransfTbEmpresa: boolean;
  temComunicacao: boolean;
  transitarAno: boolean;
}

export class AuthorizationGet {
  anoAutorizacaoEmissao: number;
  numAutorizacaoEmissao: string;
  numSerieDocumento: string;
  siglaDocAutorizacaoEmissao: string;
  tbContribuinteNif: string;
  tbPedidoEmissaoDocumentoData: Date;
  tbPedidoEmissaoDocumentoQtDocumentosSolicitado: number;
  tbPedidoEmissaoDocumentoQtTotalDocumentosJaSolicitado: number;
  tbPedidoEmissaoDocumentoStatusPedidoEmissao: boolean;
  tbPessoaNome: string;
  tbTipoDocumentoId: number;
  tipoDocumentoNome: string;

  tbPedidoEmissaoDocumentoIdPedidoEmissaoDocumento: number;
  tbPedidoEmissaoDocumentoDescPedidoEmissaoDocumento: string;
  tbPedidoEmissaoDocumentoNumSequencialInicial: number;
}
