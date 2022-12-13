import { CertificationSoftware } from './certification-software';
import { TaxPayer } from 'src/app/core/models/taxpayer';
import { CertificationType } from './certification-type';
import { SoftwarePortal } from './software-portal';

export class Certification {
  idPedidoCertificacao: number;
  descPedidoCertificacao: string;
  dtDataValidadePedido: Date;
  numeroCertificacao: string;
  dtCertificacao: Date;

  estadoPedidoCertificacao: boolean;
  blRegIrc: boolean;
  blRegIrs: boolean;
  btDeclarFalta: boolean;
  blCondInfracao: boolean;
  blDivEmExecFiscal: boolean;
  blRegTipografiaGrafica: boolean;
  blTodosDocAdd: boolean;

  dtAlterPedidoCertificacao: Date;
  dtCriaPedidoCertificacao: Date;

  tbUsuarioByAlterIdUsuario: { idUsuario: 1 };
  tbUsuarioByCriaIdUsuario: { idUsuario: 1 };

  tbTipoCertificacao = new CertificationType();
  tbContribuinte = new TaxPayer();
  tbPedidoCertificacaoSoftwareOnlines = new SoftwarePortal();

  pedidoCertificacaoDocumentos: any;
  pedidoCertificacaoSoftware = new CertificationSoftware();
}
