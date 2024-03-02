import { TCupon } from './cupon.interface';
import { CuponModel } from './cupon.model';

const addCuponIntoDB = async (payload: TCupon) => {
  try {
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
    console.log({ result });
    return result;
  } catch (error) {
    new Error('Could not found the id ');
  }
};

export const cuponService = {
  addCuponIntoDB,
  getAllCuponFromDB,
  deleteSingleCuponFromDB,
};
