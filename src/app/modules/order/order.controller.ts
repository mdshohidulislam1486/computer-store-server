import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { orderService } from './order.service';

const addOrder = catchAsync(async (req, res) => {
  const serviceReqData = req.body;
  const result = await orderService.addNewOrder(serviceReqData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Added succesfully',
    data: result,
  });
});

export const orderController = {
  addOrder,
};
