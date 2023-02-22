import { Inject, Injectable } from '@nestjs/common';
import { IGcemRepository } from 'src/core/contracts/repository/gcem';
import { CreateGcemDto } from 'src/core/shared/dtos';
import { Repository } from 'typeorm';
import { Gcem } from '../entity';

@Injectable()
export class GcemRepository implements IGcemRepository {
  constructor(
    @Inject('GCEM_REPOSITORY') private gcemRepository: Repository<Gcem>,
  ) {}

  create(createGcemDto: CreateGcemDto): Promise<any> {
    return this.gcemRepository.insert(createGcemDto);
  }
}
