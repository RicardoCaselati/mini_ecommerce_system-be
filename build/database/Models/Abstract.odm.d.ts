import { Model, Schema } from 'mongoose';
declare abstract class AbstractODM<T> {
    protected readonly model: Model<T>;
    protected readonly schema: Schema;
    protected readonly modelName: string;
    constructor(model: Model<T>, schema: Schema, modelName: string);
    find(): Promise<T[]>;
    findOne(data: Partial<T>): Promise<T | null>;
    create(data: T): Promise<T>;
    findOneAndUpdate(id: string, data: Partial<T>, options?: Record<string, unknown>): Promise<T | null>;
    delete(id: string): Promise<T | null>;
}
export default AbstractODM;
