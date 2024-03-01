import { TOrder } from './order.interface';
import { orderModel } from './order.model';
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

const addNewOrder = async (payload: TOrder) => {
  try {
    const result = await orderModel.create(payload);
    return result;
  } catch (error) {
    new Error('Order not added');
  }
};

const getAllOrderFromDB = async (params: { time: string }) => {
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

  const result = await orderModel.find({
    purchaseDate: {
      $gte: startDate.toISOString(),
      $lte: endDate.toISOString(),
    },
  });

  return result;
};
export const orderService = {
  addNewOrder,
  getAllOrderFromDB,
};
