import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async (data: TUser) => {
  const user = await User.isUserExistsByEmail(data.email);
  if (user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Already Exist !');
  }
  const result = await User.create(data);
  return result;
};

export const UserServices = {
  createUser,
};
