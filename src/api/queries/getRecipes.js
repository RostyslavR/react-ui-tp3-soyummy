import { axios } from './init';

export const getRecipes = async ({ queryKey }) => {
  const filter = [...queryKey].pop();
  const { data } = await axios.get('/recipes', { params: filter });
  return data.data;
};
