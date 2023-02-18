import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/core/contracts/repository/user';
import { CreateUserDto, UpdateUserDto } from 'src/core/shared/dtos';
import { Repository } from 'typeorm';
import { User } from '../entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  findById(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.insert(createUserDto);
  }

  delete(id: string) {
    return this.userRepository.delete({ id: id });
  }

  update(updateUserDto: UpdateUserDto): Promise<any> {
    return this.userRepository.update({ id: updateUserDto.id }, updateUserDto);
  }
}
