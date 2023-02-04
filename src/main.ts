import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableSwaggerConfig } from './core/shared/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  enableSwaggerConfig(app);
  await app.listen(3000);
}
bootstrap();
