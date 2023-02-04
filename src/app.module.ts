import { Module } from '@nestjs/common';
import config from './core/shared/configuration/app.config';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './controllers/user.controller';
import { DatabaseModule } from './frameworks/database/database.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    DatabaseModule,
    UserUseCasesModule,
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
