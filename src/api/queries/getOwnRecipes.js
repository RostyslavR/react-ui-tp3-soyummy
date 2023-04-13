import { axios } from './init';

export const getOwnRecipes = async ({ queryKey }) => {
  const filter = [...queryKey].pop();
  const { data } = await axios.get('/own-recipes', { params: filter });
  return data.data;
};
