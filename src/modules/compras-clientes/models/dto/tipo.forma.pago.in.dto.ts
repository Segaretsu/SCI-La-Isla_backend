import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class TipoFormaPagoDTO {
    @IsNotEmpty({ message: 'El nombre de la forma de pago es obligatorio' })
    @Transform((nombre) => nombre.value.trim().toUpperCase())
    nombre: string;
}