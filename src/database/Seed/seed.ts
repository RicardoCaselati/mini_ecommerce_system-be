import mongoose from 'mongoose';
import { UserModel } from '../Models/user.model';
import { userData } from './user.seeder';

export const seedDatabase = async (connection: mongoose.Connection) => {
  try {
    console.log('Iniciando a popular o banco de dados...');
    const result = await UserModel.insertMany(userData);
    console.log(`Inseridos ${result.length} usuários`);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};
