import mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../Schema/user.schema';
import userData from './user.seeder';

export async function seedDatabase() {
  await MongooseModule.forRoot(process.env.MONGO_DB_URL, {
    useUnifiedTopology: true,
  });

  const userModel = mongoose.model('User', UserSchema);

  // verifica se a conexão está pronta antes de executar a operação do modelo
  const connection: Connection = mongoose.connection;
  if (connection.readyState !== 1) {
    await new Promise((resolve) => connection.once('connected', resolve));
  }
  // await userModel.deleteMany({}); // limpa os dados existentes

  await userModel.insertMany(userData);
  console.log('banco de dados populado com sucesso');
}
