import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    user: z.object({
      fullName: z.string(),
      email: z.string(),
      password: z.string(),
      role: z.enum(['admin']),
      isDeleted: z.boolean().optional(),
      passwordChangedAt: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
