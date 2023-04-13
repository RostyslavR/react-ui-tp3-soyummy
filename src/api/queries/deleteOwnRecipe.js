import { axios } from './init';

export const deleteOwnRecipe = async id => {
  const { data } = await axios.delete(`/own-recipes/${id}`);
  return data.data;
};
