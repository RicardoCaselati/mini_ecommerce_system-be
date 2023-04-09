import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './database/Modules/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      dbName: 'mini_ecommerce_system_db',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
