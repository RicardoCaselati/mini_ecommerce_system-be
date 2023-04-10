import { Injectable } from '@nestjs/common';
import { IProduct } from '../Interface/product.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<IProduct>,
  ) {}

  async getAllProductsService(): Promise<IProduct[]> {
    const products = await this.productModel.find();
    return products;
  }

  async createProductService(
    product: IProduct,
  ): Promise<{ type: number | null; data: IProduct }> {
    const productDocument = await this.productModel.create({
      name: product.name,
      price: product.price,
      qty: product.qty,
      image: product.image,
      description: product.description,
    });
    const productReturned = await productDocument.save();
    return { type: null, data: productReturned };
  }

  async getProductByIdService(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async updateProductByIdService(
    id: string,
    product: IProduct,
  ): Promise<IProduct> {
    const updatedProduct = await this.productModel
      .findOneAndUpdate({ _id: id }, product, { new: true })
      .lean();
    return updatedProduct;
  }

  async deleteProductByIdService(id: string): Promise<IProduct> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).lean();
    return deletedProduct;
  }
}
