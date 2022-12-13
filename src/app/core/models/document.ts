import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Authorization } from './authorization';
import { TaxPayer } from './taxpayer';
import { DocumentItemForm } from './document-item';

export class Document {
  idDocumentoGerado: number;
  numDocumento: string;
  numeroSequencial: number;
  totalValor: number = 0;
  totalImposto: number = 0;
  totalValorBaseTributavel: number = 0;
  dtEmissaoDocumento: Date;
  nifConsumidor: string;
  nomeConsumidor: string;
  dtAlter: Date;
  dtCria: Date;
  tbItensDocumentoGerados: any;
  valorDisponivelAnular: number;
  tbContribuinteConsumidor = new TaxPayer();
  tbUsuarioByAlterIdUsuario: string;
  tbUsuarioByCriaIdUsuario: string;

  tbAutorizacaoEmissao = new Authorization();

  descTipoDocumento: string;

  origem: string;

  canceledAmount: number;
  totalValorItensNc: number;
}

export class DocumentForm {
  item = new DocumentItemForm(this.fb).builder();

  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      tbTipoDocumentoEmissao: new UntypedFormControl(null, Validators.required),
      numDocumento: new UntypedFormControl(null, Validators.required),
      nifEmissor: new UntypedFormControl(
        { value: null, disabled: true }, Validators.required
      ),
      nomeEmissor: new UntypedFormControl(
        { value: null, disabled: true }, Validators.required
      ),
      nifConsumidor: new UntypedFormControl,
      nomeConsumidor: new UntypedFormControl(
        { value: null, disabled: true }
      ),
      totalValorBaseTributavel: new UntypedFormControl(
        { value: 0, disabled: true }, Validators.required
      ),
      totalImposto: new UntypedFormControl(
        { value: 0, disabled: true }, Validators.required),
      totalValor: new UntypedFormControl(
        { value: 0, disabled: true }, Validators.required),
      dtEmissaoDocumento: new UntypedFormControl(null, Validators.required),
      tbAutorizacaoEmissao: this.fb.group({
        idAutorizacaoEmissao: new UntypedFormControl(null, Validators.required),
        numAutorizacaoEmissao: new UntypedFormControl,
      }),
      tbItensDocumentoGerados: this.fb.array([this.item])
    })
  }
}

export class DocumentView {
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
