import { axios } from './init';

export const getCategories = async () => {
  const { data } = await axios.get('/recipes/categories');
  return data.data;
};
