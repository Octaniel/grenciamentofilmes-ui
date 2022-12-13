import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DocumentItemOrigin } from './document-item-origin';
import { ExemptionReason } from './exemption-reason';
import { TaxRate } from './tax-rate';

export class DocumentoItem {
  idItensDocumentoGerado: number;
  descItens: string;
  quantItens: number = 0;
  valorBaseTributavelItens: number = 0;
  valorItens = 0;
  valorImposto = 0;
  descEmitidaPorSistema: string;

  tbDocumentoOrigems = new DocumentItemOrigin;
  tbTaxaAplicavel = new TaxRate;
  tbMotivoIsencao = new ExemptionReason;
}

export class DocumentItemForm {
  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      idItensDocumentoGerado: new UntypedFormControl,
      descItens: new UntypedFormControl,
      valorBaseTributavelItens: new UntypedFormControl(null, Validators.required),
      totalOrigin: new UntypedFormControl,
      tbTaxaAplicavel: this.fb.group({
        idTaxaAplicavel: new UntypedFormControl,
        descTaxaAplicavel: new UntypedFormControl,
        valorTaxaAplicavel: new UntypedFormControl(null, Validators.required)
      }),
      tbMotivoIsencao: this.fb.group({
        idMotivoIsencao: new UntypedFormControl,
        codigoMotivoIsencao: new UntypedFormControl(null, Validators.required),
        desMotivoIsencao: new UntypedFormControl,
      }),
      valorImposto: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      valorItens: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      tbDocumentoOrigems: this.fb.group({
        numDocumentoOrigem: new UntypedFormControl
      })
    })
  }
}
