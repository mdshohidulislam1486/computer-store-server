import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { serviceValidation } from './partService.validation';
import { servicePartController } from './partService.controller';

const router = express.Router();

router.post(
  '/part-service',
  validateRequest(serviceValidation.createServiceRequest),
  servicePartController.addServicePart
);

export const PartServiceRoute = router;
