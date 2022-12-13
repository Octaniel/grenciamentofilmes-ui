import { TypeDocument } from './type-document';

export class DocumentTempItemOrigin {
  numDocumentoOrigem: string;
  dtDocumentoOrigem: Date;
  dtAlter: Date;
  dtCria: Date;
  tbUsuarioByAlterIdUsuario: string;
  tbUsuarioByCriaIdUsuario: string;
  tbTipoDocumentoEmissao = new TypeDocument();
}
