/**
 * @license
 * Copyright jhonsebastianas.com . All Rights Reserved.
 */

import { ManagerExceptionFilter } from '@conf/exceptions/manager-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// config

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  // Register as global filter
  app.useGlobalFilters(new ManagerExceptionFilter());
  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Almacen la isla')
    .setDescription('The Almacen la isla API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // SERVER LISTEN
  await app.listen(process.env.PORT || '8001');
}
bootstrap();
