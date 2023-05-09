import { Prisma } from '@prisma/client';
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: Prisma.UserCreateInput;
}
