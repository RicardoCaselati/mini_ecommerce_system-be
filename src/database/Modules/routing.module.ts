import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ProductModule } from './product.module';
import { UsersController } from '../Controller/user.controller';
import { ProductsController } from '../Controller/product.controller';
import { UserService } from '../Service/user.service';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [UsersController, ProductsController],
  providers: [UserService],
})
export class RoutingModule {}
