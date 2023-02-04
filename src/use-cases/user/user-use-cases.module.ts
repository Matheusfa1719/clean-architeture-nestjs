import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/frameworks/database/database.module';
import { UserRepository } from 'src/frameworks/database/repository/user.repository';
import { HashServices } from 'src/services/hash';
import { UserUseCases } from './user.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [UserUseCases, HashServices, UserRepository],
  exports: [UserUseCases],
})
export class UserUseCasesModule {}
