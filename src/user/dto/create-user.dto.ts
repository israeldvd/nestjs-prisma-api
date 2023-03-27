import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  IsBoolean,
  IsDate,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;

  @IsString()
  role: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  salt: string;

  @IsString()
  confirmationToken?: string;

  @IsString()
  recoverToken?: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
