import { axios } from './init';

export const getStatistics = async () => {
  const { data } = await axios.get('/user/statistics');
  return data.data;
};
