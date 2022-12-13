import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ExemptionReason } from './exemption-reason';
import { TaxRate } from './tax-rate';
import { DocumentOnlineItemOrigin } from './document-online-item-origin';

export class DocumentOnlineItem {
  idItensDocumentoGeradoOnline: number;
  descItens: string;
  descEmitidaPorSistema: string = 'Documento emitido pelo sistema das Finanças';
  quantItens: number = 1;
  valorUnitItens: number = 0;
  valorBaseTributavelItens: number = 0;
  valorImposto: number = 0;
  totalLinhaAposImpostoItens: number = 0;

  tbTaxaAplicavel = new TaxRate();
  tbMotivoIsencao = new ExemptionReason();
  documentosOrigemOnline = new DocumentOnlineItemOrigin();
}

export class DocumentOnlineItemForm {
  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      idItensDocumentoGeradoOnline: new UntypedFormControl,
      descItens: new UntypedFormControl(null, Validators.compose([
        Validators.required,
        Validators.min(0.05)
      ])),
      quantItens: new UntypedFormControl(
        1,
        Validators.compose([
          Validators.required,
          Validators.min(0.25)
        ])
      ),
      valorUnitItens: new UntypedFormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1)
        ])
      ),

      tbTaxaAplicavel: this.fb.group({
        idTaxaAplicavel: new UntypedFormControl,
        descTaxaAplicavel: new UntypedFormControl(null, Validators.required),
        valorTaxaAplicavel: new UntypedFormControl(null, Validators.required)
      }),

      tbMotivoIsencao: this.fb.group({
        idMotivoIsencao: new UntypedFormControl,
        codigoMotivoIsencao: new UntypedFormControl(null, Validators.required),
        desMotivoIsencao: new UntypedFormControl,
      }),

      valorBaseTributavelItens: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      valorImposto: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),
      totalLinhaAposImpostoItens: new UntypedFormControl({ value: 0, disabled: true }, Validators.required),

      documentosOrigemOnline: this.fb.group({
        numDocumentoOrigemOnline: new UntypedFormControl
      })
    })
  }
}
