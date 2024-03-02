import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsyncs';
import sendResponse from '../../utils/sendResponse';
import { cuponService } from './cupon.service';

const addCupon = catchAsync(async (req, res) => {
  const order = req.body;
  const result = await cuponService.addCuponIntoDB(order);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: result ? true : false,
    message: result
      ? 'Cupon Added Success fully'
      : 'Cupon not added, Please try with different code ',
    data: result,
  });
});
const getlAllCupon = catchAsync(async (req, res) => {
  const result = await cuponService.getAllCuponFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cupon retrived Successfully ',
    data: result,
  });
});

const deleteSingleCupon = catchAsync(async (req, res) => {
  const { id } = req.params;
  await cuponService.deleteSingleCuponFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cupon deleted Successfully ',
    data: '',
  });
});

const getSingleCupon = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await cuponService.getSingleCuponFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: result ? true : false,
    message: 'Cupon data retrived  ',
    data: result,
  });
});
export const cuponController = {
  addCupon,
  getlAllCupon,
  deleteSingleCupon,
  getSingleCupon,
};
