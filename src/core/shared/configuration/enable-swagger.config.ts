import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwaggerConfig = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Gcem API')
    .setDescription('API Responsavel pelos relatórios do gcem')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
