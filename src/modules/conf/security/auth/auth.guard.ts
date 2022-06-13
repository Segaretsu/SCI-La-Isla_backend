import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JsUtil } from '@utils/util/JsUtil';
import { Observable } from 'rxjs';
import { UsuarioTokenDTO } from '../token/token.dto';
import { TokenManager } from '../token/token.manager';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const usuario: UsuarioTokenDTO = TokenManager.getUsuarioByContext(context);
        return !(JsUtil.isEmptyNull(usuario));
    }
}