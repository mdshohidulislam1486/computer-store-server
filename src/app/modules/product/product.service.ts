import { productModel } from './product.model';
import { TProduct } from './product.interface';
import QueryBuilder from '../../../builder/QueryBuilder';

const addComputerIntoDB = async (data: TProduct) => {
  const result = await productModel.create(data);
  return result;
};

const searchableFields: string[] = [
  'color',
  'name',
  'category',
  'brand',
  'interface',
  'compatibility',
  'interface',
  'condition',
];
const getAllComputerFromDB = async (query: Record<string, unknown>) => {
  const allproducts = new QueryBuilder(
    productModel.find().where({
      quantity: { $gt: 0 },
      price: { $lt: Number(query.price || 100000000) },
    }),
    query
  )
    .filter()
    .search(searchableFields);

  const result = await allproducts.modelQuery;
  return result;
};
const updateSingleItemIntoDB = async (
  id: string,
  payload: Partial<TProduct>
) => {
  const result = await productModel.updateOne({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteSingleItemFromDB = async (id: string) => {
  const result = await productModel.deleteOne({ _id: id });
  return result;
};

const deleteMultipleItemsFromDB = async (ids: string[]) => {
  try {
    const result = await productModel.deleteMany({ _id: { $in: ids } });
    return result;
  } catch (error) {
    console.error('Error deleting items:', error);
    throw error;
  }
};
const getSingleProductFromDB = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};
export const ComputerService = {
  addComputerIntoDB,
  getAllComputerFromDB,
  updateSingleItemIntoDB,
  deleteSingleItemFromDB,
  deleteMultipleItemsFromDB,
  getSingleProductFromDB,
};
