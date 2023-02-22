import { Module } from '@nestjs/common';
import { databaseProviders } from './providers';
import { gcemProviders } from './providers/gcem.providers';
import { userProviders } from './providers/user.providers';

@Module({
  providers: [...databaseProviders, ...userProviders, ...gcemProviders],
  exports: [...databaseProviders, ...userProviders, ...gcemProviders],
})
export class DatabaseModule {}
