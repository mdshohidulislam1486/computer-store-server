import mongoose from 'mongoose';
import { TCommonErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): TCommonErrorResponse => {
  const statusCode = 400;
  // Using regex to extract ObjectId
  let formattedValue;
  let field;
  for (const [key, value] of Object.entries(err.errors)) {
    formattedValue = value;
    field = key;
  }
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: `${
      formattedValue ? formattedValue : 'Value'
    } is not valid  for ${field}`,
  };
};

export default handleValidationError;
