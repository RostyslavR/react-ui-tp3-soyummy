import { axios } from './init';

export const getOwnRecipes = async ({ queryKey }) => {
  const filter = [...queryKey].pop();
  const { data } = await axios.get('/own-recipes', { params: filter });
  const result = data.data;
  result.total = data.total;
  result.page = data.page;
  result.limit = data.limit;
  return result;
};
