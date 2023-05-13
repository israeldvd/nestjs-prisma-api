import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignupUserDto } from 'src/user/dto/signup-user.dto';
import { UserRole } from 'src/user/enums/user-roles.enum';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  logIn(@CurrentUser() user: LoginUserDto) {
    return this.authService.login(user);
  }

  @IsPublic()
  @Post('signup')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() signupUserDto: SignupUserDto) {
    const newUser: CreateUserDto = { ...signupUserDto, role: UserRole.User };
    return this.authService.signup(newUser);
  }
}
