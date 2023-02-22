import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGcemDto } from 'src/core/shared/dtos';
import { HttpExceptionFilter } from 'src/core/shared/errors';
import { GcemUseCases } from 'src/use-cases/gcem/gcem.use-case';

@ApiTags('Gcem')
@Controller('api/gcem')
@UseFilters(new HttpExceptionFilter())
export class GcemController {
  constructor(private gcemUseCases: GcemUseCases) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createGcem(@Body() createGcemDto: CreateGcemDto) {
    return this.gcemUseCases.create(createGcemDto);
  }
}
