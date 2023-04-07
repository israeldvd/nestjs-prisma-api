export class User {
  id?: string;
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
