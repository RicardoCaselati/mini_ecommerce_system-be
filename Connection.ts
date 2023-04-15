import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './src/database/Interface/user.interface';
import { IProduct } from './src/database/Interface/product.interface';
import { seedDatabase } from './src/database/Seed/seed';
import 'dotenv/config';

const MONGO_DB_URL =
  process.env.MONGO_DB_URL ||
  'mongodb+srv://mongo:8jPVCjHierlKyooi@cluster0.urfcy2p.mongodb.net/?retryWrites=true&w=majority';

export class ConnectToDatabase {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}

  async connectToDatabase(mongoDatabaseURI = MONGO_DB_URL) {
    try {
      await mongoose.connect(mongoDatabaseURI, {
        connectTimeoutMS: 10000,
        socketTimeoutMS: 30000,
      });
      console.log('Connecting to database...');
      const SeedDatabase = new seedDatabase(this.userModel, this.productModel);
      await this.userModel.deleteMany();
      await this.productModel.deleteMany();
      await SeedDatabase.seed();
    } catch (error) {
      console.error('Error connecting to database', error);
    }
  }
}
