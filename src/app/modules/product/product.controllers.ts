import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsyncs';
import sendResponse from '../../utils/sendResponse';
import { ComputerService } from './product.service';

const addComputer = catchAsync(async (req, res) => {
  const computerData = req.body;
  const result = await ComputerService.addComputerIntoDB(computerData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Computer Added successfully',
    data: result,
  });
});
const getAllComputers = catchAsync(async (req, res) => {
  const result = await ComputerService.getAllComputerFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product items retrived successfully',
    data: result,
  });
});
const updateSingleComputer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await ComputerService.updateSingleItemIntoDB(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product item updated successfully ',
    data: result,
  });
});
const deleteSingleComputer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ComputerService.deleteSingleItemFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product item deleted successfully ',
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ComputerService.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product found with id ',
    data: result,
  });
});
const deleteMultiComputer = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await ComputerService.deleteMultipleItemsFromDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product items deleted successfully',
    data: result,
  });
});

export const ConputerControllers = {
  addComputer,
  getAllComputers,
  updateSingleComputer,
  deleteSingleComputer,
  deleteMultiComputer,
  getSingleProduct,
};
