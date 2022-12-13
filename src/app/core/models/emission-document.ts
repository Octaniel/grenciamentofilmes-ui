import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Authorization } from './authorization';
import { Emission } from './emission';
import { TypeDocument } from './type-document';

export class EmissionDocument {
  idPedidoEmissaoDocumento: number;
  qtDocumentosSolicitado: number;
  qtTotalDocumentosJaSolicitado: number;
  statusPedidoEmissao = true;
  historicoValidado = false;

  descPedidoEmissaoDocumento: string;
  numInicialSequencial: number = 1;
  numSerieActual: string;

  tbPedidoEmissaoFatura = new Emission();
  tbTipoDocumentoEmissao = new TypeDocument();
  tbAutorizacaoEmissao = new Authorization();

  mascara: number;
  editavel: boolean = true;

  dtCriaPedidoEmissaoDocumento: Date;
  dtAlterPedidoEmissaoDocumento: Date;

  tbUsuarioByAlterIdUsuario: any;
  tbUsuarioByCriaIdUsuario: any;
}

export class EmissionDocumentView {
  idPedidoEmissaoDocumento: number;
  ano: number
  data: Date;
  descricao: string;
  nifEmissor: string;
  nifRequerente: string;
  nomeEmissor: string;
  nomeRequerente: string;
  serie: string;
  siglaSerie: string;
  status: boolean;
  tipoDocumento: string;
  totalJaSolicitado: number;
  totalSolicitado: number;
  mascara: number;
  numInicialSequencial: number = 1;
  numAutorizacaoEmissao: string;
  idAutorizacaoEmissao: number;
  idTipoDocumento: number;
  tipoCertificacao: string;
}

export class EmissionDocumentResult {
  idAutorizacaoEmissao: number;
  anoAutorizacaoEmissao: number;
  apr: boolean;
  aug: boolean;
  dataCertificacao: Date;
  dec: boolean;
  descricao: string;
  documentoSolicitado: number
  enderecoEmitente: string;
  feb: boolean;
  jan: boolean;
  july: boolean;
  june: boolean;
  mar: boolean;
  mascara: 6
  numInicialSequencial: number = 1;
  may: boolean;
  nifEmitente: string;
  nomeEmitente: string;
  nov: boolean;
  numAutorizacaoEmissao: string;
  numSerieDocumento: string;
  numeroCertificacao: string;
  numeroDeSeriesComunicadas: string;
  oct: boolean;
  quantidadeDeFacturasComunicadas: number;
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
  sept: boolean;
  siglaDocAutorizacaoEmissao: "FS"
  status: boolean;
  statusTransfTbEmpresa: boolean;
  telefoneEmitente: string;
  totalDocumentoSolicitado: number;
}

export class EmissionDocumentForm {
  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      tbTipoDocumentoEmissao: this.fb.group({
        idTipoDocumentoEmissao: new UntypedFormControl(null, Validators.required),
      }),
      qtDocumentosSolicitado: new UntypedFormControl(null, Validators.required),
      qtTotalDocumentosJaSolicitado: new UntypedFormControl,
      mascara: new UntypedFormControl(6, Validators.required),
      descPedidoEmissaoDocumento: new UntypedFormControl,
    });
  }
}
