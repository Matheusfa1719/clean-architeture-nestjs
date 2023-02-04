import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/shared/dtos';
import { UserRepository } from 'src/frameworks/database/repository/user.repository';
import { HashServices } from 'src/services/hash';
import { UserFactory } from './user.factory';

@Injectable()
export class UserUseCases {
  constructor(
    private userRepository: UserRepository,
    private factory: UserFactory,
    private hashService: HashServices,
  ) {}

  async findUser(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new HttpException('User id not found', HttpStatus.NOT_FOUND);
    }
    return this.factory.findUser(user);
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findByEmail(createUserDto.email);
    if (user) {
      throw new HttpException('User Aleready exists', 400);
    }
    createUserDto.password = await this.hashService.encrypt(
      createUserDto.password,
    );
    return await this.userRepository.create(createUserDto);
  }

  async delete(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new HttpException('Fail to delete User', HttpStatus.NOT_FOUND);
    }
    return await this.userRepository.delete(id);
  }
}
