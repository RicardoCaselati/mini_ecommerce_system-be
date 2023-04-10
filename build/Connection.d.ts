import { Model } from 'mongoose';
import { IUser } from './src/database/Interface/user.interface';
import { IProduct } from './src/database/Interface/product.interface';
import 'dotenv/config';
export declare class ConnectToDatabase {
    private readonly userModel;
    private readonly productModel;
    constructor(userModel: Model<IUser>, productModel: Model<IProduct>);
    connectToDatabase(mongoDatabaseURI?: string): Promise<void>;
}
