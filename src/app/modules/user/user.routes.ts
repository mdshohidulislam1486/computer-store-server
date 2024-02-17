import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControlers } from './user.controller';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.userValidationSchema),
  UserControlers.createUser
);

export const UserRoutes = router;
