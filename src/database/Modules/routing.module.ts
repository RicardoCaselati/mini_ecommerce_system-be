import { Module } from '@nestjs/common';
import { LoginController } from '../Controller/login.controller';
import { UsersController } from '../Controller/user.controller';
import { UserModule } from './user.module';
import { LoginModule } from './login.module';

@Module({
  imports: [LoginModule, UserModule],
  controllers: [LoginController, UsersController],
})
export class RoutingModule {}
