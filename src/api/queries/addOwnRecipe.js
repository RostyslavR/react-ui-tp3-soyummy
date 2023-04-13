import { axios } from './init';

export const addOwnRecipe = async recipe => {
  const { data } = await axios.postForm('/own-recipes', recipe);
  return data.data;
};
