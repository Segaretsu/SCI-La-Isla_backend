import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { ClienteIdentificacionDTO } from "./cliente.identificacion.dto";

export class ClienteInDTO {

    @IsNotEmpty({ message: 'El cliente debe contar con una identificación' })
    identificacion: ClienteIdentificacionDTO;

    @IsNotEmpty({ message: 'El primer nombre del cliente no puede estar vacío' })
    @Transform((primerNombre) => primerNombre.value.trim().toUpperCase())
    primerNombre: string;

    @Transform((segundoNombre) => segundoNombre.value.trim().toUpperCase())
    segundoNombre: string;

    @IsNotEmpty()
    @IsNotEmpty({ message: 'El primer apellido del cliente no puede estar vacío' })
    @Transform((primerApellido) => primerApellido.value.trim().toUpperCase())
    primerApellido: string;

    @Transform((segundoApellido) => segundoApellido.value.trim().toUpperCase())
    segundoApellido: string;

    @Transform((direccion) => direccion.value.trim().toUpperCase())
    direccion: string;

    @Transform((correo) => correo.value.trim().toUpperCase())
    correo: string;

    @IsNotEmpty({ message: 'El campo teléfono no debe estar vacío' })
    telefono: string;

}