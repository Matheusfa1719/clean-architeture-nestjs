import { UserRoles } from '../shared/enums';

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: UserRoles;
}
