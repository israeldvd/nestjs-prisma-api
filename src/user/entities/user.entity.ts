export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  role?: string;
  status?: boolean;
  salt: string;
  confirmationToken?: string;
  recoverToken?: string;
  createdAt: Date;
  updatedAt: Date;
}
