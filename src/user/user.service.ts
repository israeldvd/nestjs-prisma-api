import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, name, role, password: plainPassword } = createUserDto;

    const confirmationToken = crypto.randomBytes(32).toString('hex');
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(plainPassword, 11);

    const data: Prisma.UserCreateInput = {
      email,
      name,
      role,
      confirmationToken,
      salt,
      password: hashPassword,
    };

    try {
      const createdUser = await this.prisma.user.create({ data });

      return {
        ...createdUser,
        password: undefined,
        salt: undefined,
      };
    } catch (error: any) {
      if (error.code == 'P2002') {
        throw new ForbiddenException('User already exists.');
      }
      if (error instanceof InternalServerErrorException) {
        error.message = 'Something went wrong while creating this user.';
        throw error;
      }
      throw error;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
