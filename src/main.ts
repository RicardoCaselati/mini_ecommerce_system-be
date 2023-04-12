import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConnectToDatabase } from '../Connection';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const connection = new ConnectToDatabase(
    app.get('UserModel'),
    app.get('ProductModel'),
  );
  await connection.connectToDatabase();

  // Configura o passport
  app.use(passport.initialize());

  app.enableCors();

  await app.listen(process.env.PORT);
}

bootstrap();
