import { z } from 'zod';

const cuponZodSchema = z.object({
  body: z.object({
    amount: z.number(),
    code: z.string(),
    type: z.string(),
  }),
});

export const cuponValidation = {
  cuponZodSchema,
};
