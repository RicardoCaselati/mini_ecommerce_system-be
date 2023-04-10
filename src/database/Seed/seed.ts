import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from '../Interface/user.interface';
import { IProduct } from '../Interface/product.interface';
import { userData } from './user.seeder';
import { productData } from './product.seeder';

export class seedDatabase {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}
  async seed(): Promise<void> {
    try {
      console.log('Iniciando a popular o banco de dados...');
      await this.userModel.create(userData);
      await this.productModel.create(productData);
      console.log('Banco de dados populado com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  }
}
