import { Document } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    iat?: number;
}
export interface UserDocument {
    name: string;
    email: string;
    password: string;
}
