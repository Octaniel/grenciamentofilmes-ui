import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ExemptionReason } from './exemption-reason';
import { TaxRate } from './tax-rate';

export class DocumentConsumerItem {
  idItensDocumentoGeradoConsumidor: number;
  idDocumentoGeradoConsumidor: number;
  quantItens: number;
  descItens: string;
  valorItens: number;
  valorImposto: number;
  valorBaseTributavelItens: number;

  tbTaxaAplicavel = new TaxRate();
  tbMotivoIsencao = new ExemptionReason();
}

export class DocumentConsumerItemForm {
  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      idItensDocumentoGeradoConsumidor: new UntypedFormControl,
      descItens: new UntypedFormControl,
      valorBaseTributavelItens: new UntypedFormControl(null, Validators.required),
      tbTaxaAplicavel: this.fb.group({
        idTaxaAplicavel: [],
        descTaxaAplicavel: [],
        valorTaxaAplicavel: [null, Validators.required]
      }),
      tbMotivoIsencao: this.fb.group({
        idMotivoIsencao: new UntypedFormControl,
        codigoMotivoIsencao: new UntypedFormControl(null, Validators.required),
        desMotivoIsencao: new UntypedFormControl,
      }),
      valorImposto: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      valorItens: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
    })
  }
}
