import { TSoldItem } from './soldproduct-inerface';
import { soldItemModle } from './soldproduct-model';
import { productModel } from '../product/product.model';
import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from 'date-fns';

const getAllSoldItemFromDB = async (params: { time: string }) => {
  const currentDate = new Date();

  let startDate;
  let endDate;
  switch (params.time) {
    case 'daily':
      startDate = startOfDay(currentDate);
      endDate = endOfDay(currentDate);
      break;
    case 'weekly':
      startDate = startOfWeek(currentDate);
      endDate = endOfWeek(currentDate);
      break;
    case 'monthly':
      startDate = startOfMonth(currentDate);
      endDate = endOfMonth(currentDate);
      break;
    case 'yearly':
      startDate = startOfYear(currentDate);
      endDate = endOfYear(currentDate);
      break;
    default:
      startDate = startOfDay(currentDate);
      endDate = startOfDay(currentDate);
      break;
  }

  const result = await soldItemModle.find({
    dateOfSale: { $gte: startDate.toISOString(), $lte: endDate.toISOString() },
  });
  // console.log({ params, startDate, endDate, result });
  return result;
};

const addTheSoldItemIntoDB = async (payload: TSoldItem) => {
  try {
    const result = await soldItemModle.create(payload);
    const findTheSoldItem = await productModel.findById(payload.productId);
    if (findTheSoldItem) {
      const availableQuantity =
        parseFloat(findTheSoldItem?.quantity) - parseFloat(payload.quantity);
      await productModel.findByIdAndUpdate(
        findTheSoldItem._id,
        { $set: { quantity: availableQuantity } },
        { new: true }
      );
    }

    return result;
  } catch (error) {
    new Error('Item not added to sold list');
  }
};

export const SoldItemService = { getAllSoldItemFromDB, addTheSoldItemIntoDB };
