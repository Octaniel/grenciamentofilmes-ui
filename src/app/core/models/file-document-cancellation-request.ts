import { FileDocument } from './file-document';

export class FileDocumentCancellationRequest {
  idSolicitacaoEliminacaoArquivo: number;
  descMotivo: string;
  tbArquivoDocumentoGerado = new FileDocument();
  dtCria: Date;
  dtAlter: Date;
  dataResposta: Date;
  nifSolicitante: 109311197;
  nifExecutor: string;
  tbSolicitacaoEstado: string = State.PENDENT;

  status: string;
  statusColor: string = 'p-tag-warning';
}

export enum State {
  PENDENT = 'PENDENTE',
  CLOSED = 'FECHADO',
}
