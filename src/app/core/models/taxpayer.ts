import { Person } from './person';
import { RangeNif } from './range-nif';

export class TaxPayer {
    idContribuinte: number;
    nifContribuinte: string;

    dtAlterContribuinte: Date;
    dtCriaContribuinte: Date;

    tbGamaNif = new RangeNif();
    tbPessoa = new Person();

    tbUsuarioByCriaIdUsuario: string;
    tbUsuarioByAlterIdUsuario: string;
}
