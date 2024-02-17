export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TMetaType = {
  limit: number;
  page: number;
  totla: number;
};
export type TCommonErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: string;
  meta?: TMetaType;
};
