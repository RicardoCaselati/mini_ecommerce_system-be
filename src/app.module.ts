import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutingModule } from './database/Modules/routing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './database/Middlewares/auth.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      dbName: 'mini_ecommerce_system_db',
    }),
    RoutingModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthMiddleware],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('/login', '/users/new-user')
      .forRoutes('*');
  }
}
