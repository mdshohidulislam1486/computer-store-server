import { z } from 'zod';

const createComputer = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.string(),
    category: z.string(),
    brand: z.string(),
    compatibility: z.string(),
    interface: z.string(),
    condition: z.string(),
    capacity: z.string(),
    color: z.string(),
    image: z.string(),
  }),
});
const updateComputer = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    quantity: z.string().optional(),
    category: z.string().optional(),
    brand: z.string().optional(),
    compatibility: z.string().optional(),
    interface: z.string().optional(),
    condition: z.string().optional(),
    capacity: z.string().optional(),
    color: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const ComputerValidation = {
  createComputer,
  updateComputer,
};
