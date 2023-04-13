import { axios } from './init';

export const addFavorite = async id => {
  const { data } = await axios.post('/recipes/favorite', { id });
  return data.data;
};
