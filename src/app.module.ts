import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutingModule } from './database/Modules/routing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './database/Middlewares/auth.middleware';
import { UserModule } from './database/Modules/user.module';
import { ProductModule } from './database/Modules/product.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost/nestjs', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    RoutingModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('/login', '/users/new-user')
      .forRoutes('*');
  }
}
