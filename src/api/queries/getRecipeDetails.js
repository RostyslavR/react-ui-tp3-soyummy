import { axios } from './init';

export const getRecipeDetails = async ({ queryKey }) => {
  const id = [...queryKey].pop();
  const { data } = await axios.get(`/recipes/id/${id}`);
  return data.data;
};
