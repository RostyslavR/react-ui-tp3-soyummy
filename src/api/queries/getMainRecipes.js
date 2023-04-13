import { axios } from './init';

export const getMainRecipes = async () => {
  const { data } = await axios.get('/recipes/main-page');
  return data.data;
};
