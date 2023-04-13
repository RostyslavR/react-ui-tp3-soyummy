import { axios } from './init';

export const getIngredients = async () => {
  const { data } = await axios.get('/recipes/ingredients');
  return data.data;
};
