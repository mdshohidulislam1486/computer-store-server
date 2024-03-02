import { TCupon } from './cupon.interface';
import { CuponModel } from './cupon.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const addCuponIntoDB = async (payload: TCupon) => {
  try {
    const cupontExist = await CuponModel.findOne({ code: payload.code });
    if (cupontExist) {
      new AppError(httpStatus.BAD_REQUEST, 'Could not add the cupon');
      return false;
    }
    const result = await CuponModel.create(payload);
    return result;
  } catch (error) {
    new Error('Could  not add cupon');
  }
};
const getAllCuponFromDB = async () => {
  const result = await CuponModel.find({});
  return result;
};

const deleteSingleCuponFromDB = async (id: string) => {
  try {
    const result = await CuponModel.deleteOne({ _id: id });
    return result;
  } catch (error) {
    new Error('Could not found the id ');
  }
};

const getSingleCuponFromDB = async (code: string) => {
  try {
    const result = await CuponModel.findOne({ code: code });
    return result;
  } catch (error) {
    new Error('Could not found the id ');
  }
};
export const cuponService = {
  addCuponIntoDB,
  getAllCuponFromDB,
  deleteSingleCuponFromDB,
  getSingleCuponFromDB,
};
