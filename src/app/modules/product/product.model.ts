import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const computerSchema = new Schema<TProduct>({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  compatibility: { type: String, required: true },
  interface: { type: String, required: true },
  condition: { type: String, required: true },
  capacity: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true },
});

computerSchema.pre<TProduct>('save', function (next) {
  this.price = Number(this.price);
  next();
});
computerSchema.pre<TProduct>('updateOne', function (next) {
  this.price = Number(this.price);
  next();
});

export const productModel = model<TProduct>('product', computerSchema);
