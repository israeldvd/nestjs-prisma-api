import { User } from '../entities/user.entity';

export class ReturnUserCreateDto {
  user: User;
  message: string;
}
