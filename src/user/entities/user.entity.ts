import { Prisma } from '@prisma/client';

export class User implements Prisma.UserCreateInput {
  id?: string;
  email: string;
  name: string;
  role: string;
  status?: boolean;
  password: string;
  salt: string;
  confirmationToken?: string;
  recoverToken?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
