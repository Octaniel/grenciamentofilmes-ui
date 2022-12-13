import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Authorization } from './authorization';
import { DocumentOnlineItem, DocumentOnlineItemForm } from './document-online-item';
import { TaxPayer } from './taxpayer';
import * as moment from 'moment';

export class DocumentOnline {
  idDocumentoGeradoOnline: number;
  numDocumentoOnline: string;
  numeroSequencial: string;
  nifConsumidorOnline: string;
  dtEmissaoDocumentoOnline: Date = new Date;
  totalValorOnline: number = 0;
  totalImpostoOnline: number = 0;
  totalValorBaseTributavelOnline: number = 0;
  observacaoDocumentoGeradoOnline: string;
  dtCriaOnline: Date;
  dtAlterOnline: Date;
  tbAutorizacaoEmissao = new Authorization();
  tbContribuinteConsumidor = new TaxPayer();
  tbItensDocumentosGeradosOnline: DocumentOnlineItem[] = [];
}

export class DocumentOnlineForm {
  item = new DocumentOnlineItemForm(this.fb).builder();
  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      tbTipoDocumentoEmissao: new UntypedFormControl(null, Validators.required),

      numDocumentoOnline: new UntypedFormControl(
        { value: null, disabled: true }, Validators.required
      ),
      numeroSequencial: new UntypedFormControl,
      dtEmissaoDocumentoOnline: new UntypedFormControl(
        {
          value: new Date(),
          disabled: false,
        }, Validators.required
      ),

      nifConsumidorOnline: new UntypedFormControl,
      nomeConsumidorOnline: new UntypedFormControl({ value: null, disabled: true }),

      nifEmissor: new UntypedFormControl(
        { value: null, disabled: true }, Validators.required
      ),
      nomeEmissor: new UntypedFormControl(
        { value: null, disabled: true }, Validators.required
      ),

      telefoneEmissor: new UntypedFormControl,
      enderecoEmissor: new UntypedFormControl,
      numeroCertificacao: new UntypedFormControl,

      totalValorBaseTributavelOnline: new UntypedFormControl(
        { value: 0, disabled: true }, Validators.required
      ),
      totalImpostoOnline: new UntypedFormControl(
        { value: 0, disabled: true }, Validators.required
      ),
      totalValorOnline: new UntypedFormControl(
        { value: 0, disabled: true }, Validators.required
      ),

      tbAutorizacaoEmissao: this.fb.group({
        idAutorizacaoEmissao: new UntypedFormControl(null, Validators.required),
        siglaDocAutorizacaoEmissao: new UntypedFormControl,
        numSerieDocumento: new UntypedFormControl,
        anoAutorizacaoEmissao: new UntypedFormControl,
      }),
      observacaoDocumentoGeradoOnline: new UntypedFormControl,
      tbItensDocumentosGeradosOnline: this.fb.array([]),
    })
  }
}

export class DocumentOnlineView {
  numeroDocumento: string;
  dtEmissaoDocumento: Date;
  tbTipoDocumentoDescricao: string;
  idDocumentoGeradoOnline: number;
  itensDocumentoGeradoOnlinesDto: DocumentOnlineItem[];
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

  totalValorAnulado: number = 0;
  valorDisponivelAnular: number;

  cancellationSeverity: string = 'text-dark';
}
