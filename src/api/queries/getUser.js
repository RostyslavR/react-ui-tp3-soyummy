import { axios } from './init';

export const getUser = async () => {
  const { data } = await axios.get('/user');
  return data.data;
};
