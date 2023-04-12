import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './database/Middlewares/auth.middleware';
import { UserController } from './database/Controller/user.controller';
import { UserService } from './database/Service/user.service';
import { UserModule } from './database/Modules/user.module';
import { ProductsController } from './database/Controller/product.controller';
import { ProductService } from './database/Service/product.service';
import { ProductModule } from './database/Modules/product.module';
import { UserSchema } from './database/Schema/user.schema';
import { ProductSchema } from './database/Schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Product', schema: ProductSchema },
    ]),
    MongooseModule.forRoot(
      process.env.MONGO_DB_URL || 'mongodb://db/mini_ecommerce_system_db',
    ),
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
    RouterModule.register([
      { path: '/user', module: UserModule },
      { path: '/products', module: ProductModule },
    ]),
  ],
  controllers: [AppController, UserController, ProductsController],
  providers: [AppService, UserService, ProductService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: '/user/login', method: 'POST' as any },
        { path: '/products/new-product', method: 'POST' as any },
      )
      .forRoutes({ path: '*', method: 'ALL' as any });
  }
}
