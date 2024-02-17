import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TCommonErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TCommonErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const errorMessageStringArray = errorSources?.map(
    (val) => `${val.path} ${val.message}`
  );

  const errorMessage = errorMessageStringArray?.join(', ');
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage,
  };
};

export default handleZodError;
