import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class SignupUserDto extends OmitType(CreateUserDto, ['role']) {}
