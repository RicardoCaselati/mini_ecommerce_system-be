import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayload } from '../Interface/payload.interface';
import AbstractODM from '../Models/Abstract.odm';
import { IUser } from '../Interface/user.interface';
import { compareSync } from 'bcryptjs';

@Injectable()
export class LoginService extends AbstractODM<IUser> {
  constructor(@InjectModel('User') private readonly userService: Model<IUser>) {
    super(userService, null, 'User');
  }

  async loginPayload(body: IPayload) {
    const data = await this.userService.findOne({ email: body.email } as any);

    if (!data || !compareSync(body.password, data.password)) {
      return { type: 401, message: 'Incorrect email or password' };
    }

    const { email, name } = data;
    const token = sign({ email, name }, process.env.JWT_SECRET as string, {
      expiresIn: '12h',
    });

    return { type: null, message: token };
  }

  async validateUser(payload: any) {
    return await this.findByPayload(payload);
  }
}
