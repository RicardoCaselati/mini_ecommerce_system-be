import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToDatabase from './database/Models/Connection';

const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectToDatabase();
  await app.listen(PORT);
  console.log(`Running server on port: ${PORT}`);
}

bootstrap();
