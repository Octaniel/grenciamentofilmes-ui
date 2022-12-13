export class ThirdParty {
  id: number;

  atividades = [];

  observacao: string;
  nifContribuinte: string;

  aceitoPri: boolean;
  aceitoTer: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export type ThirdPartyView = {
  id: number;
  nifContriPri: string;
  nifContriTer: string;
  nomeAtividade: string;
  labelActivity: string;
  nomeContriPri: string;
  nomeContriTer: string;
  dataCria: Date;

  aceitoPri: boolean;
  aceitoTer: boolean;
}
