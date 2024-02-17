import { Schema, model } from 'mongoose';
import { TSoldItem } from './soldproduct-inerface';

const soldItemSchema = new Schema<TSoldItem>({
  name: { type: String, required: true },
  quantity: { type: String, required: true },
  productId: { type: String, required: true },
  buyerName: { type: String, required: true },
  dateOfSale: { type: String, required: true },
});

export const soldItemModle = model<TSoldItem>('solditems', soldItemSchema);
