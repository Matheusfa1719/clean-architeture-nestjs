import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/core/contracts/repository/user';
import { CreateUserDto } from 'src/core/shared/dtos';
import { Repository } from 'typeorm';
import { User } from '../entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.insert(createUserDto);
  }
}
