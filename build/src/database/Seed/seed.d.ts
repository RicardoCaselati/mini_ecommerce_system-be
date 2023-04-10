import { Model } from 'mongoose';
import { IUser } from '../Interface/user.interface';
import { IProduct } from '../Interface/product.interface';
export declare class seedDatabase {
    private readonly userModel;
    private readonly productModel;
    constructor(userModel: Model<IUser>, productModel: Model<IProduct>);
    seed(): Promise<void>;
}
