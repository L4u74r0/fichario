import { SetMetadata } from '@nestjs/common';
import { RolesList} from './roles.enum';

export const ROLES_KEY = 'roles';

export const roles = (...roles: RolesList[]) =>
  SetMetadata(ROLES_KEY, roles);
