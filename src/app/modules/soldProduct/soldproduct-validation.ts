import { z } from 'zod';

const addSoldItem = z.object({
  body: z.object({
    name: z.string(),
    productId: z.string(),
    quantity: z.string(),
    buyerName: z.string(),
    dateOfSale: z.string(),
  }),
});

export const soldItemValidaiton = {
  addSoldItem,
};
