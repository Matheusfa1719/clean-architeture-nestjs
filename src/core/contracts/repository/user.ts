import { CreateUserDto } from 'src/core/shared/dtos';

export abstract class IUserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<any>;
  abstract findByEmail(email: string): Promise<any>;
  abstract findById(id: string): Promise<any>;
  abstract delete(id: string): Promise<any>;
}
