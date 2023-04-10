import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashSync, compareSync } from 'bcryptjs';
import { IUser } from '../Interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly usrModel: Model<IUser>) {}

  async register(user: IUser) {
    try {
      const userExists = await this.usrModel.findOne({ email: user.email });

      if (userExists) {
        return { type: 401, message: 'User already registered' };
      }

      const salt = 10;
      const password = user.password;
      const hash = hashSync(password, salt);

      const newUser = await this.usrModel.create({
        name: user.name,
        email: user.email,
        password: hash,
      });

      const { email, _id, name } = newUser;
      const token = sign(
        { email, id: _id, name },
        process.env.JWT_SECRET as string,
        { expiresIn: '12h' },
      );
      return { type: null, message: token };
    } catch (error) {
      console.log(error);
      return { type: 500, message: 'Internal server error.' };
    }
  }

  async login(payload: any) {
    const user = await this.usrModel.findOne({ email: payload.email });

    if (!user || !compareSync(payload.password, user.password)) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    const { email, name } = user;
    const token = sign({ email, name }, process.env.JWT_SECRET as string, {
      expiresIn: '12h',
    });

    return { type: null, message: token };
  }

  async validateUser(payload: any) {
    return await this.usrModel.findOne({ email: payload.email });
  }

  async getAllUserService(): Promise<IUser[]> {
    const usersRegistred = await this.usrModel.find();
    return usersRegistred;
  }
}
