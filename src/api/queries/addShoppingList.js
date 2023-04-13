import { axios } from './init';

export const addShoppingList = async ingredient => {
  const { data } = await axios.post('/shopping-list', ingredient);
  return data.data;
};
