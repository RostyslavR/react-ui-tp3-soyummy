import { axios } from './init';

export const deleteFavorite = async id => {
  const { data } = await axios.delete(`/recipes/favorite/${id}`);
  return data.data;
};
