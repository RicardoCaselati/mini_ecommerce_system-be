import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../Schema/product.schema';
import { ProductsController } from '../Controller/product.controller';
import { ProductService } from '../Service/product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
