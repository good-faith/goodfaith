/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

import * as dotenv from 'dotenv';

dotenv.config();

console.log(process.env.PORT)

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);



  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  
  const port = process.env.PORT || 3333;
  await app.listen(port);
  logger.log(`Accepting requests from origin ${port}/${globalPrefix}`);
}

bootstrap();
