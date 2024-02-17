import mongoose from 'mongoose';
import { TCommonErrorResponse } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError
): TCommonErrorResponse => {
  const statusCode = 400;

  // Using regex to extract ObjectId
  const formattedID = err?.stringValue.replace(/"/g, '');
  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage: `${formattedID} is not a valid ID!`,
  };
};

export default handleCastError;
