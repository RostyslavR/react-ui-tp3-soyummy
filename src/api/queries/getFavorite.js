import { axios } from './init';

export const getFavorite = async ({ queryKey }) => {
  const filter = [...queryKey].pop();
  const { data } = await axios.get('/recipes/favorite', { params: filter });
  return data.data;
};
