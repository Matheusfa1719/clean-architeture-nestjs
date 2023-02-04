import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/core/shared/dtos';
import { HttpExceptionFilter } from 'src/core/shared/errors';
import { UserUseCases } from 'src/use-cases/user/user.use-case';

@ApiTags('User')
@Controller('api/user')
@UseFilters(new HttpExceptionFilter())
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userUseCases.findUser(id);
  }

  @Post()
  @HttpCode(204)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') id: string) {
    return this.userUseCases.delete(id);
  }
}
