import { Module } from '@nestjs/common';
import { UsersController } from '../Controller/user.controller';
import { UsersService } from '../Service/user.service';
import { LoginService } from '../Service/login.service';
import { UserODM } from '../Models/user.odm';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../Schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, LoginService, UserODM],
  exports: [UsersService],
})
export class UserModule {}
