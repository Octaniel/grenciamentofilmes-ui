import { ExemptionReason } from './exemption-reason';
import { TaxRate } from './tax-rate';

export class InvoiceItem {
  idItensDocumentoGeradoOnline: number;
  idTemporario = 0;
  descItens: string;
  descEmitidaPorSistema: string = 'Documento emitido pelo sistema das Finanças';
  quantItens: number = 1;
  valorUnitItens: number = 0;
  valorBaseTributavelItens: number = 0;
  valorImposto: number = 0;
  totalLinhaAposImpostoItens: number = 0;

  tbTaxaAplicavel = new TaxRate();
  tbMotivoIsencao = new ExemptionReason();
}
