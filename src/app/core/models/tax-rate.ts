import { TypeTax } from './type-tax';

export class TaxRate {
    idTaxaAplicavel: number;
    descTaxaAplicavel: string;
    valorTaxaAplicavel: number = 0;

    tbTipoImposto = new TypeTax();

    /*tbUsuarioByAlterIdUsuario = new Utilizador();
    tbUsuarioByCriaIdUsuario = new Utilizador();*/
}