import { Schema, model } from 'mongoose';
import { TServicePart } from './partService.interface';

const serviceRequestModel = new Schema<TServicePart>({
  name: { type: String, required: true },
  buyerEmail: { type: String, required: true },
  partsName: { type: String, required: true },
  reason: { type: String, required: true },
  serialNumber: { type: String, required: true },
  modelNo: { type: String, required: true },
  exptectedDate: { type: String, required: true },
  submissionDate: { type: String, required: true },
});

export const servicePartModel = model<TServicePart>(
  'serviceRequest',
  serviceRequestModel
);
