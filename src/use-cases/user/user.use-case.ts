import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/core/shared/dtos';
import { UserRepository } from 'src/frameworks/database/repository/user.repository';
import { HashServices } from 'src/services/hash';

@Injectable()
export class UserUseCases {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashServices,
  ) {}

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
}
