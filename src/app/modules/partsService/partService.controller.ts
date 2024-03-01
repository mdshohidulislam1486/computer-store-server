import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsyncs';
import sendResponse from '../../utils/sendResponse';
import { partServiceService } from './partService.service';

const addServicePart = catchAsync(async (req, res) => {
  const serviceReqData = req.body;
  const result = await partServiceService.addServicePart(serviceReqData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reqest Added succesfully',
    data: result,
  });
});

export const servicePartController = {
  addServicePart,
};
