/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCommonErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TCommonErrorResponse => {
  // Extract value within double quotes using regex
  const regex = /title: "(.*?)"/;
  const match = err.message.match(regex);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Value',
    errorMessage: `${
      extractedMessage ? extractedMessage : 'This value'
    } already exist`,
  };
};

export default handleDuplicateError;
