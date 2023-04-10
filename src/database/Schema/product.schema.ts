import { Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { discriminatorKey: 'type' },
); // definindo o campo de discriminação do esquema pai
