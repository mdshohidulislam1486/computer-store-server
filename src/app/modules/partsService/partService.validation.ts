import { z } from 'zod';

const createServiceRequest = z.object({
  body: z.object({
    name: z.string(),
    buyerEmail: z.string(),
    partsName: z.string(),
    reason: z.string(),
    serialNumber: z.string(),
    modelNo: z.string(),
    exptectedDate: z.string(),
    submissionDate: z.string(),
  }),
});

export const serviceValidation = {
  createServiceRequest,
};
