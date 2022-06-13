import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsuarioTokenDTO } from '../token/token.dto';
import { TokenManager } from '../token/token.manager';
import { Role, ROLES_KEY } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const usuario: UsuarioTokenDTO = TokenManager.getUsuarioByContext(context);
    if (requiredRoles.every((role) => usuario.perfiles?.includes(role))) {
      return true;
    }
    throw new UnauthorizedException("El usuario no cuenta con los recursos necesarios");
  }
}