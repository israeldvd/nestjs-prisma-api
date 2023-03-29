import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  IsBoolean,
  IsDate,
  Matches,
  MaxLength,
  MinLength,
  Length,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto extends User {
  @IsString()
  @Length(36, 36)
  id: string;

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
  @IsOptional()
  role: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;

  @IsString()
  salt: string;

  @IsString()
  confirmationToken?: string;

  @IsString()
  @IsOptional()
  recoverToken?: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
