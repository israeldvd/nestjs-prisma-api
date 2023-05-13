import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserRole } from 'src/user/enums/user-roles.enum';
import { UserService } from 'src/user/user.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: LoginUserDto): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async signup(createdUserDto: CreateUserDto): Promise<User> {
    createdUserDto.role = UserRole.User;

    if (createdUserDto.password !== createdUserDto.confirmationPassword) {
      throw new UnprocessableEntityException("Passwords don't match");
    }

    return await this.userService.create(createdUserDto);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    // user not found or password is not correct
    throw new Error('Email address or password provided is not correct');
  }
}
