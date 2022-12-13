import { TaxPayer } from "./taxpayer";

export class FileDocument {
  idArquivoDocumentoGerado: number;
  nomeArquivoDocumentoGerado: string;
  dtPeriodoFaturacao: Date;
  formattedPeriod: string;
  dtAlter: Date;
  dtCria: Date;
  nifEmissor: string;

  status: boolean;
  statusColor: string;

  sizeArquivoDocumentoGerado: number;
  file: any;

  analisePrim: boolean;
  analiseSegu: boolean;
  analiseTerc: boolean;

  statusAnaliseArquivo: string;

  tbContribuinte = new TaxPayer();

  fileAnalise: string;
  fileAnaliseColor: string;
  step1: boolean = null;
  step2: boolean = null;
  step3: boolean = null;
}
