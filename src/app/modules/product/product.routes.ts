import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ComputerValidation } from './product.validation';
import { ConputerControllers } from './product.controllers';

const router = express.Router();

router
  .get('/', ConputerControllers.getAllComputers)
  .get('/:id', ConputerControllers.getSingleProduct)
  .put(
    '/:id',
    validateRequest(ComputerValidation.updateComputer),
    ConputerControllers.updateSingleComputer
  )
  .delete('/:id', ConputerControllers.deleteSingleComputer)
  .delete('/', ConputerControllers.deleteMultiComputer)
  .post(
    '/add-computer',
    validateRequest(ComputerValidation.createComputer),
    ConputerControllers.addComputer
  );

export const ComputerRoutes = router;
