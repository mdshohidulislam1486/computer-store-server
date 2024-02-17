/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../config';
import AppError from '../errors/AppError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import handleValidationError from '../errors/handleValidationError';
import handleZodError from '../errors/handleZodError';
import { TErrorSources } from '../interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = 500;
  let message = 'Something went wrong please try again!';
  let errorMessage = err.message;
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const commonErrorFields = handleZodError(err);
    statusCode = commonErrorFields?.statusCode;
    message = commonErrorFields?.message;
    errorMessage = commonErrorFields.errorMessage;
  } else if (err?.name === 'ValidationError') {
    const commonErrorFields = handleValidationError(err);
    statusCode = commonErrorFields?.statusCode;
    message = commonErrorFields?.message;
    errorMessage = commonErrorFields.errorMessage;
  } else if (err?.name === 'CastError') {
    const commonErrorFields = handleCastError(err);
    statusCode = commonErrorFields?.statusCode;
    message = commonErrorFields?.message;
    errorMessage = commonErrorFields.errorMessage;
  } else if (err?.code === 11000) {
    const commonErrorFields = handleDuplicateError(err);
    statusCode = commonErrorFields?.statusCode;
    message = commonErrorFields?.message;
    errorMessage = commonErrorFields.errorMessage;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }

  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: err,
    stack: err?.stack,
  });
};

export default globalErrorHandler;
