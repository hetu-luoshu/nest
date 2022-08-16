import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validator } from './validator';
import { ValidatorExceptionFilter } from './validator-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Validator());
  app.useGlobalFilters(new ValidatorExceptionFilter());
  await app.listen(3000);
}
bootstrap();
