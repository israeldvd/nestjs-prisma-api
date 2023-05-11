import { PickType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

export class LoginUserDto extends PickType(User, [
  'id',
  'email',
  'name',
] as const) {}
