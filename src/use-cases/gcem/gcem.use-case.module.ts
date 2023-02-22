import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/frameworks/database/database.module';
import { GcemRepository } from 'src/frameworks/database/repository/gcem.repository';
import { GcemUseCases } from './gcem.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [GcemUseCases, GcemRepository],
  exports: [GcemUseCases],
})
export class GcemUseCasesModule {}
