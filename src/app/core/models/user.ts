import { TaxPayer } from './taxpayer';
import { Profile } from './profile';

export class User {
  idUsuario: number;
  senhaUsuario: string;
  senhaUsuarioConfirmacao: string;
  senhaUsuarioRecuperacao: string;
  nifUsuario: string;
  emailUsuario: string;
  isFirst: boolean;
  statusUsuario: boolean;

  dataCriaUsuario: Date;
  dataAlterUsuario: Date;

  tbPerfil = new Profile();
  tbContribuinte = new TaxPayer();

  tbUsuarioByAlterIdUsuario: number;
  tbUsuarioByCriaIdUsuario: number;

  nifAssinante: string;
  nifDesbloqueador: string;
  statusAssinatura: boolean;
  statusCadastrado: boolean;

  statusColor: string;
}
