import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { IUser } from '../Interface/user.interface';
import AbstractODM from '../Models/Abstract.odm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashSync } from 'bcryptjs';

@Injectable()
export class UsersService extends AbstractODM<IUser> {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    super(userModel, null, 'User');
  }

  async createUserService(body: IUser) {
    const userRegistred = await this.userModel.findOne({
      email: body.email,
    } as any);

    if (userRegistred) {
      return { type: 401, message: 'User already registered' };
    }

    const salt = 10;
    const password = body.password;
    const hash = hashSync(password, salt);
    const usertoSubmit: any = {
      name: body.name,
      email: body.email,
      password: hash,
    };
    const data = await this.userModel.create(usertoSubmit);

    const { email, _id, name } = data;
    const token = sign(
      { email, id: _id, name },
      process.env.JWT_SECRET as string,
      { expiresIn: '12h' },
    );
    return { type: null, message: token };
  }

  async getAllUserService(): Promise<IUser[]> {
    const usersRegistred = await this.userModel.find();
    return usersRegistred;
  }
}
