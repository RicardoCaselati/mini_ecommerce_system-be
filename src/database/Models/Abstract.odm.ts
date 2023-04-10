import { Model, Schema, isValidObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
abstract class AbstractODM<T> {
  constructor(
    @InjectModel('modelName') protected readonly model: Model<T>,
    protected readonly schema: Schema,
    protected readonly modelName: string,
  ) {}

  public async find(): Promise<T[]> {
    return this.model.find().exec();
  }

  public async findOne(data: Partial<T>): Promise<T | null> {
    return this.model.findOne({ ...data }).exec();
  }

  // public async findById(id: string): Promise<T | null> {
  //   if (!isValidObjectId(id)) return null;
  //   return this.model.findById(id).select({ __v: 0 }).lean().exec();
  // }

  public async create(data: T): Promise<T> {
    const createdObj = new this.model(data);
    return createdObj.save();
  }

  public async findOneAndUpdate(
    id: string,
    data: Partial<T>,
    options: Record<string, unknown> = { new: true },
  ): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    const result = await this.model.findByIdAndUpdate(id, data, options).exec();
    return result ? result.toObject() : null;
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    return this.model.findByIdAndDelete(id).exec();
  }

  async findByPayload(payload: Record<string, any>) {
    const query = {};
    Object.keys(payload).forEach((key) => {
      query[key] = payload[key];
    });
    return await this.model.findOne(query);
  }
}

export default AbstractODM;
