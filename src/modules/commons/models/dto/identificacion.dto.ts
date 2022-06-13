import { Transform } from "class-transformer";

export class IdentificacionDTO {

    idTipoDocumento: number;

    @Transform((numeroDocumento) => numeroDocumento.value.trim().toUpperCase())
    numeroDocumento: string;
}