import { Injectable } from '@nestjs/common';
import { CreateGcemDto } from 'src/core/shared/dtos';
import { GcemRepository } from 'src/frameworks/database/repository/gcem.repository';

@Injectable()
export class GcemUseCases {
  constructor(private gcemRepository: GcemRepository) {}

  async create(createGcemDto: CreateGcemDto) {
    const gcem = await this.gcemRepository.create(createGcemDto);
    return gcem;
  }
}
