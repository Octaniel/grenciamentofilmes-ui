import { User } from "./user";

export class Occurrence {
  id: number;
  assunto: string;
  detalhe: string;
  resposta: string;
  respostaEnviada: string;

  dataAlter: Date;
  dataCria: Date;
  dataResposta: Date;

  tbSolicitacaoEstado: string = 'PENDENTE';
  status: string;
  statusColor: string = 'p-tag-secondary';

  usuarioSolicitante = new User;
  usuarioResponde = new User;
}
