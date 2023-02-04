import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/core/shared/dtos';
import { HttpExceptionFilter } from 'src/core/shared/errors';
import { UserUseCases } from 'src/use-cases/user/user.use-case';

@ApiTags('User')
@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto);
  }
}
