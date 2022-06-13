import { UsuarioTokenDTO } from "@conf/security/token/token.dto";
import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

export class TokenManager {

    public static create(payload: any, options = {}) {
        return jwt.sign(payload, process.env.tokenKey, options)
    }

    public static verify(token: any): any {
        return jwt.verify(token, process.env.tokenKey);
    }

    public static getUsuarioByToken(token: string): UsuarioTokenDTO {
        const tokenData = this.verify(token);
        const usuario: UsuarioTokenDTO = new UsuarioTokenDTO();
        usuario.idUsuario = tokenData.idUsuario;
        usuario.correo = tokenData.correo;
        usuario.username = tokenData.username;
        usuario.perfiles = tokenData.perfiles;
        return usuario;
    }

    public static getUsuarioByContext(context: ExecutionContext): UsuarioTokenDTO {
        const request = context.switchToHttp().getRequest();
        if (!request.headers['x-access-token']) {
            return null;
        }
        let usuario: UsuarioTokenDTO;
        try {
            usuario = this.verify(request.headers['x-access-token']);
            if (Date.now() >= usuario.exp * 1000) {
                throw new UnauthorizedException("El token no es valido.");
            }
        } catch (error) {
            throw new UnauthorizedException("El token no es valido.");
        }
        request.headers.usuario = usuario;
        return usuario;
    }
}