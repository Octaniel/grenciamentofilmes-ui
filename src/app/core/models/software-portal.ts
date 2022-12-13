import { SoftwareCertified } from './software-certified';

export class SoftwarePortal {
    idCertificacaoSoftwareOnline: number;

    tbSoftwareCertificado = new SoftwareCertified();

    dtCriaCertificacaoSoftwareOnline: Date;
    dtAlterCertificacaoSoftwareOnline: Date;
}