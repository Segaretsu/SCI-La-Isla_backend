import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Role, ROLES_KEY } from '../roles/role.enum';
import { RolesGuard } from '../roles/roles.guard';
import { AuthGuard } from './auth.guard';

// https://docs.nestjs.com/custom-decorators
export function Roles(...roles: Role[]) {
    return applyDecorators(
        SetMetadata(ROLES_KEY, roles),
        UseGuards(AuthGuard, RolesGuard),
        ApiBearerAuth(),
        ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    );
}