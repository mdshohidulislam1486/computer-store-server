import { Schema, model } from 'mongoose';
import { TCupon } from './cupon.interface';

const cupon = new Schema<TCupon>({
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  code: { type: String, required: true },
});

export const CuponModel = model<TCupon>('cupon', cupon);
