import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Certification } from './certification';
import { TaxPayer } from './taxpayer';

export class Emission {
  idPedidoEmissaoFatura: number;
  descPedidoEmissaoFatura: string;
  dataPedidoEmissaoFatura: Date;

  btGraficaSuspensa = false;
  btClienteRegIva = false;
  btClienteIsentoIva = false;
  btClienteInibidoEmitir = false;
  btAutorizadoAnteriormente = false;
  nifCliente: string;
  tbContribuinte = new TaxPayer();
  btPedidoEmissaoProximoAno: boolean = false;

  pedidoEmissaoDocumentos: Array<any>;

  dtAlterPedidoEmissaoFatura: Date;
  dtCriaPedidoEmissaoFatura: Date;

  tbPedidoCertificacao = new Certification();

  tbUsuarioByAlterIdUsuario: string;
  tbUsuarioByCriaIdUsuario: string;
}

export class EmissionForm {
  constructor(private fb: UntypedFormBuilder) { }

  builder(): UntypedFormGroup {
    return this.fb.group({
      // emitterNif: new FormControl,

      tbPedidoCertificacao: this.fb.group({
        tbContribuinte: this.fb.group({
          idContribuinte: new UntypedFormControl(null, Validators.required),
        }),
      }),

      tbContribuinte: this.fb.group({
        nifContribuinte: new UntypedFormControl(null, Validators.required),
        nomeContribuinte: new UntypedFormControl(
          { value: null, disabled: true }
        )
      }),

      nifSolicitante: new UntypedFormControl(null, Validators.required),
      nomeSolicitante: new UntypedFormControl(
        { value: null, disabled: true },
        Validators.required
      ),

      btPedidoEmissaoProximoAno: new UntypedFormControl(false),
      descPedidoEmissaoFatura: new UntypedFormControl,
      pedidoEmissaoDocumentos: this.fb.array([])
    })
  }

  builderForThird(): UntypedFormGroup {
    return this.fb.group({
      emitterNif: new UntypedFormControl(null, Validators.required), // encontrar melhor forma depois

      tbPedidoCertificacao: this.fb.group({
        tbContribuinte: this.fb.group({
          idContribuinte: new UntypedFormControl(null, Validators.required),
        }),
      }),

      tbContribuinte: this.fb.group({
        nifContribuinte: new UntypedFormControl(null, Validators.required),
        nomeContribuinte: new UntypedFormControl(
          { value: null, disabled: true }
        )
      }),

      nifSolicitante: new UntypedFormControl(null, Validators.required),
      nomeSolicitante: new UntypedFormControl(
        { value: null, disabled: true },
        Validators.required
      ),

      btPedidoEmissaoProximoAno: new UntypedFormControl(false),
      descPedidoEmissaoFatura: new UntypedFormControl,
      pedidoEmissaoDocumentos: this.fb.array([])
    })
  }
}
