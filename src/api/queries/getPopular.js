import { axios } from './init';

export const getPopular = async () => {
  const { data } = await axios.get('/recipes/popular');
  return data.data;
};
