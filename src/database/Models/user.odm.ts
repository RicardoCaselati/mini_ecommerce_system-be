import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../Interface/user.interface';
import { UserSchema } from '../Schema/user.schema';
import AbstractODM from './Abstract.odm';

@Injectable()
export class UserODM extends AbstractODM<IUser> {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    super(userModel, UserSchema, 'User');
  }

  // Implement your custom methods here
}
