import { IsEmail, IsEnum, IsString, IsStrongPassword } from 'class-validator';
import { strongPasswordOptions } from '../validation/strong-password.validation';
import { User } from '../entities/user.entity';
import { UserRole } from '../enums/user-roles.enum';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsStrongPassword(strongPasswordOptions)
  password: string;

  @IsStrongPassword(strongPasswordOptions)
  confirmationPassword: string;

  @IsString()
  name: string;

  @IsEnum(UserRole)
  role: UserRole;
}
