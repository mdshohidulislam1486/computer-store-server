import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { orderService } from './order.service';
import catchAsync from '../../utils/catchAsyncs';

const addOrder = catchAsync(async (req, res) => {
  const order = req.body;
  console.log({ order });
  const result = await orderService.addNewOrder(order);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Added succesfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const getQuery = req.query as { time: string };
  if (!getQuery.time) {
    getQuery.time = 'daily';
  }
  const result = await orderService.getAllOrderFromDB(getQuery);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrived successs fully ',
    data: result,
  });
});

export const orderController = {
  addOrder,
  getAllOrder,
};
