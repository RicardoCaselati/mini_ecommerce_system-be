import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UseGuards,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from '../Service/product.service';
import { IProduct } from '../Interface/product.interface';
import { AuthMiddleware } from '../Middlewares/auth.middleware';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  // to list every product
  @Get('/')
  @UseGuards(AuthMiddleware)
  getAllProductsController() {
    return this.productService.getAllProductsService();
  }

  // to create a new product
  @Post('/new-product')
  @UseGuards(AuthMiddleware)
  async createProductController(
    @Res() res: Response,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('qty') qty: number,
    @Body('image') image: string,
    @Body('description') description: string,
  ) {
    const objtService: IProduct = {
      name,
      price,
      qty,
      image,
      description,
    };
    const { type, data } = await this.productService.createProductService(
      objtService,
    );
    if (type) return res.status(type).json(data);
    res.status(200).json(data);
  }

  // to find a product by id
  @Get('/:id')
  @UseGuards(AuthMiddleware)
  async getProductByIdController(@Param('id') id: string) {
    return this.productService.getProductByIdService(id);
  }

  // to update a product by id
  @Patch('/:id')
  @UseGuards(AuthMiddleware)
  updateProductByIdController(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('qty') qty: number,
    @Body('image') image: string,
    @Body('description') description: string,
  ) {
    const objToUpdate: IProduct = {
      name,
      price,
      qty,
      image,
      description,
    };
    return this.productService.updateProductByIdService(id, objToUpdate);
  }

  // to delete a product by id
  @Delete('/:id')
  @UseGuards(AuthMiddleware)
  deleteProductByIdController(@Param('id') id: string) {
    return this.productService.deleteProductByIdService(id);
  }
}
