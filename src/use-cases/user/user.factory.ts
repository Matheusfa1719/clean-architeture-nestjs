import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user.entity';

@Injectable()
export class UserFactory {
  findUser(user: User) {
    const response = new User();
    response.id = user.id;
    response.name = user.name;
    response.email = user.email;
    response.role = user.role;

    return response;
  }
}
