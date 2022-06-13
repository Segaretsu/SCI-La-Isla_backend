import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenManager } from './token.manager';

export const User = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        return TokenManager.getUsuarioByContext(context);;
    },
);