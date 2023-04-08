import mongoose from 'mongoose';
// import User from '../Models/User.model';
// import Menu from '../Models/Menu.model';
// import Category from '../Models/Category.model';
// import seedDatabase from '../seeder/seed';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://db:27017';

const connectToDatabase = async (
  mongoDatabaseURI = process.env.MONGO_DB_URL || MONGO_DB_URL,
) => {
  try {
    await mongoose.connect(mongoDatabaseURI, {
      dbName: 'online_menu',
      connectTimeoutMS: 10000,
    });
    console.log('Connecting to database...');

    // await Menu.deleteMany();
    // await User.deleteMany();
    // await Category.deleteMany();
    // await seedDatabase(mongoose.connection);
  } catch (error) {
    console.error('Error connecting to database', error);
  }
};

export default connectToDatabase;
