import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsyncs';
import { SoldItemService } from './soldproduct-service';
import sendResponse from '../../utils/sendResponse';

const addSoldItem = catchAsync(async (req, res) => {
  const soldItem = req.body;
  const result = await SoldItemService.addTheSoldItemIntoDB(soldItem);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Item sold',
    data: result,
  });
});
const getAllSoldItems = catchAsync(async (req, res) => {
  const getQuery = req.query as { time: string };
  if (!getQuery.time) {
    getQuery.time = 'daily';
  }
  const result = await SoldItemService.getAllSoldItemFromDB(getQuery);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sold items retrived successfylly',
    data: result,
  });
});

export const soldItemControllers = {
  addSoldItem,
  getAllSoldItems,
};
