import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../Controller/user.controller';
import { UserService } from '../Service/user.service';
import { UserSchema } from '../Schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
