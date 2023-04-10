import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true, default: 'user' }, // adicionando um campo de discriminação
  },
  { discriminatorKey: 'type' },
); // definindo o campo de discriminação do esquema pai
