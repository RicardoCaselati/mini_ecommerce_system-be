import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import connectToDatabase from '../Connection';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  connectToDatabase();

  // Configura o passport
  app.use(passport.initialize());

  await app.listen(process.env.PORT);
}

bootstrap();
