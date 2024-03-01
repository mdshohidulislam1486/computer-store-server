import { TServicePart } from './partService.interface';

const addServicePart = async (payload: TServicePart) => {
  try {
    const result = await soldItemModle.create(payload);
    const findTheSoldItem = await productModel.findById(payload.productId);
    if (findTheSoldItem) {
      const availableQuantity =
        parseFloat(findTheSoldItem?.quantity) - parseFloat(payload.quantity);
      await productModel.findByIdAndUpdate(
        findTheSoldItem._id,
        { $set: { quantity: availableQuantity } },
        { new: true }
      );
    }

    return result;
  } catch (error) {
    new Error('Item not added to sold list');
  }
};

export const partServiceService = {
  addServicePart,
};
