import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { soldItemValidaiton } from './soldproduct-validation';
import { soldItemControllers } from './soldproduct-controler';

const router = express.Router();

router
  .post(
    '/',
    validateRequest(soldItemValidaiton.addSoldItem),
    soldItemControllers.addSoldItem
  )
  .get('/', soldItemControllers.getAllSoldItems);

export const SoldItmeRoutes = router;
