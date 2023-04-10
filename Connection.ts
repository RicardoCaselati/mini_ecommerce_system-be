import mongoose from 'mongoose';
import { UserModel } from './src/database/Models/user.model';
import { seedDatabase } from './src/database/Seed/seed';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://db/mini_ecommerce_system_db';

const connectToDatabase = async (
  mongoDatabaseURI = process.env.MONGO_DB_URL || MONGO_DB_URL,
) => {
  try {
    await mongoose.connect(mongoDatabaseURI, {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 30000,
    });
    console.log('Connecting to database...');

    await UserModel.deleteMany();
    await seedDatabase(mongoose.connection);
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};

export default connectToDatabase;
