import { Model } from 'mongoose';
import { UserDocument } from '../Interface/user.interface';
import AbstractODM from './Abstract.odm';
export declare class UserModel extends AbstractODM<UserDocument> {
    constructor(userModel: Model<UserDocument>);
}
