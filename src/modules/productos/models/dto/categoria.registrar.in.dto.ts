import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CategoriaRegistrarInDTO {
    @IsNotEmpty({ message: 'El nombre de la categoria no puede estar vacío.' })
    @Transform((nombre) => nombre.value.trim().toUpperCase())
    nombre: string;

    @IsNotEmpty({ message: 'El producto tiene que estar, activo o inactivo.' })
    activo: string;
}