import { Schema, Document } from 'mongoose';

export const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export interface Product extends Document {
  title: string;
  desc: string;
  price: number;
}
