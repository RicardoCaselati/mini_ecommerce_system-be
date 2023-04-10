import { Model } from 'mongoose';
import { UserDocument } from '../Interface/user.interface';
import AbstractODM from '../Models/Abstract.odm';
export declare class UserService extends AbstractODM<UserDocument> {
    constructor(userModel: Model<UserDocument>);
}
