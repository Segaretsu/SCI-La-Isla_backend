import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class ClienteIdentificacionDTO {

    @IsNotEmpty({ message: 'El tipo de identificación no puede estar vacío' })
    idTipoDocumento: number;

    @IsNotEmpty({ message: 'El número de identificación no puede estar vacío' })
    @Transform((numeroDocumento) => numeroDocumento.value.trim().toUpperCase())
    numeroDocumento: string;
}