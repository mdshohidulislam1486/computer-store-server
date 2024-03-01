import { z } from 'zod';

const TItemsSchema = z.object({
  _id: z.string(),
  name: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  image: z.string(),
  availableItem: z.number(),
});

const orderZodScheam = z.object({
  body: z.object({
    buyerName: z.string(),
    shippingAddress: z.string(),
    quantity: z.number(),
    shippingCost: z.number(),
    items: z.array(TItemsSchema),
    purchaseDate: z.string(),
  }),
});

export const orderValidation = {
  orderZodScheam,
};
