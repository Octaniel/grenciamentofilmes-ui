import { NumberSymbol } from '@angular/common';
import { Authorization } from './authorization';

export class ControlDocument {
  idControloComunicacao: number;
  periodo: Date;
  totalDocumentoGerado: number;
  observacao: string;

  dtCria: Date;
  dtAlter: Date;

  /*tbUsuarioByAlterIdUsuario: string;
  tbUsuarioByCriaIdUsuario: string;*/

  alterNifUsuario: string;
  criaNifUsuario: string;

  tbAutorizacaoEmissao = new Authorization;
}

export class ControlDocumentMonth {
  jan: any;
  feb: any;
  mar: any;
  apr: any;
  may: any;
  june: any;
  july: any;
  aug: any;
  sept: any;
  oct: any;
  nov: any;
  dec: any;

  qunt1: number;
  qunt2: number;
  qunt3: number;
  qunt4: number;
  qunt5: number;
  qunt6: number;
  qunt7: number;
  qunt8: number;
  qunt9: number;
  qunt10: number;
  qunt11: number;
  qunt12: number;

  mascara: string;
  descricao: string;
  nifEmitente: string;
  nomeEmitente: string;
  enderecoEmitente: string;
  telefoneEmitente: string;
  documentoSolicitado: string;
  siglaDocAutorizacaoEmissao: string;

  numSerieDocumento: number;
  numeroCertificacao: number;
  idAutorizacaoEmissao: number;
  numAutorizacaoEmissao: number;
  anoAutorizacaoEmissao: number;
  totalDocumentoSolicitado: number;
  numeroDeSeriesComunicadas: number;
  quantidadeDeFacturasComunicadas: number;

  dataCertificacao: Date;

  status: boolean;
  statusTransfTbEmpresa: boolean;
  statusCommunication: any;
}
