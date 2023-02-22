import { CreateGcemDto } from 'src/core/shared/dtos';

export abstract class IGcemRepository {
  abstract create(createGcemDto: CreateGcemDto): Promise<any>;
}
