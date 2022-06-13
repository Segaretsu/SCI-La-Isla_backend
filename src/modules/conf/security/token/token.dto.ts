export class UsuarioTokenDTO {
    idUsuario: number;
    correo: string;
    username: string;
    perfiles: Array<string>;
    exp: number;
}