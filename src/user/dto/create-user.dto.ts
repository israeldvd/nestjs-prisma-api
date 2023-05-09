import {
  IsEmail,
  IsString,
  IsBoolean,
  IsDate,
  Matches,
  MaxLength,
  MinLength,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';

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

  @IsString()
  role: string;

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
