import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsyncs';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createUser = catchAsync(async (req, res) => {
  const { user } = req.body;
  const result = await UserServices.createUser(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is Created successfully ',
    data: result,
  });
});

export const UserControlers = {
  createUser,
};
