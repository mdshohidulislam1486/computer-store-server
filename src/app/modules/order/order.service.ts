import { TOrder } from './order.interface';
import { orderModel } from './order.model';

const addNewOrder = async (payload: TOrder) => {
  try {
    const result = await orderModel.create(payload);
    return result;
  } catch (error) {
    new Error('Order not added');
  }
};

export const orderService = {
  addNewOrder,
};
