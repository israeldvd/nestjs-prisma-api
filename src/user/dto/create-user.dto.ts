import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enums/user-roles.enum';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsOptional()
  @IsUUID()
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

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  @IsBoolean()
  status: boolean;

  @IsString()
  salt: string;

  @IsOptional()
  @IsString()
  confirmationToken: string;

  @IsOptional()
  @IsString()
  recoverToken: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  updatedAt: Date;
}
