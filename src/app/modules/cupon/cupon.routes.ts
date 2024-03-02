import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { cuponValidation } from './cupon.validation';
import { cuponController } from './cupon.controller';

const router = express.Router();

router
  .get('/', cuponController.getlAllCupon)
  .post(
    '/add-cupon',
    validateRequest(cuponValidation.cuponZodSchema),
    cuponController.addCupon
  )
  .delete('/:id', cuponController.deleteSingleCupon);

export const CuponRoutes = router;
