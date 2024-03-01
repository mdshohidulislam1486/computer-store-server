import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { orderValidation } from './order.validation';
import { orderController } from './order.controller';
const router = express.Router();

router
  .get('/', orderController.getAllOrder)
  .post(
    '/submit-order',
    validateRequest(orderValidation.orderZodScheam),
    orderController.addOrder
  );

export const OrderRoutes = router;
