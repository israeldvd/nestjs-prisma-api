import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from '../models/AuthRequest';
import { Prisma } from '@prisma/client';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Prisma.UserCreateInput => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
