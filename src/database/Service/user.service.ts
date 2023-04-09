import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../Interface/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  /**
   * Create a new user
   * @param name
   * @param email
   * @param password
   */
  async create(name: string, email: string, password: string): Promise<IUser> {
    const createdUser = new this.userModel({ name, email, password });
    return createdUser.save();
  }

  /**
   * Find all users
   */
  async findAll(): Promise<IUser[]> {
    return this.userModel.find().exec();
  }
}
