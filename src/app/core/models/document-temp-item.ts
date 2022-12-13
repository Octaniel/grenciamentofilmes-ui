import { DocumentItemOrigin } from './document-item-origin';
import { ExemptionReason } from './exemption-reason';
import { TaxRate } from './tax-rate';

export class DocumentTempItem {
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
