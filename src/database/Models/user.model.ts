import { model, Document } from 'mongoose';
import { IUser } from '../Interface/user.interface';
import { UserSchema } from '../Schema/user.schema';

export const UserModel = model<IUser & Document>('User', UserSchema);
