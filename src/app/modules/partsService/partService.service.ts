import { TServicePart } from './partService.interface';
import { servicePartModel } from './partService.model';

const addServicePart = async (payload: TServicePart) => {
  try {
    const result = await servicePartModel.create(payload);
    return result;
  } catch (error) {
    new Error('Could not add this request');
  }
};

export const partServiceService = {
  addServicePart,
};
