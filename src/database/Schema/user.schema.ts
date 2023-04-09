import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  points: { type: Number, required: true },
});
