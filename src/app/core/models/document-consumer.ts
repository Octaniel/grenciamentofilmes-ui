import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DocumentConsumerItem, DocumentConsumerItemForm } from './document-consumer-item';
import { TypeDocument } from './type-document';

export class DocumentConsumer {
  numDocumento: string;
  nifConsumidor: string;
  nomeConsumidor: string;
  nifEmissor: string;
  nomeEmissor: string;
  dtEmissaoDocumento: Date;
  totalValor: string;
  totalImposto: string;
  totalValorBaseTributavel: string;

  dtAlter: Date;
  dtCria: Date;
  criaIdUsuario: string;
  alterIdUsuario: string;

  tbTipoDocumentoEmissao = new TypeDocument();
  tbItensDocumentoGeradoConsumidor: DocumentConsumerItem[];
}

export class DocumentConsumerForm {
  item = new DocumentConsumerItemForm(this.fb).builder();

  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      tbTipoDocumentoEmissao: this.fb.group({
        idTipoDocumentoEmissao: new UntypedFormControl(null, Validators.required),
        descTipoDocumentoEmissao: new UntypedFormControl,
        siglaTipoDocumentoEmissao: new UntypedFormControl,
      }),
      numDocumento: new UntypedFormControl(null, Validators.required),
      nifEmissor: new UntypedFormControl(null, Validators.required),
      nomeEmissor: new UntypedFormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      nifConsumidor: new UntypedFormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      nomeConsumidor: new UntypedFormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      dtEmissaoDocumento: new UntypedFormControl(new Date(), Validators.required),
      totalValorBaseTributavel: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      totalImposto: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      totalValor: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      tbItensDocumentoGeradoConsumidor: this.fb.array([])
    })
  }

}
