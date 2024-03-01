import { Schema, model } from 'mongoose';
import { TItems, TOrder } from './order.interface';

const Items = new Schema<TItems>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number },
  unitPrice: { type: Number },
  image: String,
  availableItem: Number,
});
const order = new Schema<TOrder>({
  buyerName: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  quantity: { type: Number },
  shippingCost: { type: Number },
  items: { type: [Items], required: true },
  purchaseDate: { type: Date, required: true },
});

export const orderModel = model<TOrder>('order', order);
