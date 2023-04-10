import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginService } from '../Service/login.service';
import { UserSchema } from '../Schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
