import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ConsoleLogger } from '@nestjs/common';

config({ path: './src/.env' });
const logger = new ConsoleLogger();
const { APP_PORT = 3001 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
  logger.log(`Mokuba is listening on PORT ${APP_PORT}`);
}
bootstrap();
