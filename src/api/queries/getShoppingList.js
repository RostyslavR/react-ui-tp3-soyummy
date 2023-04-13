import { axios } from './init';

export const getShoppingList = async () => {
  const { data } = await axios.get('/shopping-list');
  return data.data;
};
