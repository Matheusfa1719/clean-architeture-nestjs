import { Module } from '@nestjs/common';
import config from './core/shared/configuration/app.config';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './controllers/user.controller';
import { DatabaseModule } from './frameworks/database/database.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { GcemController } from './controllers/gcem.controller';
import { GcemUseCasesModule } from './use-cases/gcem/gcem.use-case.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    DatabaseModule,
    UserUseCasesModule,
    GcemUseCasesModule,
  ],
  controllers: [UserController, GcemController],
  providers: [],
})
export class AppModule {}
