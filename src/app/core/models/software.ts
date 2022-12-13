import { Certification } from './certification';

export class Software{
    idPedidoCertificacaoSoftware: number;
    nomeSoftware: string;
    versaoSoftware: string;
    fornecedorSoftware: string;
    idiomaSoftware: string;

    tbPedidoCertificacao = new Certification();
}