import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/part-service',
  validateRequest(ComputerValidation.createComputer),
  ConputerControllers.addComputer
);

export const ComputerRoutes = router;
